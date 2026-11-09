// ==========================================================================
// تطبيق منصة الامتحانات التفاعلية لمادة GEN002 Mathematics 1
// ==========================================================================

const state = {
  currentCategory: "all",
  searchQuery: "",
  showMistakesOnly: false,
  answers: {}, // { [questionId]: { userAnswer, isCorrect, answeredAt } }
  stats: {
    total: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0
  },
  theme: "dark",
  soundEnabled: true,
  extremeActive: false,
  extremeWarningShown: false
};

// ==========================================================================
// 1. Web Audio API Sound Effects Synthesizer (بدون أي ملفات خارجية)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playCorrect() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.12); // G5
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.25); // C6

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playWrong() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(130, now + 0.28);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.32);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playStreak() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playDamarSound() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.9);

      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.95);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.95);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }
}

const sounds = new SoundFX();

// ==========================================================================
// 2. HTML5 Canvas Fiery Particle Background (وضع الدمار الأقصى)
// ==========================================================================
class FireCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animationId = null;
    this.active = false;
    this.init();
  }

  init() {
    if (!this.canvas) return;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  start() {
    this.active = true;
    if (this.canvas) this.canvas.classList.add('active');
    this.particles = [];
    this.loop();
  }

  stop() {
    this.active = false;
    if (this.canvas) this.canvas.classList.remove('active');
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  createParticle() {
    return {
      x: Math.random() * this.width,
      y: this.height + Math.random() * 20,
      size: Math.random() * 4 + 2,
      speedY: Math.random() * 2.5 + 1.2,
      speedX: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.7 + 0.3,
      decay: Math.random() * 0.01 + 0.006,
      color: Math.random() > 0.4 ? 'rgba(239, 68, 68, ' : (Math.random() > 0.5 ? 'rgba(249, 115, 22, ' : 'rgba(234, 179, 8, ')
    };
  }

  loop() {
    if (!this.active || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (this.particles.length < 90) {
      this.particles.push(this.createParticle());
      this.particles.push(this.createParticle());
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.y -= p.speedY;
      p.x += p.speedX;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y < -10) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + p.opacity + ')';
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = '#f97316';
      this.ctx.fill();
    }

    this.animationId = requestAnimationFrame(() => this.loop());
  }
}

let fireCanvas = null;

// ==========================================================================
// 3. Question Bank Master Aggregator
// ==========================================================================
function getAllQuestions() {
  const normal = typeof questionsData !== 'undefined' ? questionsData : [];
  const extreme = typeof extremeQuestionsData !== 'undefined' ? extremeQuestionsData : [];
  return [...normal, ...extreme];
}

// ==========================================================================
// 4. Persistence (Local Storage)
// ==========================================================================
function loadSavedState() {
  try {
    const savedAns = localStorage.getItem('gen002_math1_answers');
    if (savedAns) state.answers = JSON.parse(savedAns);

    const savedStats = localStorage.getItem('gen002_math1_stats');
    if (savedStats) state.stats = JSON.parse(savedStats);

    const savedTheme = localStorage.getItem('gen002_math1_theme');
    if (savedTheme) state.theme = savedTheme;

    const savedSound = localStorage.getItem('gen002_math1_sound');
    if (savedSound !== null) state.soundEnabled = savedSound === 'true';
  } catch (e) {
    console.warn("Storage loading failed", e);
  }
}

function saveState() {
  try {
    localStorage.setItem('gen002_math1_answers', JSON.stringify(state.answers));
    localStorage.setItem('gen002_math1_stats', JSON.stringify(state.stats));
    localStorage.setItem('gen002_math1_theme', state.theme);
    localStorage.setItem('gen002_math1_sound', state.soundEnabled ? 'true' : 'false');
  } catch (e) {
    console.warn("Storage saving failed", e);
  }
}

// ==========================================================================
// 5. Updating Dashboard & Stats
// ==========================================================================
function updateDashboard() {
  const allQ = getAllQuestions();
  let correctCount = 0;
  let wrongCount = 0;

  Object.values(state.answers).forEach(ans => {
    if (ans.isCorrect) correctCount++;
    else wrongCount++;
  });

  const totalAnswered = correctCount + wrongCount;
  const scorePct = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
  const overallPct = allQ.length > 0 ? Math.round((totalAnswered / allQ.length) * 100) : 0;

  state.stats.total = totalAnswered;
  state.stats.correct = correctCount;
  state.stats.wrong = wrongCount;

  // DOM elements
  const elTotal = document.getElementById('statTotal');
  const elCorrect = document.getElementById('statCorrect');
  const elWrong = document.getElementById('statWrong');
  const elScorePct = document.getElementById('statScorePct');
  const elStreak = document.getElementById('statStreak');
  const elProgressFill = document.getElementById('progressFill');
  const elProgressText = document.getElementById('progressText');

  if (elTotal) elTotal.textContent = `${totalAnswered} / ${allQ.length}`;
  if (elCorrect) elCorrect.textContent = correctCount;
  if (elWrong) elWrong.textContent = wrongCount;
  if (elScorePct) elScorePct.textContent = `${scorePct}%`;
  if (elStreak) elStreak.textContent = `${state.stats.streak} 🔥`;
  if (elProgressFill) elProgressFill.style.width = `${overallPct}%`;
  if (elProgressText) {
    elProgressText.textContent = `مستوى الإنجاز: ${totalAnswered} من ${allQ.length} (${overallPct}%) - نسبة الدقة: ${scorePct}%`;
  }

  updateCategoryBadges();
  saveState();
}

function updateCategoryBadges() {
  const allQ = getAllQuestions();
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const cat = btn.dataset.category;
    let count = 0;
    if (cat === 'all') {
      count = allQ.length;
    } else if (cat === 'extreme') {
      count = typeof extremeQuestionsData !== 'undefined' ? extremeQuestionsData.length : 0;
    } else if (cat === 'true_false' || cat === 'mcq' || cat === 'calc' || cat === 'errors' || cat === 'essay') {
      count = allQ.filter(q => q.category === cat).length;
    } else {
      // topic filter
      count = allQ.filter(q => q.topic === cat).length;
    }
    const badge = btn.querySelector('.tab-count');
    if (badge) badge.textContent = count;
  });
}

// ==========================================================================
// 6. Mandatory Answer Locking & Feedback Engine
// ==========================================================================
function handleAnswer(questionId, userAnswer, isCorrect) {
  // If already locked, ignore
  if (state.answers[questionId]) return;

  // Record Answer
  state.answers[questionId] = {
    userAnswer,
    isCorrect,
    answeredAt: new Date().toISOString()
  };

  // Streak logic
  if (isCorrect) {
    state.stats.streak++;
    if (state.stats.streak > state.stats.bestStreak) {
      state.stats.bestStreak = state.stats.streak;
    }
    if (state.stats.streak >= 3 && state.stats.streak % 3 === 0) {
      sounds.playStreak();
    } else {
      sounds.playCorrect();
    }
  } else {
    state.stats.streak = 0;
    sounds.playWrong();
  }

  // Update card DOM
  const card = document.getElementById(`q-card-${questionId}`);
  if (card) {
    applyLockingToCard(card, questionId);
  }

  updateDashboard();
}

function applyLockingToCard(card, questionId) {
  const ans = state.answers[questionId];
  if (!ans) return;

  const allQ = getAllQuestions();
  const q = allQ.find(item => item.id === questionId);
  if (!q) return;

  card.classList.add('is-locked');
  if (ans.isCorrect) {
    card.classList.add('answered-correct');
  } else {
    card.classList.add('answered-wrong');
  }

  // Disable all interactive options / inputs inside this card
  card.querySelectorAll('button, input, select').forEach(el => {
    if (!el.classList.contains('essay-toggle-btn') && !el.classList.contains('copy-math-btn')) {
      el.disabled = true;
    }
  });

  // Highlight choices according to type
  if (q.type === 'boolean') {
    const trueBtn = card.querySelector('.btn-tf-true');
    const falseBtn = card.querySelector('.btn-tf-false');
    if (trueBtn && falseBtn) {
      if (q.correctAnswer === true) trueBtn.classList.add('is-correct');
      if (q.correctAnswer === false) falseBtn.classList.add('is-correct');
      if (!ans.isCorrect) {
        if (ans.userAnswer === true) trueBtn.classList.add('is-wrong');
        if (ans.userAnswer === false) falseBtn.classList.add('is-wrong');
      }
    }
  } else if (q.type === 'mcq') {
    card.querySelectorAll('.mcq-option-btn').forEach(btn => {
      const idx = parseInt(btn.dataset.index, 10);
      if (idx === q.correctAnswer) {
        btn.classList.add('is-correct');
      }
      if (!ans.isCorrect && idx === ans.userAnswer) {
        btn.classList.add('is-wrong');
      }
    });
  } else if (q.type === 'numeric') {
    const input = card.querySelector('.calc-answer-input');
    const submitBtn = card.querySelector('.calc-submit-btn');
    if (input) {
      input.value = ans.userAnswer;
      if (ans.isCorrect) input.classList.add('input-correct');
      else input.classList.add('input-wrong');
    }
    if (submitBtn) {
      submitBtn.textContent = ans.isCorrect ? "✅ إجابة صحيحة ومقفلة" : "❌ إجابة خاطئة ومقفلة";
    }
  } else if (q.type === 'fix_step') {
    card.querySelectorAll('.fix-step-item').forEach(stepEl => {
      const stepNum = parseInt(stepEl.dataset.step, 10);
      if (stepNum === q.bugStep) {
        stepEl.classList.add('is-correct-bug');
      }
      if (!ans.isCorrect && stepNum === ans.userAnswer) {
        stepEl.classList.add('is-wrong-selection');
      }
    });
  }

  // Reveal Explanation Box
  const expBox = card.querySelector('.q-explanation');
  if (expBox) {
    expBox.classList.remove('hidden');
    expBox.classList.add('show-animated');
  }

  // Render KaTeX in this card
  if (window.renderMathInElement) {
    renderMathInElement(card, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ]
    });
  }
}

// ==========================================================================
// 7. Rendering Questions
// ==========================================================================
function renderQuestions() {
  const container = document.getElementById('questionsList');
  if (!container) return;

  const allQ = getAllQuestions();
  let filtered = allQ.filter(q => {
    // 1. Extreme mode filter
    if (state.currentCategory === 'extreme') {
      if (q.category !== 'extreme') return false;
    } else if (state.currentCategory !== 'all') {
      if (q.category !== state.currentCategory && q.topic !== state.currentCategory) {
        return false;
      }
    }

    // 2. Mistakes only filter
    if (state.showMistakesOnly) {
      const userAns = state.answers[q.id];
      if (!userAns || userAns.isCorrect) return false;
    }

    // 3. Search query filter
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase();
      const matchText = (q.title + " " + q.text + " " + (q.textAr || "") + " " + (q.explanation || "")).toLowerCase();
      if (!matchText.includes(query)) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card">
        <div class="empty-icon">🔍</div>
        <h3>لا توجد أسئلة تطابق الفلتر المحدد</h3>
        <p>${state.showMistakesOnly ? 'رائع! لا توجد لديك أي أخطاء مسجلة في هذا القسم.' : 'جرب تغيير فئة الأسئلة أو تفريغ شريط البحث.'}</p>
        ${state.showMistakesOnly ? '<button class="btn-primary" onclick="toggleMistakesOnly()">عرض جميع الأسئلة</button>' : ''}
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach((q, index) => {
    const isLocked = !!state.answers[q.id];
    const isAnsweredCorrect = isLocked && state.answers[q.id].isCorrect;
    const isAnsweredWrong = isLocked && !state.answers[q.id].isCorrect;

    let cardClasses = `question-card ${q.category === 'extreme' ? 'is-extreme-card' : ''}`;
    if (isLocked) cardClasses += ' is-locked';
    if (isAnsweredCorrect) cardClasses += ' answered-correct';
    if (isAnsweredWrong) cardClasses += ' answered-wrong';

    html += `
      <article id="q-card-${q.id}" class="${cardClasses}" data-id="${q.id}">
        <!-- Question Meta Header -->
        <div class="q-meta">
          <div class="q-meta-badges">
            <span class="q-num-badge">سؤال ${index + 1}</span>
            <span class="q-type-badge">${q.categoryName || q.category}</span>
            ${q.topicName ? `<span class="q-topic-badge">${q.topicName}</span>` : ''}
            ${q.category === 'extreme' ? `<span class="q-extreme-badge">🔥 ليفل الوحش</span>` : ''}
          </div>
          ${q.source ? `<div class="q-source">📖 ${q.source}</div>` : ''}
        </div>

        <!-- Question Title & Body -->
        <h3 class="q-title">${q.title}</h3>
        <div class="q-text-en">${q.text}</div>
        ${q.textAr ? `<div class="q-text-ar">${q.textAr}</div>` : ''}

        <!-- Interactive Question Body according to type -->
        <div class="q-body-area">
          ${renderQuestionInteractiveArea(q)}
        </div>

        <!-- Hidden Explanation Revealed On Lock -->
        <div class="q-explanation ${isLocked ? 'show-animated' : 'hidden'}">
          <div class="exp-header">
            <span class="exp-icon">💡</span>
            <h4>الشرح والتوضيح الرياضي النموذجي:</h4>
          </div>
          <div class="exp-content">
            ${q.explanation || (q.modelSolution ? q.modelSolution.replace(/\n/g, '<br>') : '')}
          </div>
          ${q.details ? `<div class="exp-details">📌 <strong>ملحوظة منهجية:</strong> ${q.details}</div>` : ''}
        </div>
      </article>
    `;
  });

  container.innerHTML = html;

  // Post-render: Attach event listeners & render Math with KaTeX
  attachQuestionEventListeners();

  if (window.renderMathInElement) {
    renderMathInElement(container, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ]
    });
  }
}

function renderQuestionInteractiveArea(q) {
  const saved = state.answers[q.id];

  if (q.type === 'boolean') {
    return `
      <div class="tf-options-grid">
        <button type="button" class="btn-tf btn-tf-true ${saved ? (q.correctAnswer === true ? 'is-correct' : (saved.userAnswer === true ? 'is-wrong' : '')) : ''}" data-value="true" ${saved ? 'disabled' : ''}>
          <span class="tf-icon">✅</span>
          <span class="tf-label">صحيح (True)</span>
        </button>
        <button type="button" class="btn-tf btn-tf-false ${saved ? (q.correctAnswer === false ? 'is-correct' : (saved.userAnswer === false ? 'is-wrong' : '')) : ''}" data-value="false" ${saved ? 'disabled' : ''}>
          <span class="tf-icon">❌</span>
          <span class="tf-label">خطأ (False)</span>
        </button>
      </div>
    `;
  }

  if (q.type === 'mcq') {
    let optionsHtml = '<div class="mcq-options-list">';
    q.options.forEach((opt, idx) => {
      let optClass = "mcq-option-btn";
      if (saved) {
        if (idx === q.correctAnswer) optClass += " is-correct";
        if (!saved.isCorrect && idx === saved.userAnswer) optClass += " is-wrong";
      }
      const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D
      optionsHtml += `
        <button type="button" class="${optClass}" data-index="${idx}" ${saved ? 'disabled' : ''}>
          <span class="mcq-letter">${optionLetter}</span>
          <span class="mcq-opt-text">$${opt}$</span>
        </button>
      `;
    });
    optionsHtml += '</div>';
    return optionsHtml;
  }

  if (q.type === 'numeric') {
    return `
      <div class="calc-input-wrapper">
        <div class="calc-row">
          <input type="number" step="any" class="calc-answer-input ${saved ? (saved.isCorrect ? 'input-correct' : 'input-wrong') : ''}" placeholder="أدخل الناتج العددي هنا..." value="${saved ? saved.userAnswer : ''}" ${saved ? 'disabled' : ''}>
          <button type="button" class="btn-primary calc-submit-btn" ${saved ? 'disabled' : ''}>
            ${saved ? (saved.isCorrect ? '✅ إجابة صحيحة' : '❌ إجابة خاطئة') : 'إرسال وقفل الإجابة 🔒'}
          </button>
        </div>
        <div class="calc-hint">التحقق يقبل التقريب حتى 3 خانات عشرية (Tolerance $\\pm ${q.tolerance || 0.001}$).</div>
      </div>
    `;
  }

  if (q.type === 'fix_step') {
    let stepsHtml = `
      <div class="fix-steps-container">
        <p class="fix-prompt-hint">اضغط على <strong>الخطوة التي تحتوي على الخطأ</strong> للتحقق:</p>
        <div class="fix-steps-list">
    `;
    q.steps.forEach(st => {
      let stepClass = "fix-step-item";
      if (saved) {
        if (st.stepNum === q.bugStep) stepClass += " is-correct-bug";
        if (!saved.isCorrect && st.stepNum === saved.userAnswer) stepClass += " is-wrong-selection";
      }
      stepsHtml += `
        <div class="${stepClass}" data-step="${st.stepNum}" role="button" tabindex="0">
          <div class="step-badge">الخطوة ${st.stepNum}</div>
          <div class="step-text">${st.text}</div>
          <div class="step-action-tag">اكتشف الخطأ 🎯</div>
        </div>
      `;
    });
    stepsHtml += '</div></div>';
    return stepsHtml;
  }

  if (q.type === 'essay') {
    return `
      <div class="essay-action-box">
        <div class="essay-notice">
          <span>✍️ هذا السؤال مقالي / إثبات هندسي متقدم يتطلب خطوات رياضية كاملة.</span>
        </div>
        <button type="button" class="btn-primary essay-toggle-btn">
          <span>👁️ كشف الحل والخطوات النموذجية الكاملة بالتفصيل</span>
        </button>
        <div class="essay-model-solution hidden">
          <div class="essay-model-header">
            <h4>📋 خطوات الحل والإثبات الأكاديمي النموذجي:</h4>
          </div>
          <div class="essay-model-body">
            ${q.modelSolution ? q.modelSolution.replace(/\n/g, '<br>') : ''}
          </div>
        </div>
      </div>
    `;
  }

  return "";
}

function attachQuestionEventListeners() {
  // 1. True / False clicks
  document.querySelectorAll('.btn-tf').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.question-card');
      if (!card || card.classList.contains('is-locked')) return;
      const qId = card.dataset.id;
      const userVal = e.currentTarget.dataset.value === 'true';
      const allQ = getAllQuestions();
      const q = allQ.find(item => item.id === qId);
      if (!q) return;
      const isCorrect = userVal === q.correctAnswer;
      handleAnswer(qId, userVal, isCorrect);
    });
  });

  // 2. MCQ clicks
  document.querySelectorAll('.mcq-option-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.question-card');
      if (!card || card.classList.contains('is-locked')) return;
      const qId = card.dataset.id;
      const optIdx = parseInt(e.currentTarget.dataset.index, 10);
      const allQ = getAllQuestions();
      const q = allQ.find(item => item.id === qId);
      if (!q) return;
      const isCorrect = optIdx === q.correctAnswer;
      handleAnswer(qId, optIdx, isCorrect);
    });
  });

  // 3. Numeric Calculation submit
  document.querySelectorAll('.calc-submit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.question-card');
      if (!card || card.classList.contains('is-locked')) return;
      const qId = card.dataset.id;
      const input = card.querySelector('.calc-answer-input');
      if (!input || input.value.trim() === '') {
        alert('من فضلك أدخل القيمة المحسوبة أولاً.');
        return;
      }
      const val = parseFloat(input.value);
      const allQ = getAllQuestions();
      const q = allQ.find(item => item.id === qId);
      if (!q) return;
      const tol = q.tolerance || 0.001;
      const isCorrect = Math.abs(val - q.correctAnswer) <= tol;
      handleAnswer(qId, val, isCorrect);
    });
  });

  // 4. Interactive Fix Engine Step selection
  document.querySelectorAll('.fix-step-item').forEach(stepEl => {
    stepEl.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.question-card');
      if (!card || card.classList.contains('is-locked')) return;
      const qId = card.dataset.id;
      const stepNum = parseInt(e.currentTarget.dataset.step, 10);
      const allQ = getAllQuestions();
      const q = allQ.find(item => item.id === qId);
      if (!q) return;
      const isCorrect = stepNum === q.bugStep;
      handleAnswer(qId, stepNum, isCorrect);
    });
  });

  // 5. Essay Model Solution Toggle
  document.querySelectorAll('.essay-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.question-card');
      const sol = card.querySelector('.essay-model-solution');
      if (sol) {
        sol.classList.toggle('hidden');
        const isHidden = sol.classList.contains('hidden');
        btn.querySelector('span').textContent = isHidden 
          ? "👁️ كشف الحل والخطوات النموذجية الكاملة بالتفصيل" 
          : "🙈 إخفاء الحل النموذجي";
        if (!isHidden && window.renderMathInElement) {
          renderMathInElement(sol, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false }
            ]
          });
        }
      }
    });
  });
}

// ==========================================================================
// 8. Filters, Search & Categories Navigation
// ==========================================================================
function setCategory(cat) {
  state.currentCategory = cat;

  // Check if entering Extreme Mode
  if (cat === 'extreme') {
    state.extremeActive = true;
    document.body.classList.add('extreme-mode-active');
    const banner = document.getElementById('extremeBanner');
    if (banner) banner.style.display = 'block';

    if (fireCanvas) fireCanvas.start();
    sounds.playDamarSound();

    if (!state.extremeWarningShown) {
      showExtremeWarningModal();
      state.extremeWarningShown = true;
    }
  } else {
    state.extremeActive = false;
    document.body.classList.remove('extreme-mode-active');
    const banner = document.getElementById('extremeBanner');
    if (banner) banner.style.display = 'none';
    if (fireCanvas) fireCanvas.stop();
  }

  // Active tab style
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === cat);
  });

  renderQuestions();
}

function showExtremeWarningModal() {
  const modal = document.getElementById('extremeWarningModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeExtremeWarningModal() {
  const modal = document.getElementById('extremeWarningModal');
  if (modal) modal.classList.remove('active');
}

function toggleMistakesOnly() {
  state.showMistakesOnly = !state.showMistakesOnly;
  const btn = document.getElementById('mistakesOnlyBtn');
  if (btn) {
    btn.classList.toggle('active-filter', state.showMistakesOnly);
    btn.querySelector('span').textContent = state.showMistakesOnly ? "🎯 عرض جميع الأسئلة" : "🎯 مراجعة الأخطاء فقط";
  }
  renderQuestions();
}

function resetAllAnswers() {
  if (confirm("هل أنت متأكد من تصفير كافة إجاباتك وسجل درجاتك والبدء من جديد؟")) {
    state.answers = {};
    state.stats.streak = 0;
    state.stats.total = 0;
    state.stats.correct = 0;
    state.stats.wrong = 0;
    saveState();
    updateDashboard();
    renderQuestions();
    alert("تم تصفير جميع الإجابات بنجاح! بالتوفيق في رحلتك الجديدة.");
  }
}

// ==========================================================================
// 9. Theme & Sound Controls
// ==========================================================================
function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  saveState();
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  const btn = document.getElementById('soundToggleBtn');
  if (btn) btn.textContent = state.soundEnabled ? '🔊' : '🔇';
  saveState();
}

// ==========================================================================
// 10. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();

  // Apply initial theme
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) themeBtn.textContent = state.theme === 'dark' ? '☀️' : '🌙';

  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) soundBtn.textContent = state.soundEnabled ? '🔊' : '🔇';

  // Initialize Canvas
  fireCanvas = new FireCanvas('extremeCanvas');

  // Category tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.dataset.category;
      setCategory(cat);
    });
  });

  // Search box
  const searchInput = document.getElementById('searchQuestionsInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderQuestions();
    });
  }

  // Buttons
  const mistakesBtn = document.getElementById('mistakesOnlyBtn');
  if (mistakesBtn) mistakesBtn.addEventListener('click', toggleMistakesOnly);

  const resetBtn = document.getElementById('resetAllBtn');
  if (resetBtn) resetBtn.addEventListener('click', resetAllAnswers);

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (soundBtn) soundBtn.addEventListener('click', toggleSound);

  // AI Tutor Modal
  const aiReportBtn = document.getElementById('examReportBtn');
  if (aiReportBtn) {
    aiReportBtn.addEventListener('click', () => {
      if (window.AITutor) {
        AITutor.openModal(getAllQuestions(), state.answers);
      }
    });
  }

  const closeAiModalBtn = document.getElementById('closeAiTutorBtn');
  if (closeAiModalBtn) {
    closeAiModalBtn.addEventListener('click', () => {
      if (window.AITutor) AITutor.closeModal();
    });
  }

  // Close modals when clicking overlay
  const aiModal = document.getElementById('aiTutorModal');
  if (aiModal) {
    aiModal.addEventListener('click', (e) => {
      if (e.target === aiModal && window.AITutor) AITutor.closeModal();
    });
  }

  const extModal = document.getElementById('extremeWarningModal');
  if (extModal) {
    extModal.addEventListener('click', (e) => {
      if (e.target === extModal) closeExtremeWarningModal();
    });
  }
  const closeExtBtn = document.getElementById('closeExtremeModalBtn');
  if (closeExtBtn) closeExtBtn.addEventListener('click', closeExtremeWarningModal);

  // Initialize Math Simulator
  if (window.MathSimulator) {
    window.MathSimulator.init();
    window.MathSimulator.loadDerivativePreset('ex1');
  }

  // Initial render
  updateDashboard();
  renderQuestions();
});
