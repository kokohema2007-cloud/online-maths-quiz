// ==========================================================================
// محرك تشخيص نقاط الضعف بالذكاء الاصطناعي (AI Tutor Diagnostic Engine)
// مادة: GEN002 Mathematics 1 - جامعة حلوان الأهلية - كلية الهندسة
// يقوم بتحليل دقة الطالب في فصول المادة السبعة، تحديد الموضوعات المتعثرة (< 50%)،
// وتقديم تشخيص تربوي دقيق مع اقتراح فيديوهات يوتيوب نوعية للشرح
// ==========================================================================

const AITutor = {
  topicsConfig: {
    'rules': {
      titleAr: "أساسيات وقواعد التفاضل وقاعدة السلسلة",
      titleEn: "Differentiation Rules, Chain Rule & Tangents",
      icon: "⚡",
      desc: "تعريف المشتقة بالنهاية، قواعد القوة، حاصل الضرب، خارج القسمة، قاعدة السلسلة، وميل خط المماس والعمودي.",
      keywords: ["تفاضل", "قاعدة السلسلة", "ميل المماس", "Chain Rule", "Derivative Rules"],
      recommendedVideos: [
        {
          title: "شرح قواعد الاشتقاق الأساسية وقاعدة السلسلة - تفاضل وتكامل 1",
          channel: "Calculus Engineering Academy",
          url: "https://www.youtube.com/results?search_query=%D9%82%D9%88%D8%A7%D8%B9%D8%AF+%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B6%D9%84+%D9%88%D9%82%D8%A7%D8%B9%D8%AF%D8%A9+%D8%A7%D9%84%D8%B3%D9%84%D8%B3%D9%84%D8%A9+Chain+Rule",
          badge: "أساسي"
        },
        {
          title: "معادلة خط المماس والعمودي للمنحنى (Tangent and Normal Lines)",
          channel: "Math Gate Engineering",
          url: "https://www.youtube.com/results?search_query=%D9%85%D8%B9%D8%A7%D8%AF%D9%84%D8%A9+%D8%AE%D8%B7+%D8%A7%D9%84%D9%85%D9%85%D8%A7%D8%B3+%D9%88%D8%A7%D9%84%D8%B9%D9%85%D9%88%D8%AF%D9%8A+Tangent+Normal+line",
          badge: "تطبيقات هندسية"
        }
      ],
      advice: "ركز على حفظ وتطبيق قاعدة السلسلة بعناية: لا تنس ضرب مشتقة القوس الخارجي في مشتقة الدالة الداخلية $u'(x)$."
    },
    'trig': {
      titleAr: "الدوال المثلثية وعكوسها (Trig & Inverse Trig)",
      titleEn: "Trigonometric and Inverse Trigonometric Functions",
      icon: "📐",
      desc: "مشتقات sin, cos, tan, cot, sec, csc، والدوال العكسية arcsin, arccos, arctan مع مجالاتها ومتطابقاتها.",
      keywords: ["الدوال المثلثية العكسية", "Inverse Trigonometric", "مشتقة arctan", "arcsin derivative"],
      recommendedVideos: [
        {
          title: "تفاضل الدوال المثلثية العكسية وإثباتاتها بالمثلث",
          channel: "Engineering Mathematics",
          url: "https://www.youtube.com/results?search_query=%D8%AA%D9%81%D8%A7%D8%B6%D9%84+%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%84+%D8%A7%D9%84%D9%85%D8%AB%D9%84%D8%AB%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D9%83%D8%B3%D9%8A%D8%A9+inverse+trig+derivatives",
          badge: "إثباتات هامة"
        },
        {
          title: "مجال ومدى الدوال المثلثية العكسية Inverse Trig Functions Domain & Range",
          channel: "Calculus Hub",
          url: "https://www.youtube.com/results?search_query=%D9%85%D8%AC%D8%A7%D9%84+%D9%88%D9%85%D8%AF%D9%89+%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%84+%D8%A7%D9%84%D9%85%D8%AB%D9%84%D8%AB%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D9%83%D8%B3%D9%8A%D8%A9",
          badge: "مفاهيم"
        }
      ],
      advice: "تذكر دائماً أن $\\sin^{-1} x \\neq \\frac{1}{\\sin x}$، وأن مشتقة $\\tan^{-1} u$ تحوي إشارة موجبة في المقام $\\frac{u'}{1+u^2}$."
    },
    'hyperbolic': {
      titleAr: "الدوال الزائدية وعكوسها (Hyperbolic Functions)",
      titleEn: "Hyperbolic & Inverse Hyperbolic Functions",
      icon: "〰️",
      desc: "تعريف sinh, cosh, tanh بالصيغة الأسية $e^x$، متطابقة فيثاغورس الزائدية، الصيغ اللوغاريتمية للمعكوسات ومشتقاتها.",
      keywords: ["الدوال الزائدية", "sinh cosh tanh", "مشتقة الدوال الزائدية", "Inverse hyperbolic identities"],
      recommendedVideos: [
        {
          title: "الدوال الزائدية بالتفصيل - المتطابقات والتعريف الأسي | Hyperbolic Functions",
          channel: "Modern Math Lectures",
          url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%84+%D8%A7%D9%84%D8%B2%D8%A7%D8%A6%D8%AF%D9%8A%D8%A9+Hyperbolic+functions+%D8%AA%D9%81%D8%A7%D8%B6%D9%84+%D9%87%D9%86%D8%AF%D8%B3%D8%A9",
          badge: "شرح شامل"
        },
        {
          title: "إثبات الصيغ اللوغاريتمية للدوال الزائدية العكسية sinh⁻¹ x و tanh⁻¹ x",
          channel: "Math Proofs & Solvers",
          url: "https://www.youtube.com/results?search_query=%D8%A5%D8%AB%D8%A8%D8%A7%D8%AA+%D8%A7%D9%84%D8%B5%D9%8A%D8%BA+%D8%A7%D9%84%D9%84%D9%88%D8%BA%D8%A7%D8%B1%D9%8A%D8%AA%D9%85%D9%8A%D8%A9+%D9%84%D9%84%D8%AF%D9%88%D8%A7%D9%84+%D8%A7%D9%84%D8%B2%D8%A7%D8%A6%D8%AF%D9%8A%D8%A9+%D8%A7%D9%84%D8%B9%D9%83%D8%B3%D9%8A%D8%A9",
          badge: "سؤال امتحان مؤكد"
        }
      ],
      advice: "انتبه للفارق بين الدائرية والزائدية: $\\frac{d}{dx}(\\cosh x) = +\\sinh x$ (بدون سالب)، والمتطابقة الأساسية $\\cosh^2 x - \\sinh^2 x = 1$."
    },
    'implicit': {
      titleAr: "الاشتقاق الضمني واللوغاريتمي والمشتقات العليا",
      titleEn: "Implicit & Logarithmic Differentiation & Higher Orders",
      icon: "🔄",
      desc: "اشتقاق المعادلات غير الصريحة، استخدام $\\ln$ لتفاضل الدوال ذات الأساس والأس المتغيرين أو الكسور الضخمة، وحساب $y''$ و $y'''$.",
      keywords: ["الاشتقاق الضمني", "الاشتقاق اللوغاريتمي", "Implicit Differentiation", "Logarithmic Differentiation"],
      recommendedVideos: [
        {
          title: "الاشتقاق الضمني خطوة بخطوة - هندسة أولى | Implicit Differentiation",
          channel: "Engineering Hub",
          url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D9%82%D8%A7%D9%82+%D8%A7%D9%84%D8%B6%D9%85%D9%86%D9%8A+implicit+differentiation+%D9%87%D9%86%D8%AF%D8%B3%D8%A9",
          badge: "أساسيات"
        },
        {
          title: "الاشتقاق اللوغاريتمي لمسائل الامتحانات الصعبة Logarithmic Differentiation",
          channel: "Calculus Exam Master",
          url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D9%82%D8%A7%D9%82+%D8%A7%D9%84%D9%84%D9%88%D8%BA%D8%A7%D8%B1%D9%8A%D8%AA%D9%85%D9%8A+logarithmic+differentiation",
          badge: "أسئلة دمار"
        }
      ],
      advice: "في الاشتقاق الضمني: كلما تشتق حداً يحوي $y$، اضرب فورياً في $y'$. وفي الدوال من نوع $[f(x)]^{g(x)}$، خذ $\\ln$ للطرفين فوراً لتنزيل الأس."
    },
    'limits': {
      titleAr: "النهايات وقاعدة لوبيتال والصيغ غير المعينة",
      titleEn: "Limits & L'Hôpital's Rule & Indeterminate Forms",
      icon: "♾️",
      desc: "تحليل الصيغ غير المعينة $0/0$ و $\\infty/\\infty$ و $0 \\cdot \\infty$ و $\\infty - \\infty$ و $1^\\infty$ وتطبيق قاعدة لوبيتال.",
      keywords: ["قاعدة لوبيتال", "نهايات غير معينة", "L'Hopital rule", "Indeterminate forms"],
      recommendedVideos: [
        {
          title: "قاعدة لوبيتال لجميع الصيغ غير المعينة بالتفصيل - L'Hôpital's Rule",
          channel: "Math Academy",
          url: "https://www.youtube.com/results?search_query=%D9%82%D8%A7%D8%B9%D8%AF%D8%A9+%D9%84%D9%88%D8%A8%D9%8A%D8%AA%D8%A7%D9%84+L+Hopital+Rule+%D8%B4%D8%B1%D8%AD+%D9%83%D8%A7%D9%85%D9%84",
          badge: "شرح شامل"
        },
        {
          title: "حساب نهايات الصيغ الأسية غير المعينة 1^inf و 0^0 باستخدام اللوغاريتم ولوبيتال",
          channel: "Engineering Calculus Prep",
          url: "https://www.youtube.com/results?search_query=%D9%86%D9%87%D8%A7%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D8%B5%D9%8A%D8%BA+%D8%A7%D9%84%D8%A3%D8%B3%D9%8A%D8%A9+1%5E%E2%88%9E+L%27Hopital",
          badge: "متقدم"
        }
      ],
      advice: "لا تطبق قاعدة قسمة دالتين أثناء لوبيتال! اشتق البسط منفرداً واشتق المقام منفرداً. وتأكد أولاً أن التعويض المباشر يعطي $0/0$ أو $\\infty/\\infty$."
    },
    'partial': {
      titleAr: "المشتقات الجزئية والدوال التوافقية (Multivariable Calculus)",
      titleEn: "Partial Derivatives, Harmonic Functions & Wave Equation",
      icon: "🌐",
      desc: "تفاضل الدوال في عدة متغيرات $f_x, f_y, f_z$، نظرية كليروت $f_{xy} = f_{yx}$، دالة لابلاس التوافقية $f_{xx}+f_{yy}=0$، ومعادلات كوشي-ريمان وموجة الصوت.",
      keywords: ["المشتقات الجزئية", "Partial Derivatives", "دالة توافقية", "Harmonic functions", "Cauchy-Riemann"],
      recommendedVideos: [
        {
          title: "المشتقات الجزئية الأولى والثانية من الصفر - Partial Derivatives",
          channel: "Higher Math Portal",
          url: "https://www.youtube.com/results?search_query=%D8%A7%D9%84%D9%85%D8%B4%D8%AA%D9%82%D8%A7%D8%AA+%D8%A7%D9%84%D8%AC%D8%B2%D8%A6%D9%8A%D8%A9+partial+derivatives+%D9%87%D9%86%D8%AF%D8%B3%D8%A9",
          badge: "أساسيات"
        },
        {
          title: "إثبات الدالة التوافقية ومعادلة لابلاس Harmonic Functions & Laplace Equation",
          channel: "Engineering Math Studio",
          url: "https://www.youtube.com/results?search_query=%D8%A5%D8%AB%D8%A8%D8%A7%D8%AA+%D8%A7%D9%84%D8%AF%D8%A7%D9%84%D8%A9+%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D9%81%D9%82%D9%8A%D8%A9+Harmonic+function+Laplace",
          badge: "إثباتات امتحانية"
        }
      ],
      advice: "عند إيجاد $f_x$ تعامل مع $y$ و $z$ كثوابت عددية مطلقة (مثل الرقم 5). وعند التحقق من الدالة التوافقية تأكد أن مجموع $f_{xx} + f_{yy} = 0$."
    },
    'logic': {
      titleAr: "المنطق الرياضي وجداول الصواب والمجموعات ومجال الدوال",
      titleEn: "Discrete Logic, Truth Tables, Sets & Function Domains",
      icon: "🧠",
      desc: "جداول الصواب للروابط $\\wedge, \\vee, \\neg, \\to, \\leftrightarrow, \\oplus$، عمليات المجموعات، تركيب الدوال $f \\circ g$ ومجالاتها.",
      keywords: ["جداول الصواب", "Truth Tables", "المنطق الرياضي", "تركيب الدوال", "Composite Functions"],
      recommendedVideos: [
        {
          title: "جداول الصواب في المنطق الرياضي Truth Tables بالتفصيل",
          channel: "Computer & Math Academy",
          url: "https://www.youtube.com/results?search_query=%D8%AC%D8%AF%D8%A7%D9%88%D9%84+%D8%A7%D9%84%D8%B5%D9%88%D8%A7%D8%A8+Truth+tables+%D8%A7%D9%84%D9%85%D9%86%D8%B7%D9%82+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A",
          badge: "سؤال الميدتيرم"
        },
        {
          title: "تركيب الدوال ومجال الدالة المركبة Composite Functions Domain",
          channel: "Algebra & Precalculus",
          url: "https://www.youtube.com/results?search_query=%D8%AA%D8%B1%D9%83%D9%8A%D8%A8+%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D9%84+%D9%88%D8%A5%D9%8A%D8%AC%D8%A7%D8%AF+%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%84+Domain+Composite+Functions",
          badge: "جبر وتفاضل"
        }
      ],
      advice: "في جدول الصواب: الاستلزام $A \\to B$ خاطئ (F) فقط عندما تكون المقدمة T والنتيجة F. والعملية $\\oplus$ (XOR) صائبة فقط عند اختلاف القيمتين."
    }
  },

  // Analyze the student performance
  generateReport(allQuestions, userAnswers) {
    const report = {
      totalAnswered: 0,
      totalCorrect: 0,
      totalWrong: 0,
      overallAccuracy: 0,
      topicStats: {},
      weakTopics: [],
      strongTopics: [],
      unattemptedTopics: [],
      aiDiagnosticSummary: ""
    };

    // Initialize stats per topic
    Object.keys(this.topicsConfig).forEach(tKey => {
      report.topicStats[tKey] = {
        key: tKey,
        titleAr: this.topicsConfig[tKey].titleAr,
        icon: this.topicsConfig[tKey].icon,
        totalInBank: 0,
        answered: 0,
        correct: 0,
        wrong: 0,
        accuracy: 0
      };
    });

    // Count available questions per topic
    allQuestions.forEach(q => {
      const t = q.topic || 'rules';
      if (report.topicStats[t]) {
        report.topicStats[t].totalInBank++;
      }
    });

    // Tally answers
    Object.keys(userAnswers).forEach(qId => {
      const ansObj = userAnswers[qId];
      const q = allQuestions.find(item => item.id === qId);
      if (q && q.topic && report.topicStats[q.topic]) {
        report.totalAnswered++;
        report.topicStats[q.topic].answered++;
        if (ansObj.isCorrect) {
          report.totalCorrect++;
          report.topicStats[q.topic].correct++;
        } else {
          report.totalWrong++;
          report.topicStats[q.topic].wrong++;
        }
      }
    });

    // Calculate accuracies
    if (report.totalAnswered > 0) {
      report.overallAccuracy = Math.round((report.totalCorrect / report.totalAnswered) * 100);
    }

    Object.keys(report.topicStats).forEach(tKey => {
      const ts = report.topicStats[tKey];
      if (ts.answered > 0) {
        ts.accuracy = Math.round((ts.correct / ts.answered) * 100);
        if (ts.accuracy < 50) {
          report.weakTopics.push(ts);
        } else if (ts.accuracy >= 75) {
          report.strongTopics.push(ts);
        }
      } else {
        report.unattemptedTopics.push(ts);
      }
    });

    // Generate diagnostic AI feedback text
    if (report.totalAnswered === 0) {
      report.aiDiagnosticSummary = "لم تقم بالإجابة على أي سؤال بعد. ابدأ بحل أسئلة الفصول أو اختبار الدمار ليتمكن المعلم الذكي من تحليل مستواك وتقديم التوصيات الدقيقة!";
    } else if (report.weakTopics.length === 0 && report.overallAccuracy >= 80) {
      report.aiDiagnosticSummary = `أداء استثنائي ومبهر! لقد حققت نسبة إتقان إجمالية بلغت ${report.overallAccuracy}% بدون أي نقاط ضعف حرجة. أنت جاهز بنسبة ممتازة لاجتياز اختبار الرياضيات الجامعي GEN002 بدرجة الامتياز!`;
    } else if (report.weakTopics.length > 0) {
      const weakNames = report.weakTopics.map(w => w.titleAr).join("، و");
      report.aiDiagnosticSummary = `تم رصد مؤشر انخفاض بالدقة (أقل من 50%) في: [${weakNames}]. يوصى بالتركيز الفوري على مراجعة الفيديوهات المقترحة أدناه وتكرار حل مسائل قسم "الأخطاء فقط" لتثبيت القواعد.`;
    } else {
      report.aiDiagnosticSummary = `مستواك متوسط (${report.overallAccuracy}%)، استمر في حل المزيد من التمارين وخاصة أسئلة الامتحان والاشتقاق اللوغاريتمي لرفع نسبة إتقانك إلى خانة الامتياز.`;
    }

    return report;
  },

  // Render the Modal UI
  openModal(allQuestions, userAnswers) {
    const report = this.generateReport(allQuestions, userAnswers);
    const modalEl = document.getElementById('aiTutorModal');
    const contentEl = document.getElementById('aiTutorModalBody');
    if (!modalEl || !contentEl) return;

    let html = `
      <div class="ai-report-header">
        <div class="ai-report-badge">🤖 المحرك التشخيصي الذكي (AI Diagnostic Engine)</div>
        <h2 class="ai-report-title">تقرير الأداء الأكاديمي وتشخيص نقاط الضعف</h2>
        <p class="ai-report-subtitle">مادة GEN002 Mathematics 1 | تفاضل وتكامل وجبر هندسي</p>
      </div>

      <!-- Overview Score Cards -->
      <div class="ai-overview-grid">
        <div class="ai-score-card">
          <span class="ai-card-label">نسبة الإتقان العامة</span>
          <span class="ai-card-val ${report.overallAccuracy >= 75 ? 'good' : (report.overallAccuracy >= 50 ? 'avg' : 'poor')}">${report.overallAccuracy}%</span>
        </div>
        <div class="ai-score-card">
          <span class="ai-card-label">الأسئلة المجابة</span>
          <span class="ai-card-val">${report.totalAnswered} / ${allQuestions.length}</span>
        </div>
        <div class="ai-score-card">
          <span class="ai-card-label">الإجابات الصحيحة</span>
          <span class="ai-card-val text-success">${report.totalCorrect} ✅</span>
        </div>
        <div class="ai-score-card">
          <span class="ai-card-label">الموضوعات الحرجة (&lt; 50%)</span>
          <span class="ai-card-val text-danger">${report.weakTopics.length} ⚠️</span>
        </div>
      </div>

      <!-- AI Prescription Alert -->
      <div class="ai-prescription-card ${report.weakTopics.length > 0 ? 'warning' : 'success'}">
        <div class="ai-pres-icon">${report.weakTopics.length > 0 ? '⚠️' : '🎯'}</div>
        <div class="ai-pres-text">
          <h4>التشخيص الأكاديمي الذكي:</h4>
          <p>${report.aiDiagnosticSummary}</p>
        </div>
      </div>

      <!-- Topic Performance Bars -->
      <div class="ai-topics-section">
        <h3 class="ai-section-title">📊 تحليل الإتقان بحسب فصول وموضوعات المادة:</h3>
        <div class="ai-topic-bars-list">
    `;

    Object.keys(report.topicStats).forEach(tKey => {
      const ts = report.topicStats[tKey];
      const cfg = this.topicsConfig[tKey];
      const isWeak = ts.answered > 0 && ts.accuracy < 50;
      const isGood = ts.accuracy >= 75;

      html += `
        <div class="ai-topic-bar-item ${isWeak ? 'is-weak' : ''}">
          <div class="ai-topic-info">
            <span class="ai-topic-name">${cfg.icon} ${cfg.titleAr}</span>
            <span class="ai-topic-stat">
              ${ts.answered > 0 ? `${ts.accuracy}% (${ts.correct}/${ts.answered})` : '<span style="color:var(--text-muted)">لم يتم الحل بعد</span>'}
            </span>
          </div>
          <div class="ai-bar-track">
            <div class="ai-bar-fill ${isGood ? 'fill-good' : (isWeak ? 'fill-weak' : 'fill-mid')}" style="width: ${ts.answered > 0 ? ts.accuracy : 0}%"></div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    // Recommendations & Targeted YouTube Videos for weak or key topics
    html += `
      <div class="ai-recommendations-section">
        <h3 class="ai-section-title">🎬 الدروس وفيديوهات الشرح المقترحة لعلاج نقاط الضعف:</h3>
        <p style="color:var(--text-muted); margin-bottom: 1rem; font-size: 0.9rem;">
          تم اختيار هذه الروابط المباشرة والموضوعات بناءً على نتائجك وخطة منهج مادة GEN002:
        </p>
        <div class="ai-videos-grid">
    `;

    // Prioritize weak topics, then other topics
    const displayTopics = report.weakTopics.length > 0 
      ? report.weakTopics.map(w => w.key)
      : Object.keys(this.topicsConfig).slice(0, 4);

    displayTopics.forEach(tKey => {
      const cfg = this.topicsConfig[tKey];
      cfg.recommendedVideos.forEach(vid => {
        html += `
          <a href="${vid.url}" target="_blank" rel="noopener noreferrer" class="ai-video-card">
            <div class="ai-video-icon">▶️</div>
            <div class="ai-video-details">
              <span class="ai-video-badge">${vid.badge} | ${cfg.titleAr}</span>
              <h4 class="ai-video-title">${vid.title}</h4>
              <span class="ai-video-channel">محتوى يوتيوب موصى به • اضغط للمشاهدة ↗</span>
            </div>
          </a>
        `;
      });
    });

    html += `
        </div>
      </div>
    `;

    contentEl.innerHTML = html;
    modalEl.classList.add('active');
  },

  closeModal() {
    const modalEl = document.getElementById('aiTutorModal');
    if (modalEl) modalEl.classList.remove('active');
  }
};

window.AITutor = AITutor;
