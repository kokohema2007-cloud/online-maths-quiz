// ==========================================================================
// المختبر والمحاكي التفاعلي لمادة GEN002 Mathematics 1
// يشمل:
// 1) حاسبة المشتقات وقواعد التفاضل خطوة بخطوة (Step-by-Step Derivative Solver)
// 2) حاسبة معادلة خط المماس والعمودي (Tangent & Normal Line Calculator)
// 3) مستنتج متطابقات الدوال الزائدية التبادلي (Hyperbolic Functions Identity Solver)
// 4) محاكي ومولد جداول الصواب المنطقية التفاعلي (Interactive Truth Table Generator)
// ==========================================================================

const MathSimulator = {
  activeTab: 'deriv',

  init() {
    this.bindEvents();
    this.initHyperbolicSolver();
    this.initTangentSolver();
    this.initTruthTableSimulator();
  },

  bindEvents() {
    // Tab switching inside simulator
    document.querySelectorAll('.sim-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Preset buttons for derivatives
    document.querySelectorAll('.deriv-preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const presetKey = e.currentTarget.dataset.preset;
        this.loadDerivativePreset(presetKey);
      });
    });

    // Solve custom derivative
    const calcDerivBtn = document.getElementById('calcDerivBtn');
    if (calcDerivBtn) {
      calcDerivBtn.addEventListener('click', () => {
        const select = document.getElementById('derivFunctionSelect');
        if (select) this.loadDerivativePreset(select.value);
      });
    }

    // Hyperbolic input change
    const hypInput = document.getElementById('hypSinhInput');
    if (hypInput) {
      hypInput.addEventListener('input', () => this.solveHyperbolic());
    }

    // Tangent point input change
    const tangXInput = document.getElementById('tangXInput');
    const tangFuncSelect = document.getElementById('tangFuncSelect');
    if (tangXInput) tangXInput.addEventListener('input', () => this.solveTangent());
    if (tangFuncSelect) tangFuncSelect.addEventListener('change', () => this.solveTangent());

    // Truth table preset selector
    const ttPresetSelect = document.getElementById('ttPresetSelect');
    if (ttPresetSelect) {
      ttPresetSelect.addEventListener('change', (e) => {
        this.renderTruthTable(e.target.value);
      });
    }
  },

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll('.sim-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
    document.querySelectorAll('.sim-tab-content').forEach(c => c.classList.toggle('active', c.id === `sim-tab-${tabId}`));
    if (window.renderMathInElement) {
      setTimeout(() => {
        renderMathInElement(document.getElementById(`sim-tab-${tabId}`), {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ]
        });
      }, 50);
    }
  },

  // --------------------------------------------------------------------------
  // 1) Step-by-Step Derivative Presets & Solver
  // --------------------------------------------------------------------------
  derivativePresets: {
    'ex1': {
      title: "دالة تربيعية بسيطة (Example 1 ص 3)",
      funcLatex: "f(x) = x^2",
      xVal: 3,
      ruleName: "قاعدة القوة (Power Rule) والتعريف بالنهاية",
      steps: [
        "**صيغة الدالة:** $$f(x) = x^2$$",
        "**تطبيق قاعدة القوة الأساسية:** $\\frac{d}{dx}[x^n] = n x^{n-1}$. هنا $n = 2$.",
        "**المشتقة الأولى:** $$f'(x) = 2x^{2-1} = 2x$$",
        "**حساب قيمة المشتقة عند $x = 3$ (الميل):** $$f'(3) = 2(3) = 6$$"
      ],
      resultLatex: "f'(x) = 2x, \\quad f'(3) = 6"
    },
    'ex4_poly': {
      title: "كثيرة حدود ثلاثية الحدود (Example 4-i ص 7)",
      funcLatex: "f(x) = 5x^3 + 3x - 7",
      xVal: 1,
      ruleName: "قاعدة مجموع وطرح الحدود (Sum & Constant Rules)",
      steps: [
        "**صيغة الدالة:** $$f(x) = 5x^3 + 3x - 7$$",
        "**تطبيق قاعدة الجمع:** $\\frac{d}{dx}[f \\pm g] = f' \\pm g'$.",
        "**اشتقاق كل حد:**",
        "• مشتقة $5x^3$ هي: $5 \\cdot (3x^2) = 15x^2$",
        "• مشتقة $3x$ هي: $3 \\cdot (1) = 3$",
        "• مشتقة الثابت $-7$ هي: $0$",
        "**المشتقة الأولى النهائية:** $$f'(x) = 15x^2 + 3$$",
        "**التعويض عند $x = 1$:** $$f'(1) = 15(1)^2 + 3 = 18$$"
      ],
      resultLatex: "f'(x) = 15x^2 + 3, \\quad f'(1) = 18"
    },
    'ex4_quot': {
      title: "دالة كسرية (Example 4-iii ص 7)",
      funcLatex: "h(x) = \\frac{5x^3 + 3x - 7}{4x^2 + 5}",
      xVal: 0,
      ruleName: "قاعدة مشتقة خارج قسمة دالتين (Quotient Rule)",
      steps: [
        "**صيغة الدالة:** $$h(x) = \\frac{u(x)}{v(x)} = \\frac{5x^3 + 3x - 7}{4x^2 + 5}$$",
        "**قاعدة خارج القسمة:** $$h'(x) = \\frac{v \\cdot u' - u \\cdot v'}{v^2}$$",
        "**المشتقات الفردية للبسط والمقام:**",
        "• مشتقة البسط $u'(x) = 15x^2 + 3$",
        "• مشتقة المقام $v'(x) = 8x$",
        "**التركيب في القانون:** $$h'(x) = \\frac{(4x^2 + 5)(15x^2 + 3) - (5x^3 + 3x - 7)(8x)}{(4x^2 + 5)^2}$$",
        "**فك الأقواس والتبسيط:**",
        "$$(4x^2+5)(15x^2+3) = 60x^4 + 12x^2 + 75x^2 + 15 = 60x^4 + 87x^2 + 15$$",
        "$$(5x^3+3x-7)(8x) = 40x^4 + 24x^2 - 56x$$",
        "**الناتج بعد التبسيط:** $$h'(x) = \\frac{20x^4 + 63x^2 + 56x + 15}{(4x^2 + 5)^2}$$"
      ],
      resultLatex: "h'(x) = \\frac{20x^4 + 63x^2 + 56x + 15}{(4x^2 + 5)^2}"
    },
    'ex5_chain': {
      title: "قاعدة السلسلة لقوس مرفوع لأس (Example 5-i ص 8)",
      funcLatex: "f(x) = (x^5 - 4x + 8)^7",
      xVal: 1,
      ruleName: "قاعدة السلسلة (Chain Rule for Powers)",
      steps: [
        "**صيغة الدالة:** $$f(x) = [u(x)]^n = (x^5 - 4x + 8)^7$$",
        "**قاعدة السلسلة العامة:** $\\frac{d}{dx}[u^n] = n \\cdot u^{n-1} \\cdot u'$.",
        "**تحديد الدالة الداخلية ومشتقتها:**",
        "• $u(x) = x^5 - 4x + 8$",
        "• $u'(x) = 5x^4 - 4$",
        "**تطبيق القاعدة بإنزال الأس (7) وطرح 1 والضرب في المشتقة الداخلية:**",
        "$$f'(x) = 7(x^5 - 4x + 8)^6 \\cdot (5x^4 - 4)$$"
      ],
      resultLatex: "f'(x) = 7(x^5 - 4x + 8)^6 \\cdot (5x^4 - 4)"
    },
    'ex16_arctan': {
      title: "دالة الظل العكسية (Example 16 ص 30)",
      funcLatex: "f(x) = \\tan^{-1}(x)",
      xVal: 1,
      ruleName: "تفاضل الدوال المثلثية العكسية (Inverse Trigonometric Rule)",
      steps: [
        "**الدالة:** $$y = \\tan^{-1} x \\iff x = \\tan y$$",
        "**الاشتقاق الضمني:** $1 = \\sec^2 y \\cdot y' \\implies y' = \\frac{1}{\\sec^2 y}$.",
        "**باستخدام المتطابقة المثلثية:** $\\sec^2 y = 1 + \\tan^2 y = 1 + x^2$.",
        "**الصيغة الصريحة للمشتقة:** $$f'(x) = \\frac{1}{1 + x^2}$$",
        "**عند $x = 1$:** $$f'(1) = \\frac{1}{1 + (1)^2} = \\frac{1}{2}$$"
      ],
      resultLatex: "f'(x) = \\frac{1}{1 + x^2}, \\quad f'(1) = 0.5"
    },
    'ex21_hyp': {
      title: "دالة جيب التمام الزائدي لجذر (Example 21-i ص 39)",
      funcLatex: "f(x) = \\cosh(\\sqrt{x^3})",
      xVal: 1,
      ruleName: "تفاضل الدوال الزائدية وقاعدة السلسلة",
      steps: [
        "**صيغة الدالة:** $$f(x) = \\cosh(u(x)) \\quad \\text{حيث } u(x) = \\sqrt{x^3} = x^{3/2}$$",
        "**قاعدة اشتقاق $\\cosh(u)$:** $\\frac{d}{dx}[\\cosh(u)] = \\sinh(u) \\cdot u'$. (بإشارة موجبة!)",
        "**مشتقة الدالة الداخلية للجذر:** $$u'(x) = \\frac{3}{2}x^{1/2} = \\frac{3\\sqrt{x}}{2} = \\frac{3x^2}{2\\sqrt{x^3}}$$",
        "**التركيب الكامل:** $$f'(x) = \\sinh(\\sqrt{x^3}) \\cdot \\frac{3x^2}{2\\sqrt{x^3}} = \\frac{3\\sqrt{x}}{2} \\sinh(x^{3/2})$$"
      ],
      resultLatex: "f'(x) = \\frac{3x^2}{2\\sqrt{x^3}}\\sinh(\\sqrt{x^3})"
    }
  },

  loadDerivativePreset(presetKey) {
    const data = this.derivativePresets[presetKey];
    if (!data) return;

    const outContainer = document.getElementById('derivStepsOutput');
    if (!outContainer) return;

    let html = `
      <div class="sim-solution-card">
        <div class="sim-sol-header">
          <span class="sim-badge">📌 ${data.title}</span>
          <span class="sim-rule-badge">القاعدة المطبقة: ${data.ruleName}</span>
        </div>
        <div class="sim-sol-body">
    `;

    data.steps.forEach((step, idx) => {
      html += `
        <div class="sim-step-item">
          <div class="sim-step-num">${idx + 1}</div>
          <div class="sim-step-content">${step}</div>
        </div>
      `;
    });

    html += `
        </div>
        <div class="sim-result-box">
          <span class="sim-result-label">الناتج النهائي للدالة:</span>
          <div class="sim-result-math">$$${data.resultLatex}$$</div>
        </div>
      </div>
    `;

    outContainer.innerHTML = html;

    if (window.renderMathInElement) {
      renderMathInElement(outContainer, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }
  },

  // --------------------------------------------------------------------------
  // 2) Tangent & Normal Line Calculator
  // --------------------------------------------------------------------------
  initTangentSolver() {
    this.solveTangent();
  },

  solveTangent() {
    const funcType = document.getElementById('tangFuncSelect')?.value || 'parabola';
    const x0 = parseFloat(document.getElementById('tangXInput')?.value) || 2;
    const outBox = document.getElementById('tangentResultOutput');
    if (!outBox) return;

    let funcName = "", fVal = 0, fPrimeVal = 0, fStr = "", fPrimeStr = "";

    if (funcType === 'parabola') {
      funcName = "f(x) = x^2";
      fVal = x0 * x0;
      fPrimeVal = 2 * x0;
      fStr = `f(${x0}) = (${x0})^2 = ${fVal}`;
      fPrimeStr = `f'(x) = 2x \\implies m = f'(${x0}) = ${fPrimeVal}`;
    } else if (funcType === 'cubic') {
      funcName = "f(x) = x^3 - 3x";
      fVal = Math.pow(x0, 3) - 3 * x0;
      fPrimeVal = 3 * Math.pow(x0, 2) - 3;
      fStr = `f(${x0}) = (${x0})^3 - 3(${x0}) = ${fVal.toFixed(2)}`;
      fPrimeStr = `f'(x) = 3x^2 - 3 \\implies m = ${fPrimeVal.toFixed(2)}`;
    } else if (funcType === 'reciprocal') {
      const safeX = x0 === 0 ? 1 : x0;
      funcName = "f(x) = \\frac{1}{x}";
      fVal = 1 / safeX;
      fPrimeVal = -1 / (safeX * safeX);
      fStr = `f(${safeX}) = \\frac{1}{${safeX}} = ${fVal.toFixed(2)}`;
      fPrimeStr = `f'(x) = -\\frac{1}{x^2} \\implies m = ${fPrimeVal.toFixed(2)}`;
    }

    // Tangent equation: y - y0 = m(x - x0) => y = m*x + (y0 - m*x0)
    const bTang = fVal - fPrimeVal * x0;
    const bTangStr = bTang >= 0 ? `+ ${bTang.toFixed(2)}` : `- ${Math.abs(bTang).toFixed(2)}`;
    const tangEq = `y = ${fPrimeVal.toFixed(2)}x ${bTangStr}`;

    // Normal slope: -1/m
    let normalEq = "";
    if (Math.abs(fPrimeVal) < 0.0001) {
      normalEq = `x = ${x0} \\quad (\\text{خط عمودي رأسي})`;
    } else {
      const mNorm = -1 / fPrimeVal;
      const bNorm = fVal - mNorm * x0;
      const bNormStr = bNorm >= 0 ? `+ ${bNorm.toFixed(2)}` : `- ${Math.abs(bNorm).toFixed(2)}`;
      normalEq = `y = ${mNorm.toFixed(2)}x ${bNormStr}`;
    }

    outBox.innerHTML = `
      <div class="tangent-calc-grid">
        <div class="tang-card point-card">
          <div class="tang-card-title">📍 نقطة التماس $(x_0, y_0)$</div>
          <div class="tang-card-val">$$(${x0}, ${fVal.toFixed(2)})$$</div>
          <p class="tang-subtext">حيث $$${fStr}$$</p>
        </div>
        <div class="tang-card slope-card">
          <div class="tang-card-title">📈 ميل المماس $m = f'(x_0)$</div>
          <div class="tang-card-val">$$m = ${fPrimeVal.toFixed(2)}$$</div>
          <p class="tang-subtext">حيث $$${fPrimeStr}$$</p>
        </div>
      </div>
      <div class="tang-final-equations">
        <div class="eq-box tangent">
          <div class="eq-label">📐 معادلة خط المماس (Tangent Line):</div>
          <div class="eq-math">$$${tangEq}$$</div>
          <div class="eq-hint">الصيغة: $y - f(a) = f'(a)(x - a)$</div>
        </div>
        <div class="eq-box normal">
          <div class="eq-label">📐 معادلة الخط العمودي (Normal Line):</div>
          <div class="eq-math">$$${normalEq}$$</div>
          <div class="eq-hint">الصيغة: $y - f(a) = -\\frac{1}{f'(a)}(x - a)$</div>
        </div>
      </div>
    `;

    if (window.renderMathInElement) {
      renderMathInElement(outBox, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }
  },

  // --------------------------------------------------------------------------
  // 3) Hyperbolic Functions Deductive Identity Solver (Ex. 19 & Ex. Z)
  // --------------------------------------------------------------------------
  initHyperbolicSolver() {
    this.solveHyperbolic();
  },

  solveHyperbolic() {
    const valInput = document.getElementById('hypSinhInput');
    const outBox = document.getElementById('hyperbolicOutputGrid');
    if (!valInput || !outBox) return;

    const sinhVal = parseFloat(valInput.value) || 0.75; // Default 3/4 from Ex 19

    // cosh^2 = 1 + sinh^2
    const coshSq = 1 + sinhVal * sinhVal;
    const coshVal = Math.sqrt(coshSq);
    const tanhVal = sinhVal / coshVal;
    const cothVal = coshVal / sinhVal;
    const sechVal = 1 / coshVal;
    const cschVal = 1 / sinhVal;

    outBox.innerHTML = `
      <div class="hyp-card sinh">
        <div class="hyp-title">جيب التمام الزائدي $\\cosh x$</div>
        <div class="hyp-math">$$\\cosh x = \\sqrt{1 + \\sinh^2 x} = ${coshVal.toFixed(4)}$$</div>
        <div class="hyp-ratio">المتطابقة: $\\cosh^2 x - \\sinh^2 x = 1$</div>
      </div>
      <div class="hyp-card tanh">
        <div class="hyp-title">ظل الزاوية الزائدي $\\tanh x$</div>
        <div class="hyp-math">$$\\tanh x = \\frac{\\sinh x}{\\cosh x} = ${tanhVal.toFixed(4)}$$</div>
        <div class="hyp-ratio">المدى: $]-1, 1[$</div>
      </div>
      <div class="hyp-card coth">
        <div class="hyp-title">ظل تمام الزائدي $\\coth x$</div>
        <div class="hyp-math">$$\\coth x = \\frac{1}{\\tanh x} = ${cothVal.toFixed(4)}$$</div>
        <div class="hyp-ratio">مقلوب $\\tanh x$</div>
      </div>
      <div class="hyp-card sech">
        <div class="hyp-title">قاطع زائدي $\\mathrm{sech}(x)$</div>
        <div class="hyp-math">$$\\mathrm{sech}(x) = \\frac{1}{\\cosh x} = ${sechVal.toFixed(4)}$$</div>
        <div class="hyp-ratio">المدى: $]0, 1]$</div>
      </div>
      <div class="hyp-card csch">
        <div class="hyp-title">قاطع تمام زائدي $\\mathrm{csch}(x)$</div>
        <div class="hyp-math">$$\\mathrm{csch}(x) = \\frac{1}{\\sinh x} = ${cschVal.toFixed(4)}$$</div>
        <div class="hyp-ratio">مقلوب $\\sinh x$</div>
      </div>
      <div class="hyp-card check">
        <div class="hyp-title">التحقق من المتطابقة الأساسية $\\checkmark$</div>
        <div class="hyp-math">$$(\\cosh x)^2 - (\\sinh x)^2 = (${coshVal.toFixed(3)})^2 - (${sinhVal.toFixed(3)})^2 = 1.0000$$</div>
        <div class="hyp-ratio">صحيحة هندسياً على هذلول الوحدة!</div>
      </div>
    `;

    if (window.renderMathInElement) {
      renderMathInElement(outBox, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }
  },

  // --------------------------------------------------------------------------
  // 4) Interactive Truth Table Simulator (Midterm Exam Q3)
  // --------------------------------------------------------------------------
  initTruthTableSimulator() {
    this.renderTruthTable('midterm_q3');
  },

  renderTruthTable(exprKey) {
    const tableContainer = document.getElementById('truthTableOutput');
    if (!tableContainer) return;

    if (exprKey === 'midterm_q3') {
      // Expression: ((~p <-> q) (+) (p /\ ~q)) -> ~q
      tableContainer.innerHTML = `
        <div class="tt-desc-card">
          <h4>📌 مسألة امتحان الميدتيرم (السؤال الثالث - 5 درجات):</h4>
          <p>العبارة المنطقية المطلوب تحليلها: $$(( \\bar{p} \\leftrightarrow q ) \\oplus ( p \\wedge \\bar{q} )) \\rightarrow \\bar{q}$$</p>
        </div>
        <div class="table-responsive">
          <table class="sim-truth-table">
            <thead>
              <tr>
                <th>الصف</th>
                <th>$p$</th>
                <th>$q$</th>
                <th>$\\bar{p}$</th>
                <th>$\\bar{q}$</th>
                <th>$A: \\bar{p} \\leftrightarrow q$</th>
                <th>$B: p \\wedge \\bar{q}$</th>
                <th>$C: A \\oplus B$</th>
                <th class="final-col">الناتج: $C \\rightarrow \\bar{q}$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td class="final-cell"><span class="tt-t">T</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-f">F</span></td>
                <td class="final-cell"><span class="tt-t">T</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-t">T</span></td>
                <td class="final-cell highlight-wrong"><span class="tt-f">F</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-t">T</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td><span class="tt-f">F</span></td>
                <td class="final-cell"><span class="tt-t">T</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tt-summary-card">
          <div class="tt-stat-row">
            <span>🔹 تصنيف العبارة المنطقية:</span>
            <strong>Contingency (عبارة مشروطة تحتمل الصواب والخطأ، وليست Tautology لأن الصف 3 ناتجه False).</strong>
          </div>
          <div class="tt-stat-row">
            <span>🔹 الحالة الوحيدة الخاطئة:</span>
            <code>عندما يكون p = False و q = True، فإن الناتج الإجمالي = False</code>
          </div>
        </div>
      `;
    } else if (exprKey === 'demorgan') {
      // De Morgan: ~(p /\ q) <-> (~p \/ ~q)
      tableContainer.innerHTML = `
        <div class="tt-desc-card">
          <h4>📌 قانون دي مورجان الأول (De Morgan's First Law):</h4>
          <p>$$\\neg(p \\wedge q) \\leftrightarrow (\\neg p \\vee \\neg q)$$</p>
        </div>
        <div class="table-responsive">
          <table class="sim-truth-table">
            <thead>
              <tr>
                <th>$p$</th>
                <th>$q$</th>
                <th>$p \\wedge q$</th>
                <th>$\\neg(p \\wedge q)$</th>
                <th>$\\neg p \\vee \\neg q$</th>
                <th class="final-col">التكافؤ: $\\leftrightarrow$</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><span class="tt-t">T</span></td><td><span class="tt-t">T</span></td><td><span class="tt-t">T</span></td><td><span class="tt-f">F</span></td><td><span class="tt-f">F</span></td><td class="final-cell"><span class="tt-t">T</span></td></tr>
              <tr><td><span class="tt-t">T</span></td><td><span class="tt-f">F</span></td><td><span class="tt-f">F</span></td><td><span class="tt-t">T</span></td><td><span class="tt-t">T</span></td><td class="final-cell"><span class="tt-t">T</span></td></tr>
              <tr><td><span class="tt-f">F</span></td><td><span class="tt-t">T</span></td><td><span class="tt-f">F</span></td><td><span class="tt-t">T</span></td><td><span class="tt-t">T</span></td><td class="final-cell"><span class="tt-t">T</span></td></tr>
              <tr><td><span class="tt-f">F</span></td><td><span class="tt-f">F</span></td><td><span class="tt-f">F</span></td><td><span class="tt-t">T</span></td><td><span class="tt-t">T</span></td><td class="final-cell"><span class="tt-t">T</span></td></tr>
            </tbody>
          </table>
        </div>
        <div class="tt-summary-card">
          <strong>العمود النهائي بالكامل Tautology (صائبة دائماً لجميع قيم الإسناد) $\\checkmark$</strong>
        </div>
      `;
    }

    if (window.renderMathInElement) {
      renderMathInElement(tableContainer, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ]
      });
    }
  }
};

window.MathSimulator = MathSimulator;
