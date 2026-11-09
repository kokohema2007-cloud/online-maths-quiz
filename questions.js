// ==========================================================================
// بنك أسئلة مادة: GEN002 Mathematics 1 (رياضيات 1 - تفاضل وتكامل وجبر هندسي)
// جامعة حلوان الأهلية - كلية الهندسة - برنامج هندسة الشبكات والأمن السيبراني
// منسق المادة: د. أماني محمد | المحتوى: تفاضل الدوال المثلثية والزائدية وعكوسها،
// الاشتقاق الضمني واللوغاريتمي، النهايات وقاعدة لوبيتال، المشتقات الجزئية، والمنطق الرياضي
// ==========================================================================

const questionsData = [
  // ==========================================================================
  // SECTION 1: صح أو خطأ (TRUE / FALSE)
  // ==========================================================================
  {
    id: "tf_1",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "الاتصال وقابلية الاشتقاق (Differentiability & Continuity)",
    text: "If a function $f(x)$ is continuous at $x = a$, then it is always differentiable at $x = a$.",
    textAr: "إذا كانت الدالة $f(x)$ متصلة عند النقطة $x = a$، فإنها تكون دائماً قابلة للاشتقاق عند تلك النقطة.",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - Theorem 1.1 (Continuity and differentiability) ص 4",
    explanation: "خطأ (False). النظرية 1.1 تنص على: «إذا كانت الدالة قابلة للاشتقاق عند نقطة، فإنها تكون متصلة عندها، ولكن العكس غير صحيح دائماً». ومثال شهير دالة المقياس $f(x) = |x|$ متصلة عند $x=0$ ولكن غير قابلة للاشتقاق لوجود زاوية حادة (Corner point) حيث $f'(0^+) = 1 \\neq f'(0^-) = -1$.",
    details: "Differentiability implies continuity, but continuity does NOT imply differentiability."
  },
  {
    id: "tf_2",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "متطابقة فيثاغورس الزائدية الأساسية",
    text: "For all real $x$, $\\cosh^2 x - \\sinh^2 x = 1$.",
    textAr: "لكل عدد حقيقي $x$، المتطابقة الزائدية الأساسية هي: $\\cosh^2 x - \\sinh^2 x = 1$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Rules 1.7 (Hyperbolic identities) ص 36",
    explanation: "صحيح (True). بينما في الدوال الدائرية $\\cos^2 x + \\sin^2 x = 1$ (دائرة الوحدة)، في الدوال الزائدية ترتبط بهذلول الوحدة (Unit Hyperbola $x^2 - y^2 = 1$) وبالتالي $\\cosh^2 x - \\sinh^2 x = 1$.",
    details: "Identity: $\\cosh^2 x - \\sinh^2 x = \\left(\\frac{e^x+e^{-x}}{2}\\right)^2 - \\left(\\frac{e^x-e^{-x}}{2}\\right)^2 = \\frac{4}{4} = 1$."
  },
  {
    id: "tf_3",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "مشتقة دالة الظل العكسية (Derivative of arctan)",
    text: "The derivative of $f(x) = \\tan^{-1} x$ is $\\frac{1}{1 - x^2}$.",
    textAr: "مشتقة دالة الظل العكسية $f(x) = \\tan^{-1} x$ هي: $\\frac{1}{1 - x^2}$.",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - Rules 1.6 ص 29 و Example 16 ص 30",
    explanation: "خطأ (False). مشتقة $\\tan^{-1} x$ هي $\\frac{1}{1 + x^2}$ (مع إشارة موجبة في المقام). أما $\\frac{1}{1 - x^2}$ فهي مشتقة دالة الظل الزائدي العكسية $\\tanh^{-1} x$ حيث $|x| < 1$.",
    details: "$\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1+x^2}$, while $\\frac{d}{dx}(\\tanh^{-1} x) = \\frac{1}{1-x^2}$."
  },
  {
    id: "tf_4",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "زوجية وفردية الدوال الزائدية (Even & Odd Functions)",
    text: "The hyperbolic cosine function $\\cosh x$ is an odd function.",
    textAr: "دالة جيب التمام الزائدي $\\cosh x$ هي دالة فردية (Odd function).",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - Fig 1.9 ص 33",
    explanation: "خطأ (False). دالة $\\cosh x$ هي دالة زوجية متماثلة حول محور الصادات (Even function) حيث $\\cosh(-x) = \\cosh x$. بينما $\\sinh x$ و $\\tanh x$ هي دوال فردية (Odd functions) تحقق $f(-x) = -f(x)$.",
    details: "$\\cosh(-x) = \\frac{e^{-x} + e^{-(-x)}}{2} = \\frac{e^{-x} + e^x}{2} = \\cosh x$ (Even)."
  },
  {
    id: "tf_5",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "نظرية كليروت لتبادل المشتقات الجزئية (Clairaut's Theorem)",
    text: "For sufficiently smooth functions $f(x,y)$, the mixed second partial derivatives are equal: $f_{xy} = f_{yx}$.",
    textAr: "بالنسبة للدوال المتصلة والملساء $f(x,y)$، تكون المشتقات الجزئية المختلطة متساوية: $f_{xy} = f_{yx}$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Example 31 & Example 33 ص 64-66",
    explanation: "صحيح (True). بموجب نظرية كليروت (Clairaut's Theorem)، إذا كانت المشتقات الجزئية متصلة في جوار النقطة، فإن ترتيب الاشتقاق بالنسبة لـ $x$ ثم $y$ يساوي الاشتقاق بالنسبة لـ $y$ ثم $x$.",
    details: "$f_{xy} = \\frac{\\partial^2 f}{\\partial y \\partial x} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial f}{\\partial x}\\right) = f_{yx}$."
  },
  {
    id: "tf_6",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "شرط تطبيق قاعدة لوبيتال (L'Hôpital's Rule Condition)",
    text: "L'Hôpital's rule can be applied directly to the indeterminate form $\\infty - \\infty$ without any rearrangement.",
    textAr: "يمكن تطبيق قاعدة لوبيتال مباشرة على الصيغة غير المعينة $\\infty - \\infty$ بدون أي تعديل أو إعادة كتابة.",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - ص 54 و ص 56",
    explanation: "خطأ (False). قاعدة لوبيتال تُطبَّق حصراً وبشكل مباشر على الصيغتين الكسريتين $\\frac{0}{0}$ أو $\\frac{\\pm\\infty}{\\pm\\infty}$. أما الصيغ الأخرى مثل $\\infty - \\infty$ أو $0 \\cdot \\infty$ أو $1^\\infty$، فيجب أولاً إعادة تشكيلها جبرياً (عن طريق توحيد المقامات أو أخذ اللوغاريتم الطبيعي) لتتحول إلى كسر $\\frac{0}{0}$ أو $\\frac{\\infty}{\\infty}$.",
    details: "L'Hôpital's rule is valid ONLY for $\\frac{0}{0}$ and $\\frac{\\pm\\infty}{\\pm\\infty}$."
  },
  {
    id: "tf_7",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "تعريف الدالة التوافقية (Harmonic Function Definition)",
    text: "A function $f(x,y)$ is said to be harmonic if it satisfies Laplace's equation: $f_{xx} + f_{yy} = 0$.",
    textAr: "تُعتبر الدالة $f(x,y)$ دالة توافقية (Harmonic) إذا حققت معادلة لابلاس: $f_{xx} + f_{yy} = 0$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Example 32 ص 65 و Exercises II ص 81",
    explanation: "صحيح (True). الدالة التوافقية (Harmonic function) هي أي دالة ثنائية المتغيرات تمتلك مشتقات جزئية ثانية متصلة وتحقق معادلة لابلاس $\\nabla^2 f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} = 0$.",
    details: "Example 32 proves that $f(x,y) = \\ln\\sqrt{x^2+y^2}$ is harmonic because $f_{xx} + f_{yy} = 0$."
  },
  {
    id: "tf_8",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "علاقة المعكوس المتبادل في الدوال المثلثية",
    text: "The inverse sine identity satisfies: $\\sin^{-1} x = \\frac{1}{\\sin x}$.",
    textAr: "المتطابقة للدالة العكسية تحقق: $\\sin^{-1} x = \\frac{1}{\\sin x}$.",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - Definition 1.4 ص 19",
    explanation: "خطأ (False). الرمز $\\sin^{-1} x$ يعني الدالة العكسية (الزاوية التي جيبها $x$، أي $\\arcsin x$)، ولا يساوي مقلوب الدالة $\\frac{1}{\\sin x} = \\csc x$. الكتاب يؤكد بوضوح: $\\sin^{-1} x \\neq 1/\\sin x$ بينما $(\\sin x)^{-1} = 1/\\sin x$.",
    details: "$\\sin^{-1} x = \\arcsin x$, whereas $(\\sin x)^{-1} = \\frac{1}{\\sin x} = \\csc x$."
  },
  {
    id: "tf_9",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "مشتقة دالة جيب التمام الزائدي (Derivative of cosh x)",
    text: "The derivative of $\\cosh x$ is $-\\sinh x$.",
    textAr: "مشتقة دالة جيب التمام الزائدي $\\cosh x$ هي: $-\\sinh x$.",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - Rules 1.8 ص 38 و Example 20",
    explanation: "خطأ (False). على عكس الدوال الدائرية حيث مشتقة $\\cos x$ سالبة $(-\\sin x)$، مشتقة جيب التمام الزائدي $\\cosh x$ موجبة دائماً: $\\frac{d}{dx}(\\cosh x) = +\\sinh x$.",
    details: "$\\frac{d}{dx}\\cosh x = \\sinh x$, and $\\frac{d}{dx}\\sinh x = \\cosh x$ (both positive)."
  },
  {
    id: "tf_10",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "logic",
    topicName: "المنطق الرياضي وجداول الصواب ومجموعات الدوال",
    title: "خاصية التكافؤ المنطقي (Exclusive OR vs Biconditional)",
    text: "The operation $p \\oplus q$ is true if and only if $p$ and $q$ have the same truth value.",
    textAr: "العملية المنطقية $p \\oplus q$ (XOR) تكون صائبة (True) فقط عندما يكون لـ $p$ و $q$ نفس القيمة المنطقية.",
    type: "boolean",
    correctAnswer: false,
    source: "امتحان الميدتيرم GEN002 - Question 3 (Logic & Truth Tables)",
    explanation: "خطأ (False). عملية الفصل الحصري $\\oplus$ (XOR) تكون صائبة فقط عندما تختلف قيمتا $p$ و $q$ (أحدهما T والآخر F). أما عندما تتطابق القيم (T مع T أو F مع F) فإن الناتج يكون خطأ (False). التي تكون صائبة عند التطابق هي أداة التكافؤ $p \\leftrightarrow q$.",
    details: "$p \\oplus q \\equiv \\neg(p \\leftrightarrow q)$. XOR is true only when inputs differ."
  },
  {
    id: "tf_11",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "انعكاس بيان الدالة العكسية حول المستقيم y = x",
    text: "The graph of $f^{-1}(x)$ is obtained by reflecting the graph of $f(x)$ about the line $y = x$.",
    textAr: "يتم الحصول على منحنى الدالة العكسية $f^{-1}(x)$ عن طريق عمل انعكاس لمنحنى الدالة الأصلية $f(x)$ حول خط التماثل $y = x$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Rules 1.4 ص 17",
    explanation: "صحيح (True). لأن الدالة العكسية تبدل الإحداثيات: فإذا كانت النقطة $(a, b)$ تقع على منحنى $f(x)$ فإن النقطة المنعكسة $(b, a)$ ستقع حتماً على منحنى الدالة العكسية $f^{-1}(x)$ عبر خط المرآة $y = x$.",
    details: "Point $(a, b) \\in f \\iff (b, a) \\in f^{-1}$."
  },
  {
    id: "tf_12",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "implicit",
    topicName: "الاشتقاق الضمني واللوغاريتمي",
    title: "شرط الاشتقاق اللوغاريتمي عند وجود دالة في الأساس والأس",
    text: "To differentiate $y = [f(x)]^{g(x)}$ where both base and exponent are variables, logarithmic differentiation MUST be used.",
    textAr: "لاشتقاق الدالة $y = [f(x)]^{g(x)}$ حيث الأساس والأس كلاهما متغير، يجب استخدام الاشتقاق اللوغاريتمي.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - ص 51 و ص 52 (Logarithmic differentiation)",
    explanation: "صحيح (True). لا يمكن تطبيق قاعدة القوة ($x^n$) لأن الأس ليس ثابتاً، ولا يمكن تطبيق قاعدة الدالة الأسية ($a^x$) لأن الأساس ليس ثابتاً، لذا يلزم أخذ $\\ln$ للطرفين: $\\ln y = g(x) \\ln(f(x))$ ثم الاشتقاق الضمني.",
    details: "Standard technique: $\\ln y = g(x)\\ln f(x) \\implies \\frac{y'}{y} = g'(x)\\ln f(x) + g(x)\\frac{f'(x)}{f(x)}$."
  },
  {
    id: "tf_13",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "المدى والمجال لدالة sinh x",
    text: "The domain and range of the hyperbolic sine function $\\sinh x$ are both $\\mathbb{R}$ (all real numbers).",
    textAr: "المجال والمدى لدالة الجيب الزائدي $\\sinh x$ هما كلاهما مجموعة الأعداد الحقيقية بالكامل $\\mathbb{R}$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Fig 1.10 ص 34",
    explanation: "صحيح (True). دالة $\\sinh x$ معرفة لجميع الأعداد الحقيقية وقيمها تمتد من $-\\infty$ إلى $+\\infty$. على عكس $\\cosh x$ التي مداها $[1, \\infty[$.",
    details: "Domain$(\\sinh x) = \\mathbb{R}$, Range$(\\sinh x) = \\mathbb{R}$."
  },
  {
    id: "tf_14",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "صيغة النهاية الشهيرة لعدد أويلر e",
    text: "The limit $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e$.",
    textAr: "قيمة النهاية الشهيرة $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$ تساوي ثابت أويلر $e$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Example 28 (vii) ص 57 و ص 59",
    explanation: "صحيح (True). هذه هي الصيغة غير المعينة $1^\\infty$. بفرض $y = (1+1/x)^x$ وأخذ $\\ln$ للطرفين وتطبيق قاعدة لوبيتال، نجد أن $\\lim \\ln y = 1$، وبالتالي $\\lim y = e^1 = e$.",
    details: "$\\lim_{x \\to \\infty} \\ln y = \\lim_{x \\to \\infty} \\frac{\\ln(1+1/x)}{1/x} = 1 \\implies y \\to e$."
  },
  {
    id: "tf_15",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "معادلات كوشي-ريمان (Cauchy-Riemann Equations)",
    text: "The Cauchy-Riemann equations for $u(x,y)$ and $v(x,y)$ are given by: $u_x = v_y$ and $u_y = -v_x$.",
    textAr: "معادلات كوشي-ريمان للدوال $u(x,y)$ و $v(x,y)$ هي: $u_x = v_y$ و $u_y = -v_x$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Exercises FF ص 80",
    explanation: "صحيح (True). معادلات كوشي-ريمان (Cauchy-Riemann) هما زوج المعادلتين التفاضليتين الأساسيتين في التحليل المركب والهندسي: المشتقة الجزئية لـ $u$ بالنسبة لـ $x$ تساوي مشتقة $v$ بالنسبة لـ $y$ ($u_x = v_y$)، والمشتقة الجزئية لـ $u$ بالنسبة لـ $y$ تساوي سالب مشتقة $v$ بالنسبة لـ $x$ ($u_y = -v_x$).",
    details: "$u_x = \\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y} = v_y$, and $u_y = \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x} = -v_x$."
  },
  {
    id: "tf_16",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "مماس رأسي ودالة الجذر التكعيبي",
    text: "The function $f(x) = \\sqrt[3]{x}$ is continuous at $x = 0$ but not differentiable at $x = 0$.",
    textAr: "الدالة $f(x) = \\sqrt[3]{x}$ متصلة عند $x = 0$ ولكنها غير قابلة للاشتقاق عند $x = 0$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Exercises (1) D ص 69",
    explanation: "صحيح (True). الدالة $f(0) = 0$ ومتصلة عند الصفر. ولكن بحساب المشتقة بالتعريف: $\\lim_{h \\to 0} \\frac{\\sqrt[3]{h} - 0}{h} = \\lim_{h \\to 0} \\frac{1}{h^{2/3}} = +\\infty$، مما يعني وجود مماس رأسي (Vertical tangent)، وبالتالي الدالة غير قابلة للاشتقاق عند $x=0$.",
    details: "Vertical tangent: $f'(0) = \\lim_{h \\to 0} h^{-2/3} = \\infty$."
  },
  {
    id: "tf_17",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "متطابقة ظل التمام الزائدي coth² x - 1",
    text: "The hyperbolic identity $\\coth^2 x - 1 = \\mathrm{csch}^2 x$ holds for all $x \\neq 0$.",
    textAr: "المتطابقة الزائدية $\\coth^2 x - 1 = \\mathrm{csch}^2 x$ صحيحة لجميع الأعداد $x \\neq 0$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Rules 1.7 (3) ص 36",
    explanation: "صحيح (True). بقسمة المتطابقة الأساسية $\\cosh^2 x - \\sinh^2 x = 1$ على $\\sinh^2 x$ للطرفين، نحصل على: $\\frac{\\cosh^2 x}{\\sinh^2 x} - 1 = \\frac{1}{\\sinh^2 x} \\implies \\coth^2 x - 1 = \\mathrm{csch}^2 x$.",
    details: "$\\frac{\\cosh^2 x}{\\sinh^2 x} - 1 = \\frac{1}{\\sinh^2 x} \\iff \\coth^2 x - 1 = \\mathrm{csch}^2 x$."
  },
  {
    id: "tf_18",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "مجال دالة القاطع العكسية sec⁻¹ x",
    text: "The domain of the inverse secant function $\\sec^{-1} x$ is the open interval $]-1, 1[$.",
    textAr: "مجال دالة القاطع العكسية $\\sec^{-1} x$ هو الفترة المفتوحة $]-1, 1[$.",
    type: "boolean",
    correctAnswer: false,
    source: "الكتاب - Definition 1.8 ص 25 و ص 26",
    explanation: "خطأ (False). الفترة $]-1, 1[$ هي الفترة الوحيدة غير المعرفة لدالة القاطع العكسية! مجال دالة $\\sec^{-1} x$ هو $\\mathbb{R} - ]-1, 1[$ أي $|x| \\ge 1$ (أي $]-\\infty, -1] \\cup [1, \\infty[$) لأن مدى دالة $\\sec x$ الأصلية لا يقع أبداً داخل $]-1, 1[$.",
    details: "Domain$(\\sec^{-1} x) = \\mathbb{R} - ]-1, 1[ = \\{x: |x| \\ge 1\\}$."
  },

  // ==========================================================================
  // SECTION 2: اختيار من متعدد (MCQ)
  // ==========================================================================
  {
    id: "mcq_1",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "إيجاد قيمة cosh x بمعلومية sinh x",
    text: "If $\\sinh x = \\frac{3}{4}$, what is the exact value of $\\cosh x$?",
    textAr: "إذا كانت $\\sinh x = \\frac{3}{4}$، فما هي القيمة المضبوطة لـ $\\cosh x$؟",
    type: "mcq",
    options: [
      "\\frac{5}{4}",
      "\\frac{4}{3}",
      "\\frac{\\sqrt{7}}{4}",
      "\\frac{5}{3}"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 19 ص 37",
    explanation: "الحل: نستخدم متطابقة فيثاغورس الزائدية: $\\cosh^2 x = 1 + \\sinh^2 x = 1 + \\left(\\frac{3}{4}\\right)^2 = 1 + \\frac{9}{16} = \\frac{25}{16}$. وبما أن دالة $\\cosh x > 0$ موجبة دائماً لجميع قيم $x$ الحقيقية، فإن $\\cosh x = \\sqrt{\\frac{25}{16}} = \\frac{5}{4}$.",
    details: "$\\cosh x = \\sqrt{1 + \\sinh^2 x} = \\sqrt{1 + 9/16} = 5/4$."
  },
  {
    id: "mcq_2",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "حساب نهاية باستخدام قاعدة لوبيتال",
    text: "Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\cos x + 2x - 1}{3x}$",
    textAr: "احسب قيمة النهاية: $\\lim_{x \\to 0} \\frac{\\cos x + 2x - 1}{3x}$",
    type: "mcq",
    options: [
      "\\frac{2}{3}",
      "0",
      "\\frac{1}{3}",
      "\\infty"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 27 (i) ص 55",
    explanation: "الحل: بالتعويض المباشر عند $x=0$: $\\frac{1 + 0 - 1}{0} = \\frac{0}{0}$ (صيغة غير معينة). بتطبيق قاعدة لوبيتال نشتق البسط والمقام: مشتقة البسط $-\\sin x + 2$، ومشتقة المقام $3$. بالتعويض عند $x=0$: $\\frac{-\\sin(0) + 2}{3} = \\frac{2}{3}$.",
    details: "Apply L'Hôpital: $\\lim_{x \\to 0} \\frac{-\\sin x + 2}{3} = \\frac{0 + 2}{3} = \\frac{2}{3}$."
  },
  {
    id: "mcq_3",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "المشتقة الجزئية الأولى بالنسبة لـ x",
    text: "If $f(x,y) = x^3 y^2 - 2x^2 y + 3x$, what is $f_x(2, -1)$?",
    textAr: "إذا كانت الدالة $f(x,y) = x^3 y^2 - 2x^2 y + 3x$، فما قيمة المشتقة الجزئية $f_x(2, -1)$؟",
    type: "mcq",
    options: [
      "23",
      "-24",
      "15",
      "31"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 29 ص 62 و 63",
    explanation: "الحل: نشتق بالنسبة لـ $x$ مع اعتبار $y$ ثابتاً: $f_x = 3x^2 y^2 - 4xy + 3$. الآن نعوض بالنقطة $(x=2, y=-1)$: $f_x(2, -1) = 3(2)^2(-1)^2 - 4(2)(-1) + 3 = 3(4)(1) + 8 + 3 = 12 + 8 + 3 = 23$.",
    details: "$f_x = 3x^2 y^2 - 4xy + 3 \\implies f_x(2,-1) = 3(4)(1) - 4(2)(-1) + 3 = 12 + 8 + 3 = 23$."
  },
  {
    id: "mcq_4",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "معكوس الدالة المثلثية المركبة",
    text: "What is the exact value of $\\sin\\left(\\sin^{-1}\\left(\\frac{1}{2}\\right)\\right)$?",
    textAr: "ما هي القيمة الدقيقة للمقدار: $\\sin\\left(\\sin^{-1}\\left(\\frac{1}{2}\\right)\\right)$؟",
    type: "mcq",
    options: [
      "\\frac{1}{2}",
      "\\frac{\\sqrt{3}}{2}",
      "\\frac{\\pi}{6}",
      "1"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 13 ص 20",
    explanation: "الحل: من خاصية تركيب الدالة مع دالتها العكسية: $\\sin(\\sin^{-1} x) = x$ بشرط أن ينتمي $x$ للمجال $[-1, 1]$. وبما أن $\\frac{1}{2} \\in [-1, 1]$، فإن الناتج هو $\\frac{1}{2}$ مباشرة.",
    details: "Identity: $\\sin(\\sin^{-1} x) = x$ for all $x \\in [-1, 1]$."
  },
  {
    id: "mcq_5",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "الصيغة اللوغاريتمية لـ sinh⁻¹ x",
    text: "The logarithmic identity for $\\sinh^{-1} x$ for all real $x$ is:",
    textAr: "المتطابقة اللوغاريتمية للدالة الزائدية العكسية $\\sinh^{-1} x$ هي:",
    type: "mcq",
    options: [
      "\\ln\\left(x + \\sqrt{x^2 + 1}\\right)",
      "\\ln\\left(x + \\sqrt{x^2 - 1}\\right)",
      "\\frac{1}{2}\\ln\\left(\\frac{1+x}{1-x}\\right)",
      "\\ln\\left(\\frac{1 + \\sqrt{1-x^2}}{x}\\right)"
    ],
    correctAnswer: 0,
    source: "الكتاب - Rules 1.9 ص 45 و Example 22 ص 46",
    explanation: "الحل: المتطابقة القياسية لـ $\\sinh^{-1} x$ هي $\\ln(x + \\sqrt{x^2+1})$. الخيار الثاني هو $\\cosh^{-1} x$ حيث $x \\ge 1$، والخيار الثالث هو $\\tanh^{-1} x$ حيث $|x|<1$.",
    details: "$\\sinh^{-1} x = \\ln(x + \\sqrt{x^2+1})$ for all $x \\in \\mathbb{R}$."
  },
  {
    id: "mcq_6",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "معادلة خط المماس للمنحنى",
    text: "What is the equation of the tangent line to the curve $f(x) = x^2$ at the point $(2, 4)$?",
    textAr: "ما هي معادلة خط المماس لمنحنى الدالة $f(x) = x^2$ عند النقطة $(2, 4)$؟",
    type: "mcq",
    options: [
      "y = 4x - 4",
      "y = 2x",
      "y = 4x + 4",
      "y = -4x + 12"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 3 ص 5",
    explanation: "الحل: 1) نوجد الميل: $f'(x) = 2x \\implies m = f'(2) = 4$. 2) معادلة المماس بصيغة الميل ونقطة: $y - y_1 = m(x - x_1) \\implies y - 4 = 4(x - 2) \\implies y = 4x - 8 + 4 \\implies y = 4x - 4$.",
    details: "$m = f'(2) = 4 \\implies y - 4 = 4(x - 2) \\iff y = 4x - 4$."
  },
  {
    id: "mcq_7",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "implicit",
    topicName: "الاشتقاق الضمني واللوغاريتمي",
    title: "الاشتقاق الضمني لمعادلة منحنى كلاسيكي",
    text: "Find $\\frac{dy}{dx}$ for the curve $x^3 + y^3 = 6xy$:",
    textAr: "أوجد المشتقة الأولى $\\frac{dy}{dx}$ للمنحنى الضمني $x^3 + y^3 = 6xy$:",
    type: "mcq",
    options: [
      "\\frac{2y - x^2}{y^2 - 2x}",
      "\\frac{x^2 - 2y}{2x - y^2}",
      "\\frac{6y - 3x^2}{3y^2}",
      "\\frac{2x - y^2}{x^2 - 2y}"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 25 (i) ص 50",
    explanation: "الحل: نشتق الطرفين بالنسبة لـ $x$: $3x^2 + 3y^2 y' = 6[y + x y']$. نقسم على 3: $x^2 + y^2 y' = 2y + 2x y'$. نجمع حدود $y'$ في طرف: $y^2 y' - 2x y' = 2y - x^2 \\implies y'(y^2 - 2x) = 2y - x^2 \\implies y' = \\frac{2y - x^2}{y^2 - 2x}$.",
    details: "$3x^2 + 3y^2 y' = 6(y + xy') \\iff (y^2 - 2x)y' = 2y - x^2 \\iff y' = \\frac{2y - x^2}{y^2 - 2x}$."
  },
  {
    id: "mcq_8",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "متطابقة مجموع دالتي الجيب وجيب التمام العكسيتين",
    text: "For any $x \\in [-1, 1]$, what is the value of $\\sin^{-1} x + \\cos^{-1} x$?",
    textAr: "لأي قيمة $x \\in [-1, 1]$، ما هي قيمة المقدار $\\sin^{-1} x + \\cos^{-1} x$؟",
    type: "mcq",
    options: [
      "\\frac{\\pi}{2}",
      "\\pi",
      "0",
      "1"
    ],
    correctAnswer: 0,
    source: "الكتاب - Rules 1.5 ص 28",
    explanation: "الحل: المتطابقة المثلثية العكسية الشهيرة تنص على أن مجموع الزاوية ومتممتها يساوي $\\frac{\\pi}{2}$ دائماً: $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$، تماماً مثل $\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}$ و $\\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2}$.",
    details: "Identity: $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}$ for all $x \\in [-1, 1]$."
  },
  {
    id: "mcq_9",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "logic",
    topicName: "المنطق الرياضي وجداول الصواب ومجموعات الدوال",
    title: "مجال تركيب دالتين (Domain of Composite Function)",
    text: "If $f(x) = \\sqrt{x^3 + 4}$ and $g(x) = x^2 + 2$, what is the domain of $(g \\circ f)(x)$?",
    textAr: "إذا كانت $f(x) = \\sqrt{x^3 + 4}$ و $g(x) = x^2 + 2$، فما هو مجال الدالة المركبة $(g \\circ f)(x)$؟",
    type: "mcq",
    options: [
      "[- \\sqrt[3]{4}, \\infty[",
      "\\mathbb{R}",
      "[0, \\infty[",
      "]-\\infty, \\sqrt[3]{4}]"
    ],
    correctAnswer: 0,
    source: "امتحان الميدتيرم GEN002 - Question 4",
    explanation: "الحل: تركيب الدالة هو $(g \\circ f)(x) = g(f(x)) = (\\sqrt{x^3+4})^2 + 2 = x^3 + 4 + 2 = x^3 + 6$. ولكن شرط مجال الدالة المركبة يتطلب أن تنتمي $x$ لمجال الدالة الداخلية $f(x)$، أي يجب أن يكون ما تحت الجذر غير سالب: $x^3 + 4 \\ge 0 \\implies x^3 \\ge -4 \\implies x \\ge -\\sqrt[3]{4}$. وبالتالي المجال هو $[-\\sqrt[3]{4}, \\infty[$.",
    details: "Domain requires $x \\in \\mathrm{Dom}(f) \\iff x^3 + 4 \\ge 0 \\implies x \\in [-\\sqrt[3]{4}, \\infty[$."
  },
  {
    id: "mcq_10",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "حساب نهاية تتضمن دالة كسرية وأسية",
    text: "Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^x + e^{-x} - 2}{1 - \\cos 2x}$",
    textAr: "احسب قيمة النهاية: $\\lim_{x \\to 0} \\frac{e^x + e^{-x} - 2}{1 - \\cos 2x}$",
    type: "mcq",
    options: [
      "\\frac{1}{2}",
      "1",
      "0",
      "\\frac{1}{4}"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 27 (iv) ص 55 و ص 56",
    explanation: "الحل: التعويض المباشر يعطي $\\frac{1+1-2}{1-1} = \\frac{0}{0}$. نطبق قاعدة لوبيتال المرة الأولى: البسط يصبح $e^x - e^{-x}$، والمقام $2\\sin 2x$. بالتعويض يعطي $\\frac{0}{0}$ ثانية. نطبق لوبيتال المرة الثانية: البسط يصبح $e^x + e^{-x}$، والمقام $4\\cos 2x$. بالتعويض عند $x=0$: $\\frac{1 + 1}{4(1)} = \\frac{2}{4} = \\frac{1}{2}$.",
    details: "First derivative gives $\\frac{e^x-e^{-x}}{2\\sin 2x} = \\frac{0}{0}$. Second derivative gives $\\frac{e^x+e^{-x}}{4\\cos 2x} = \\frac{2}{4} = 1/2$."
  },
  {
    id: "mcq_11",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "متطابقة ضعف الزاوية لدالة cosh 2x",
    text: "Which of the following is an identity for $\\cosh 2x$?",
    textAr: "أي من العلاقات التالية تمثل متطابقة صحيحة لـ $\\cosh 2x$؟",
    type: "mcq",
    options: [
      "\\cosh^2 x + \\sinh^2 x",
      "\\cosh^2 x - \\sinh^2 x",
      "2\\cosh^2 x + 1",
      "2\\sinh x \\cosh x"
    ],
    correctAnswer: 0,
    source: "الكتاب - Rules 1.7 (10) ص 36",
    explanation: "الحل: متطابقة جيب التمام الزائدي لضعف الزاوية هي $\\cosh 2x = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 1 + 2\\sinh^2 x$. لاحظ الإشارة الموجبة بين المربعين على عكس الدائرية $\\cos 2x = \\cos^2 x - \\sin^2 x$. أما $2\\sinh x \\cosh x$ فهي لـ $\\sinh 2x$.",
    details: "$\\cosh 2x = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 1 + 2\\sinh^2 x$."
  },
  {
    id: "mcq_12",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "المشتقة الجزئية الثانية المختلطة",
    text: "If $f(x, y) = x e^{xy}$, what is $f_{xy}$?",
    textAr: "إذا كانت $f(x, y) = x e^{xy}$، فما هي المشتقة الجزئية الثانية $f_{xy}$؟",
    type: "mcq",
    options: [
      "x(2 + xy)e^{xy}",
      "(1 + xy)e^{xy}",
      "x^2(3 + xy)e^{xy}",
      "y(2 + xy)e^{xy}"
    ],
    correctAnswer: 0,
    source: "امتحان الميدتيرم GEN002 - Question 2",
    explanation: "الحل: 1) نوجد المشتقة بالنسبة لـ $x$ أولاً حاصل ضرب دالتين: $f_x = (1)e^{xy} + x(y e^{xy}) = (1 + xy)e^{xy}$. 2) الآن نشتق الناتج بالنسبة لـ $y$: مشتقة $(1+xy)$ بالنسبة لـ $y$ هي $x$ مضروبة في $e^{xy}$ + الدالة $(1+xy)$ مضروبة في مشتقة $e^{xy}$ بالنسبة لـ $y$ وهي $x e^{xy}$. إذن: $f_{xy} = x e^{xy} + x(1+xy)e^{xy} = x(1 + 1 + xy)e^{xy} = x(2+xy)e^{xy}$.",
    details: "$f_x = (1+xy)e^{xy} \\implies f_{xy} = \\partial_y[(1+xy)e^{xy}] = x e^{xy} + (1+xy)x e^{xy} = x(2+xy)e^{xy}$."
  },
  {
    id: "mcq_13",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "مشتقة دالة اللوغاريتم لأساس عام log_3",
    text: "What is the derivative of $f(x) = \\log_3(x^2 - 1)$?",
    textAr: "ما هي مشتقة الدالة $f(x) = \\log_3(x^2 - 1)$؟",
    type: "mcq",
    options: [
      "\\frac{2x}{(x^2 - 1)\\ln 3}",
      "\\frac{2x}{x^2 - 1}",
      "\\frac{2x \\ln 3}{x^2 - 1}",
      "\\frac{1}{(x^2 - 1)\\ln 3}"
    ],
    correctAnswer: 0,
    source: "الكتاب - Exercises (1) H (1) ص 70",
    explanation: "الحل: قاعدة اشتقاق دالة اللوغاريتم للأساس $b$: $\\frac{d}{dx}[\\log_b u] = \\frac{u'}{u \\ln b}$. هنا $u(x) = x^2 - 1$ ومشتقتها $u' = 2x$ والأساس $b = 3$. إذن المشتقة: $f'(x) = \\frac{2x}{(x^2 - 1)\\ln 3}$.",
    details: "$\\frac{d}{dx}\\log_b(u) = \\frac{u'}{u \\ln b}$."
  },
  {
    id: "mcq_14",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "مشتقة دالة القاطع الزائدي sech x",
    text: "The derivative of $f(x) = \\mathrm{sech}(x)$ is:",
    textAr: "مشتقة دالة القاطع الزائدي $f(x) = \\mathrm{sech}(x)$ هي:",
    type: "mcq",
    options: [
      "-\\mathrm{sech}(x)\\tanh(x)",
      "+\\mathrm{sech}(x)\\tanh(x)",
      "-\\mathrm{sech}^2(x)",
      "-\\mathrm{csch}(x)\\coth(x)"
    ],
    correctAnswer: 0,
    source: "الكتاب - Rules 1.8 (5) ص 38",
    explanation: "الحل: مشتقة القاطع الزائدي هي $-\\mathrm{sech}(x)\\tanh(x)$ بإشارة سالبة دائماً، كما في مشتقة $\\mathrm{csch}(x) = -\\mathrm{csch}(x)\\coth(x)$.",
    details: "$\\frac{d}{dx}\\mathrm{sech}(x) = -\\mathrm{sech}(x)\\tanh(x)$."
  },
  {
    id: "mcq_15",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "نهاية الصيغة الأسية (x+1)^(2/x) عند اللانهاية",
    text: "Find the limit: $\\lim_{x \\to \\infty} (x + 1)^{2/x}$",
    textAr: "احسب قيمة النهاية عند المالانهاية: $\\lim_{x \\to \\infty} (x + 1)^{2/x}$",
    type: "mcq",
    options: [
      "1",
      "e^2",
      "e",
      "0"
    ],
    correctAnswer: 0,
    source: "الكتاب - Example 28 (vi) ص 57 و ص 59",
    explanation: "الحل: التعويض المباشر يعطي صيغة غير معينة $\\infty^0$. نضع $y = (x+1)^{2/x}$ ونأخذ $\\ln$ للطرفين: $\\ln y = \\frac{2\\ln(x+1)}{x}$. نطبق لوبيتال على النهاية الكسرية: $\\lim_{x \\to \\infty} \\frac{2/(x+1)}{1} = 0$. إذن $\\lim \\ln y = 0 \\implies \\lim y = e^0 = 1$.",
    details: "$\\ln y = \\frac{2\\ln(x+1)}{x} \\to 0 \\implies y \\to e^0 = 1$."
  },

  // ==========================================================================
  // SECTION 3: إدخال وحساب نواتج (CALCULATION INPUTS)
  // ==========================================================================
  {
    id: "calc_1",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "قيمة المشتقة الأولى لدالة كثيرة حدود",
    text: "Given $f(x) = x^2$, calculate the exact value of $f'(3)$.",
    textAr: "إذا كانت $f(x) = x^2$، احسب القيمة العددية الدقيقة لـ $f'(3)$.",
    type: "numeric",
    correctAnswer: 6,
    tolerance: 0.001,
    source: "الكتاب - Example 1 ص 3",
    explanation: "الحل: مشتقة $f(x) = x^2$ هي $f'(x) = 2x$. بالتعويض عند $x = 3$: $f'(3) = 2(3) = 6$.",
    details: "$f'(x) = 2x \\implies f'(3) = 2 \\times 3 = 6$."
  },
  {
    id: "calc_2",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "ميل خط المماس لمنحنى تربيعي",
    text: "Find the slope of the tangent line to the graph of $f(x) = x^2$ at the point $(2, 4)$.",
    textAr: "أوجد ميل خط المماس لمنحنى الدالة $f(x) = x^2$ عند النقطة $(2, 4)$.",
    type: "numeric",
    correctAnswer: 4,
    tolerance: 0.001,
    source: "الكتاب - Example 3 ص 5",
    explanation: "الحل: ميل المماس هو قيمة المشتقة الأولى عند الإحداثي السيني للنقطة: $m = f'(2)$. وبما أن $f'(x) = 2x$، فإن الميل $m = 2(2) = 4$.",
    details: "Slope $m = f'(2) = 2(2) = 4$."
  },
  {
    id: "calc_3",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "حساب قيمة المشتقة الجزئية f_y(2, -1)",
    text: "If $f(x, y) = x^3 y^2 - 2x^2 y + 3x$, calculate the value of $f_y(2, -1)$.",
    textAr: "إذا كانت $f(x, y) = x^3 y^2 - 2x^2 y + 3x$، احسب القيمة العددية لـ $f_y(2, -1)$.",
    type: "numeric",
    correctAnswer: -24,
    tolerance: 0.001,
    source: "الكتاب - Example 29 (b) ص 63",
    explanation: "الحل: نشتق بالنسبة لـ $y$ مع تثبيت $x$: $f_y = 2x^3 y - 2x^2$. نعوض بالنقطة $(x=2, y=-1)$: $f_y(2, -1) = 2(2)^3(-1) - 2(2)^2 = 2(8)(-1) - 2(4) = -16 - 8 = -24$.",
    details: "$f_y = 2x^3 y - 2x^2 \\implies f_y(2,-1) = 2(8)(-1) - 2(4) = -16 - 8 = -24$."
  },
  {
    id: "calc_4",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "المشتقة الرابعة لدالة كثيرة حدود من الدرجة الثالثة",
    text: "Given $f(x) = 3 - x + 5x^2 - 7x^3$, find the fourth derivative $f^{(4)}(x)$.",
    textAr: "إذا كانت الدالة $f(x) = 3 - x + 5x^2 - 7x^3$، فما هي القيمة العددية للمشتقة الرابعة $f^{(4)}(x)$؟",
    type: "numeric",
    correctAnswer: 0,
    tolerance: 0.001,
    source: "الكتاب - Example 8 & Example 9 ص 12 و 13",
    explanation: "الحل: دالة من الدرجة الثالثة ($n=3$): المشتقة الأولى $f' = -1 + 10x - 21x^2$. المشتقة الثانية $f'' = 10 - 42x$. المشتقة الثالثة $f''' = -42$. المشتقة الرابعة $f^{(4)} = 0$. مشتقة أي كثيرة حدود من درجة أقل من رتبة الاشتقاق تساوي صفراً.",
    details: "$f'''(x) = -42 \\implies f^{(4)}(x) = 0$."
  },
  {
    id: "calc_5",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "حساب نهاية تتضمن كسر مثلثي بلوبيتال",
    text: "Find the limit: $\\lim_{x \\to (\\pi/2)^-} \\frac{4\\tan x}{1 + \\sec x}$",
    textAr: "احسب القيمة العددية للنهاية: $\\lim_{x \\to (\\pi/2)^-} \\frac{4\\tan x}{1 + \\sec x}$",
    type: "numeric",
    correctAnswer: 4,
    tolerance: 0.001,
    source: "الكتاب - Example 27 (v) ص 55 و ص 56",
    explanation: "الحل: التعويض يعطي $\\frac{\\infty}{\\infty}$. نشتق البسط والمقام بلوبيتال: مشتقة البسط $4\\sec^2 x$، ومشتقة المقام $\\sec x \\tan x$. نختصر $\\sec x$: يصبح التعبير $\\lim \\frac{4\\sec x}{\\tan x} = \\lim \\frac{4(1/\\cos x)}{\\sin x/\\cos x} = \\lim \\frac{4}{\\sin x}$. بالتعويض عند $\\pi/2$: $\\frac{4}{\\sin(\\pi/2)} = \\frac{4}{1} = 4$.",
    details: "$\\lim_{x \\to \\pi/2} \\frac{4\\sec^2 x}{\\sec x \\tan x} = \\lim_{x \\to \\pi/2} \\frac{4}{\\sin x} = \\frac{4}{1} = 4$."
  },
  {
    id: "calc_6",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "logic",
    topicName: "المنطق الرياضي وجداول الصواب ومجموعات الدوال",
    title: "حساب عدد عناصر المجموعة B",
    text: "If $A \\cup B = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$, $A \\cap B = \\{4, 5\\}$, and $A - B = \\{1, 2, 3\\}$, how many elements are in set $B$?",
    textAr: "إذا كانت $A \\cup B = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$ و $A \\cap B = \\{4, 5\\}$ و $A - B = \\{1, 2, 3\\}$، فما هو عدد عناصر المجموعة $B$؟",
    type: "numeric",
    correctAnswer: 5,
    tolerance: 0.001,
    source: "مذكرة الحلول اليدوية ص 5 (Q3)",
    explanation: "الحل: نعلم أن $A = (A - B) \\cup (A \\cap B) = \\{1, 2, 3\\} \\cup \\{4, 5\\} = \\{1, 2, 3, 4, 5\\}$. والاتحاد الكلي يتكون من عناصر $A$ بالإضافة إلى عناصر $B - A$. إذن $B - A = (A \\cup B) - A = \\{6, 7, 8\\}$. وتكون عناصر المجموعة $B = (A \\cap B) \\cup (B - A) = \\{4, 5, 6, 7, 8\\}$. عدد عناصر $B$ هو 5 عناصر.",
    details: "$B = \\{4, 5, 6, 7, 8\\} \\implies n(B) = 5$."
  },
  {
    id: "calc_7",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "قيمة الثابت c لتكون الدالة متصلة عند الصفر",
    text: "Find the value of $c$ that makes $f(x)$ continuous at $x = 0$, where $f(x) = \\frac{9x - 3\\sin x}{5x^3}$ for $x \\neq 0$ and $f(0) = c$.",
    textAr: "أوجد القيمة العددية للثابت $c$ التي تجعل الدالة متصلة عند $x = 0$، حيث $f(x) = \\frac{9x - 3\\sin x}{5x^3}$ عندما $x \\neq 0$ و $f(0) = c$.",
    type: "numeric",
    correctAnswer: 0.1,
    tolerance: 0.01,
    source: "الكتاب - Exercises CC ص 79",
    explanation: "الحل: لكي تكون الدالة متصلة عند $x=0$، يجب أن يكون $c = \\lim_{x \\to 0} \\frac{9x - 3\\sin x}{5x^3}$. بالتعويض $\\frac{0}{0}$. نطبق لوبيتال (1): $\\frac{9 - 3\\cos x}{15x^2}$. تعويض $\\frac{0}{0}$. لوبيتال (2): $\\frac{3\\sin x}{30x} = \\frac{3}{30}\\left(\\frac{\\sin x}{x}\\right) = \\frac{1}{10}(1) = 0.1$. إذن $c = 0.1$ أو $\\frac{1}{10}$.",
    details: "Applying L'Hôpital twice yields $\\frac{3}{30} = 0.1$."
  },
  {
    id: "calc_8",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "معدل تغير درجة الحرارة في اتجاه محور x",
    text: "The temperature of a plate is $T(x,y) = x^2 + y^2 + 2x + 4y$. Find the rate of change of $T$ at $(2, 1)$ in the direction of the x-axis.",
    textAr: "تتوزع درجة الحرارة على صفيحة بالمعادلة $T(x,y) = x^2 + y^2 + 2x + 4y$. احسب معدل تغير درجة الحرارة عند النقطة $(2, 1)$ في اتجاه محور $x$.",
    type: "numeric",
    correctAnswer: 6,
    tolerance: 0.001,
    source: "الكتاب - Exercises GG ص 81",
    explanation: "الحل: معدل التغير في اتجاه محور $x$ هو المشتقة الجزئية $T_x = \\frac{\\partial T}{\\partial x} = 2x + 2$. بالتعويض عند النقطة $(x=2, y=1)$: $T_x(2, 1) = 2(2) + 2 = 4 + 2 = 6$.",
    details: "$T_x = 2x + 2 \\implies T_x(2, 1) = 6$."
  },

  // ==========================================================================
  // SECTION 4: تصحيح أخطاء تفاعلية (INTERACTIVE FIX ENGINE)
  // ==========================================================================
  {
    id: "fix_1",
    category: "errors",
    categoryName: "تصحيح أخطاء التفاضل (Error Fix)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "خطأ إشارة في تفاضل الدوال الدائرية مقابل الزائدية",
    text: "A student attempted to differentiate $y = \\cosh(3x) + \\cos(3x)$. Find the bug in the steps below:",
    textAr: "قام طالب بحل مسألة تفاضل للدالة $y = \\cosh(3x) + \\cos(3x)$. حدد الخطوة التي تحتوي على الخطأ الرياضي:",
    type: "fix_step",
    steps: [
      { stepNum: 1, text: "تطبيق قاعدة الجمع: $\\frac{dy}{dx} = \\frac{d}{dx}(\\cosh 3x) + \\frac{d}{dx}(\\cos 3x)$." },
      { stepNum: 2, text: "مشتقة جيب التمام الزائدي بقاعدة السلسلة: $\\frac{d}{dx}(\\cosh 3x) = -3\\sinh(3x)$." },
      { stepNum: 3, text: "مشتقة جيب التمام الدائري بقاعدة السلسلة: $\\frac{d}{dx}(\\cos 3x) = -3\\sin(3x)$." },
      { stepNum: 4, text: "تجميع الناتج النهائي: $\\frac{dy}{dx} = -3\\sinh(3x) - 3\\sin(3x)$." }
    ],
    bugStep: 2,
    correctExplanation: "الخطوة رقم 2 خاطئة تماماً! مشتقة $\\cosh(u)$ هي $+\\sinh(u) \\cdot u'$ بإشارة موجبة، وليست سالبة مثل الدوال الدائرية. إذن المشتقة الصحيحة هي: $+3\\sinh(3x)$. الناتج النهائي الصحيح هو: $\\frac{dy}{dx} = 3\\sinh(3x) - 3\\sin(3x)$.",
    details: "$\\frac{d}{dx}\\cosh(3x) = +3\\sinh(3x)$ (positive sign)."
  },
  {
    id: "fix_2",
    category: "errors",
    categoryName: "تصحيح أخطاء التفاضل (Error Fix)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "خطأ في مشتقة الزاوية بدالة arctan مع قاعدة السلسلة",
    text: "A student attempted to find the derivative of $f(x) = \\tan^{-1}(5x^2)$. Spot the error:",
    textAr: "أراد طالب إيجاد مشتقة الدالة $f(x) = \\tan^{-1}(5x^2)$. اكتشف الخطوة التي وقع فيها الخطأ:",
    type: "fix_step",
    steps: [
      { stepNum: 1, text: "تحديد الدالة الداخلية $u(x) = 5x^2$ وحساب مشتقتها: $u'(x) = 10x$." },
      { stepNum: 2, text: "تطبيق قاعدة مشتقة دالة الظل العكسية: $f'(x) = \\frac{u'(x)}{1 + u^2}$." },
      { stepNum: 3, text: "تربيع الدالة الداخلية في المقام: $1 + (5x^2)^2 = 1 + 5x^4$." },
      { stepNum: 4, text: "التعويض النهائي: $f'(x) = \\frac{10x}{1 + 5x^4}$." }
    ],
    bugStep: 3,
    correctExplanation: "الخطوة رقم 3 خاطئة! عند تربيع المقدار $(5x^2)^2$، يجب تربيع المعامل العددي أيضاً: $5^2 \\cdot (x^2)^2 = 25x^4$ وليس $5x^4$. وبالتالي المشتقة الصحيحة هي: $f'(x) = \\frac{10x}{1 + 25x^4}$.",
    details: "$(5x^2)^2 = 25x^4$, so the denominator must be $1 + 25x^4$."
  },
  {
    id: "fix_3",
    category: "errors",
    categoryName: "تصحيح أخطاء التفاضل (Error Fix)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "خطأ في تطبيق قاعدة مشتقة الكسر داخل لوبيتال",
    text: "Finding $\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$. Spot where the rule was misapplied:",
    textAr: "قام طالب بحساب النهاية $\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}$ باستخدام قاعدة لوبيتال. حدد الخطأ:",
    type: "fix_step",
    steps: [
      { stepNum: 1, text: "التحقق من التعويض المباشر: $\\frac{\\sin 0 - 0}{0^3} = \\frac{0}{0}$ (صيغة غير معينة تسمح بلوبيتال)." },
      { stepNum: 2, text: "تطبيق قاعدة لوبيتال باشتقاق البسط منفرداً والمقام منفرداً: $\\lim_{x \\to 0} \\frac{\\cos x - 1}{3x^2}$." },
      { stepNum: 3, text: "تطبيق قاعدة قسمة دالتين: مشتقة الكسر تساوي $\\frac{3x^2(-\\sin x) - (\\cos x - 1)(6x)}{(3x^2)^2}$." },
      { stepNum: 4, text: "الاستنتاج أن النهاية تساوي غير معرفة." }
    ],
    bugStep: 3,
    correctExplanation: "الخطوة رقم 3 خاطئة تماماً! قاعدة لوبيتال لا تستخدم قاعدة قسمة دالتين (Quotient Rule). بل نشتق البسط بمفرده مجدداً (مشتقة $\\cos x - 1$ هي $-\\sin x$) ونشتق المقام بمفرده مجدداً (مشتقة $3x^2$ هي $6x$). فنحصل على $\\lim_{x \\to 0} \\frac{-\\sin x}{6x} = -\\frac{1}{6}$.",
    details: "In L'Hôpital's rule, you differentiate numerator and denominator SEPARATELY: $\\frac{f''(x)}{g''(x)}$, never using quotient rule."
  },
  {
    id: "fix_4",
    category: "errors",
    categoryName: "تصحيح أخطاء التفاضل (Error Fix)",
    topic: "implicit",
    topicName: "الاشتقاق الضمني واللوغاريتمي",
    title: "نسيان قاعدة السلسلة y' أثناء الاشتقاق الضمني",
    text: "Differentiating $x^2 + y^2 = 25$ implicitly. Find the mistake:",
    textAr: "أراد طالب إيجاد $y'$ للمعادلة $x^2 + y^2 = 25$ ضمنياً. حدد خطوته الخاطئة:",
    type: "fix_step",
    steps: [
      { stepNum: 1, text: "اشتقاق الطرف الأيسر بالنسبة لـ $x$: مشتقة $x^2$ هي $2x$." },
      { stepNum: 2, text: "مشتقة $y^2$ بالنسبة لـ $x$ هي $2y$ مباشرة." },
      { stepNum: 3, text: "مشتقة الطرف الأيمن (الثابت 25) هي 0." },
      { stepNum: 4, text: "حل المعادلة $2x + 2y = 0 \\implies y = -x$ كحل للمشتقة." }
    ],
    bugStep: 2,
    correctExplanation: "الخطوة رقم 2 هي الخطأ الكلاسيكي القاتل في الاشتقاق الضمني! نظراً لأن $y$ دالة في $x$، فإن مشتقة $y^2$ بالنسبة لـ $x$ تتطلب قاعدة السلسلة وتساوي $2y \\cdot y'$ (أو $2y \\frac{dy}{dx}$). والمعادلة الصحيحة هي: $2x + 2y y' = 0 \\implies y' = -\\frac{x}{y}$.",
    details: "$\\frac{d}{dx}(y^2) = 2y y'$, never just $2y$."
  },
  {
    id: "fix_5",
    category: "errors",
    categoryName: "تصحيح أخطاء التفاضل (Error Fix)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "خطأ نسيان مشتقة الدالة الداخلية في قاعدة السلسلة",
    text: "Differentiating $f(x) = (x^5 - 4x + 8)^7$. Find the bug:",
    textAr: "اشتقاق الدالة $f(x) = (x^5 - 4x + 8)^7$. اكتشف الخطأ في الخطوات:",
    type: "fix_step",
    steps: [
      { stepNum: 1, text: "تطبيق قاعدة القوة بإنزال الأس وطرح 1: $7(x^5 - 4x + 8)^6$." },
      { stepNum: 2, text: "اشتقاق ما بداخل القوس: $\\frac{d}{dx}(x^5 - 4x + 8) = 5x^4 - 4$." },
      { stepNum: 3, text: "الاستنتاج أن المشتقة هي فقط مشتقة القوس الخارجي: $f'(x) = 7(x^5 - 4x + 8)^6$." },
      { stepNum: 4, text: "إنهاء الحل دون الضرب في القوس الداخلي." }
    ],
    bugStep: 3,
    correctExplanation: "الخطوة رقم 3 خاطئة! بموجب قاعدة السلسلة (Chain Rule)، يجب ضرب مشتقة القوس الخارجي في مشتقة الدالة الداخلية $u'(x) = (5x^4 - 4)$. الحل الصحيح هو: $f'(x) = 7(x^5 - 4x + 8)^6 \\cdot (5x^4 - 4)$.",
    details: "Chain rule requires multiplying by the derivative of the inner function."
  },

  // ==========================================================================
  // SECTION 5: أسئلة مقالية وإثباتات (ESSAY & PROOFS WITH MODEL SOLUTIONS)
  // ==========================================================================
  {
    id: "essay_1",
    category: "essay",
    categoryName: "أسئلة مقالية وإثباتات (Essay / Proofs)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "إثبات مشتقة دالة الظل العكسية بالاشتقاق الضمني والمثلث",
    text: "Prove from first principles using implicit differentiation and a reference triangle that $\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1 + x^2}$.",
    textAr: "أثبت باستخدام الاشتقاق الضمني ومثلث الإسناد أن: $\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1 + x^2}$.",
    type: "essay",
    source: "الكتاب - Example 16 (ii) ص 30 و ص 31",
    modelSolution: `**خطوات الإثبات النموذجية (من الكتاب ص 30-31):**
1. **فرض العلاقة العكسية:**
   نضع $y = \\tan^{-1} x \\iff x = \\tan y$، حيث زاوية المعكوس تقع في الفترة المفتوحة $y \\in ]-\\pi/2, \\pi/2[$.

2. **الاشتقاق الضمني للطرفين بالنسبة لـ $x$:**
   $$\\frac{d}{dx}(x) = \\frac{d}{dx}(\\tan y)$$
   $$1 = \\sec^2 y \\cdot \\frac{dy}{dx}$$

3. **عزل المشتقة $\\frac{dy}{dx}$:**
   $$\\frac{dy}{dx} = \\frac{1}{\\sec^2 y}$$

4. **الربط بالمتغير $x$ باستخدام متطابقة فيثاغورس أو مثلث الإسناد:**
   نعلم المتطابقة المثلثية: $\\sec^2 y = 1 + \\tan^2 y$.
   وبما أن $\\tan y = x$، إذن:
   $$\\sec^2 y = 1 + x^2$$

5. **الاستنتاج النهائي:**
   $$\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1 + x^2} \\quad \\text{وهو المطلوب إثباته.}$$`,
    details: "Essential proof required in Chapter 1 final exams."
  },
  {
    id: "essay_2",
    category: "essay",
    categoryName: "أسئلة مقالية وإثباتات (Essay / Proofs)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "إثبات الصيغة اللوغاريتمية لدالة sinh⁻¹ x",
    text: "Show algebraically using the definition of hyperbolic sine that $\\sinh^{-1} x = \\ln\\left(x + \\sqrt{x^2 + 1}\\right)$ for all $x \\in \\mathbb{R}$.",
    textAr: "أثبت جبرياً باستخدام تعريف الدالة الزائدية أن: $\\sinh^{-1} x = \\ln\\left(x + \\sqrt{x^2 + 1}\\right)$ لجميع الأعداد الحقيقية.",
    type: "essay",
    source: "الكتاب - Example 22 (i) ص 46",
    modelSolution: `**خطوات الحل النموذجية (من الكتاب ص 46):**
1. **الفرض:** نضع $y = \\sinh^{-1} x \\implies \\sinh y = x$.
2. **التعويض بالصيغة الأسية:**
   $$\\frac{e^y - e^{-y}}{2} = x \\implies e^y - e^{-y} = 2x$$
3. **الضرب في $2e^y$ والترتيب كمعادلة تربيعية:**
   $$(e^y)^2 - 2x(e^y) - 1 = 0$$
4. **تطبيق القانون العام لحل المعادلة التربيعية ($z = e^y$):**
   $$e^y = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{2x \\pm \\sqrt{4x^2 + 4}}{2} = x \\pm \\sqrt{x^2 + 1}$$
5. **استبعاد الجذر السالب:**
   بما أن $e^y > 0$ دائماً لأي قيمة لـ $y$، وحيث أن $x - \\sqrt{x^2+1} < 0$ (لأن $\\sqrt{x^2+1} > |x|$):
   $$e^y = x + \\sqrt{x^2 + 1}$$
6. **أخذ اللوغاريتم الطبيعي للطرفين:**
   $$y = \\ln\\left(x + \\sqrt{x^2 + 1}\\right) \\implies \\sinh^{-1} x = \\ln\\left(x + \\sqrt{x^2 + 1}\\right) \\quad \\text{Q.E.D.}$$`,
    details: "Quadratic in $e^y$ derivation."
  },
  {
    id: "essay_3",
    category: "essay",
    categoryName: "أسئلة مقالية وإثباتات (Essay / Proofs)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "إثبات أن دالة الجهد التوافقي تحقق معادلة لابلاس",
    text: "Prove that $f(x, y) = \\ln\\sqrt{x^2 + y^2}$ is a harmonic function (satisfies $f_{xx} + f_{yy} = 0$).",
    textAr: "أثبت أن الدالة $f(x, y) = \\ln\\sqrt{x^2 + y^2}$ هي دالة توافقية (Harmonic)، أي تحقق معادلة لابلاس $f_{xx} + f_{yy} = 0$.",
    type: "essay",
    source: "الكتاب - Example 32 ص 65",
    modelSolution: `**خطوات الإثبات النموذجية (من الكتاب ص 65):**
1. **تبسيط الدالة باستخدام خواص اللوغاريتمات:**
   $$f(x, y) = \\ln(x^2 + y^2)^{1/2} = \\frac{1}{2}\\ln(x^2 + y^2)$$

2. **المشتقة الجزئية الأولى والثانية بالنسبة لـ $x$:**
   $$f_x = \\frac{1}{2} \\cdot \\frac{2x}{x^2 + y^2} = \\frac{x}{x^2 + y^2}$$
   بتطبيق قاعدة مشتقة خارج القسمة:
   $$f_{xx} = \\frac{(x^2 + y^2)(1) - x(2x)}{(x^2 + y^2)^2} = \\frac{y^2 - x^2}{(x^2 + y^2)^2}$$

3. **المشتقة الجزئية الأولى والثانية بالنسبة لـ $y$ بالتماثل:**
   $$f_y = \\frac{y}{x^2 + y^2}$$
   $$f_{yy} = \\frac{(x^2 + y^2)(1) - y(2y)}{(x^2 + y^2)^2} = \\frac{x^2 - y^2}{(x^2 + y^2)^2}$$

4. **الجمع لإثبات معادلة لابلاس:**
   $$f_{xx} + f_{yy} = \\frac{y^2 - x^2}{(x^2 + y^2)^2} + \\frac{x^2 - y^2}{(x^2 + y^2)^2} = \\frac{(y^2 - x^2) + (x^2 - y^2)}{(x^2 + y^2)^2} = \\frac{0}{(x^2 + y^2)^2} = 0$$
   إذن الدالة توافقية (Harmonic Function).`,
    details: "Laplace Equation in Cartesian 2D."
  },
  {
    id: "essay_4",
    category: "essay",
    categoryName: "أسئلة مقالية وإثباتات (Essay / Proofs)",
    topic: "logic",
    topicName: "المنطق الرياضي وجداول الصواب ومجموعات الدوال",
    title: "إيجاد الدالة العكسية جبرياً والتحقق من صحتها",
    text: "Find the formula for $f^{-1}(x)$ given $f(x) = e^{2x+1}$, and check that $f(f^{-1}(x)) = x$ and $f^{-1}(f(x)) = x$.",
    textAr: "أوجد صيغة الدالة العكسية $f^{-1}(x)$ للدالة $f(x) = e^{2x+1}$، ثم تحقق من صحة الحل بحساب $f(f^{-1}(x))$ و $f^{-1}(f(x))$.",
    type: "essay",
    source: "مذكرة الحلول اليدوية ص 6 (Question 4)",
    modelSolution: `**خطوات الحل والتحقق (من مذكرة الحلول اليدوية ص 6):**
1. **إيجاد الدالة العكسية:**
   نضع $y = e^{2x+1}$.
   نأخذ اللوغاريتم الطبيعي للطرفين:
   $$\\ln y = 2x + 1 \\implies 2x = \\ln y - 1 \\implies x = \\frac{\\ln y - 1}{2}$$
   بتبديل المتغيرين $x$ و $y$:
   $$f^{-1}(x) = \\frac{\\ln x - 1}{2} \\quad \\text{حيث } x > 0$$

2. **التحقق الأول $f(f^{-1}(x))$:**
   $$f(f^{-1}(x)) = e^{2\\left(\\frac{\\ln x - 1}{2}\\right) + 1} = e^{(\\ln x - 1) + 1} = e^{\\ln x} = x \\quad \\checkmark$$

3. **التحقق الثاني $f^{-1}(f(x))$:**
   $$f^{-1}(f(x)) = \\frac{\\ln(e^{2x+1}) - 1}{2} = \\frac{(2x + 1) - 1}{2} = \\frac{2x}{2} = x \\quad \\checkmark$$`,
    details: "Full verification of inverse."
  },
  {
    id: "essay_5",
    category: "essay",
    categoryName: "أسئلة مقالية وإثباتات (Essay / Proofs)",
    topic: "partial",
    topicName: "المشتقات الجزئية والدوال التوافقية",
    title: "إثبات علاقة المشتقات الجزئية لدالة متجانسة (Euler Identity)",
    text: "If $f(x, y) = x^3 + 6xy^2 - 2y^3$, prove that $x f_x + y f_y = 3f$.",
    textAr: "إذا كانت الدالة $f(x, y) = x^3 + 6xy^2 - 2y^3$، أثبت أن: $x f_x + y f_y = 3f$.",
    type: "essay",
    source: "الكتاب - Example 34 (i) ص 67",
    modelSolution: `**خطوات الإثبات النموذجية (من الكتاب ص 67):**
1. **حساب المشتقة الجزئية الأولى $f_x$:**
   $$f_x = \\frac{\\partial}{\\partial x}(x^3 + 6xy^2 - 2y^3) = 3x^2 + 6y^2$$
   نضربها في $x$:
   $$x f_x = 3x^3 + 6xy^2$$

2. **حساب المشتقة الجزئية الأولى $f_y$:**
   $$f_y = \\frac{\\partial}{\\partial y}(x^3 + 6xy^2 - 2y^3) = 12xy - 6y^2$$
   نضربها في $y$:
   $$y f_y = 12xy^2 - 6y^3$$

3. **جمع الطرفين $x f_x + y f_y$:**
   $$x f_x + y f_y = (3x^3 + 6xy^2) + (12xy^2 - 6y^3) = 3x^3 + 18xy^2 - 6y^3$$

4. **أخذ العامل المشترك (3):**
   $$x f_x + y f_y = 3(x^3 + 6xy^2 - 2y^3) = 3f(x, y) \\quad \\text{Q.E.D.}$$`,
    details: "Homogeneous polynomial degree 3 satisfies Euler's theorem."
  },
  {
    id: "tf_19",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "مشتقة دالة جيب التمام الزائدي العكسية cosh⁻¹ x",
    text: "For $x > 1$, the derivative of $\\cosh^{-1} x$ is $\\frac{1}{\\sqrt{x^2 - 1}}$.",
    textAr: "لكل $x > 1$، مشتقة دالة جيب التمام الزائدي العكسية هي: $\\frac{d}{dx}(\\cosh^{-1} x) = \\frac{1}{\\sqrt{x^2 - 1}}$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Rules 1.10 (2) ص 47 و Example 23 ص 48",
    explanation: "صحيح (True). مشتقة $\\cosh^{-1} x$ هي $\\frac{1}{\\sqrt{x^2 - 1}}$ بشرط $x > 1$. بينما مشتقة $\\sinh^{-1} x$ هي $\\frac{1}{\\sqrt{1 + x^2}}$ لجميع الأعداد الحقيقية.",
    details: "$\\frac{d}{dx}\\cosh^{-1} x = \\frac{1}{\\sqrt{x^2-1}}$ for $x > 1$."
  },
  {
    id: "tf_20",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "تقليص مجال دالة الجيب لتصبح أحادية (One-to-One)",
    text: "The sine function is not one-to-one on $\\mathbb{R}$, but becomes one-to-one when restricted to $[-\\pi/2, \\pi/2]$.",
    textAr: "دالة الجيب $\\sin x$ ليست أحادية على $\\mathbb{R}$، ولكنها تصبح أحادية (One-to-one) عند تقليص مجالها إلى $[-\\pi/2, \\pi/2]$.",
    type: "boolean",
    correctAnswer: true,
    source: "الكتاب - Fig 1.2 ص 18 و ص 19",
    explanation: "صحيح (True). بما أن الدوال الدائرية دورية (Periodic)، فإنها لا تمتلك معكوساً على مجالها الكلي. ويتم تقليص مجال الجيب إلى $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ ليصبح المنحنى متزايداً وأحادياً، مما يسمح بتعريف الدالة العكسية $\\sin^{-1} x$.",
    details: "Restricting the domain to $[-\\pi/2, \\pi/2]$ enables the inverse sine function."
  },
  {
    id: "mcq_16",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "تفاضل دالة الجيب العكسية لدالة أسية sin⁻¹(eˣ)",
    text: "Find the derivative of $y = \\sin^{-1}(e^x)$:",
    textAr: "أوجد مشتقة الدالة المركبة: $y = \\sin^{-1}(e^x)$:",
    type: "mcq",
    options: [
      "\\frac{e^x}{\\sqrt{1 - e^{2x}}}",
      "\\frac{1}{\\sqrt{1 - e^{2x}}}",
      "\\frac{e^x}{1 + e^{2x}}",
      "\\frac{-e^x}{\\sqrt{1 - e^{2x}}}"
    ],
    correctAnswer: 0,
    source: "مذكرة الحلول اليدوية ص 1 و ص 2",
    explanation: "الحل: نطبق قاعدة السلسلة لمشتقة دالة الجيب العكسية $\\frac{d}{dx}[\\sin^{-1} u] = \\frac{u'}{\\sqrt{1 - u^2}}$. هنا $u = e^x$ ومشتقتها $u' = e^x$ وتربيعها $u^2 = (e^x)^2 = e^{2x}$. إذن المشتقة: $\\frac{e^x}{\\sqrt{1 - e^{2x}}}$.",
    details: "$\\frac{d}{dx}\\sin^{-1}(e^x) = \\frac{e^x}{\\sqrt{1 - e^{2x}}}$."
  },
  {
    id: "mcq_17",
    category: "mcq",
    categoryName: "اختيار من متعدد (MCQ)",
    topic: "logic",
    topicName: "المنطق الرياضي ومجموعات الدوال",
    title: "صيغة تركيب الدالتين (f ∘ g)(x)",
    text: "If $f(x) = \\sqrt{x^3 + 4}$ and $g(x) = x^2 + 2$, what is $(f \\circ g)(x)$?",
    textAr: "إذا كانت $f(x) = \\sqrt{x^3 + 4}$ و $g(x) = x^2 + 2$، فما هي صيغة الدالة المركبة $(f \\circ g)(x)$؟",
    type: "mcq",
    options: [
      "\\sqrt{(x^2 + 2)^3 + 4}",
      "x^3 + 6",
      "\\sqrt{x^6 + 4}",
      "(x^3 + 4)^2 + 2"
    ],
    correctAnswer: 0,
    source: "امتحان الميدتيرم الرسمي GEN002 - Question 4",
    explanation: "الحل: تركيب الدالة $(f \\circ g)(x) = f(g(x))$. نعوض بالدالة $g(x) = x^2 + 2$ في كل $x$ داخل الدالة $f$: $f(x^2 + 2) = \\sqrt{(x^2 + 2)^3 + 4}$. وبما أن المقدار $(x^2+2)^3 + 4 > 0$ دائماً لجميع قيم $x$ الحقيقية، فإن مجال هذه الدالة المركبة هو $\\mathbb{R}$ بالكامل.",
    details: "$(f \\circ g)(x) = \\sqrt{(x^2+2)^3+4}$ with domain $\\mathbb{R}$."
  },
  {
    id: "calc_9",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "rules",
    topicName: "أساسيات وقواعد التفاضل",
    title: "حساب المشتقة الأولى لدالة مكعبة بقاعدة السلسلة",
    text: "Given $g(x) = (3x^2 + 5x - 7)^3$, evaluate $g'(1)$.",
    textAr: "إذا كانت $g(x) = (3x^2 + 5x - 7)^3$، احسب القيمة العددية لـ $g'(1)$.",
    type: "numeric",
    correctAnswer: 33,
    tolerance: 0.001,
    source: "الكتاب - Exercises (1) I (2) ص 71",
    explanation: "الحل: نشتق بقاعدة السلسلة: $g'(x) = 3(3x^2 + 5x - 7)^2 \\cdot (6x + 5)$. نعوض عند $x = 1$: ما بداخل القوس الأول: $3(1)^2 + 5(1) - 7 = 3 + 5 - 7 = 1$. المشتقة الداخلية: $6(1) + 5 = 11$. إذن: $g'(1) = 3(1)^2 \\cdot (11) = 3 \\cdot 1 \\cdot 11 = 33$.",
    details: "$g'(x) = 3(3x^2+5x-7)^2(6x+5) \\implies g'(1) = 3(1)^2(11) = 33$."
  },
  {
    id: "calc_10",
    category: "calc",
    categoryName: "حساب نواتج (Calculation)",
    topic: "limits",
    topicName: "النهايات وقاعدة لوبيتال",
    title: "نهاية كسر مربع الجيب عند الصفر",
    text: "Calculate the exact limit: $\\lim_{x \\to 0} \\frac{\\sin(x^2)}{\\sin^2(x)}$",
    textAr: "احسب القيمة العددية للنهاية: $\\lim_{x \\to 0} \\frac{\\sin(x^2)}{\\sin^2(x)}$",
    type: "numeric",
    correctAnswer: 1,
    tolerance: 0.001,
    source: "الكتاب - Exercises (1) BB (7) ص 76",
    explanation: "الحل: بقسمة البسط والمقام على $x^2$: $\\lim_{x \\to 0} \\frac{\\frac{\\sin(x^2)}{x^2}}{\\left(\\frac{\\sin x}{x}\\right)^2} = \\frac{1}{(1)^2} = 1$. أو بتطبيق قاعدة لوبيتال: مشتقة البسط $2x\\cos(x^2)$، ومشتقة المقام $2\\sin x \\cos x = \\sin 2x$. بالتعويض $\\frac{0}{0}$. لوبيتال مرة ثانية: مشتقة البسط عند الصفر $2(1) - 0 = 2$، ومشتقة المقام $2\\cos 2x = 2$. الناتج: $\\frac{2}{2} = 1$.",
    details: "$\\lim_{x \\to 0} \\frac{\\sin(x^2)}{\\sin^2 x} = 1$."
  },
  {
    id: "fix_6",
    category: "errors",
    categoryName: "تصحيح أخطاء التفاضل (Error Fix)",
    topic: "trig",
    topicName: "الدوال المثلثية وعكوسها",
    title: "نسيان إشارة السالب في مشتقة دالة ظل التمام العكسية",
    text: "Differentiating $f(x) = x \\cdot \\cot^{-1} x$. Spot the error:",
    textAr: "قام طالب باشتقاق الدالة $f(x) = x \\cdot \\cot^{-1} x$. حدد الخطوة التي حدث بها الخطأ:",
    type: "fix_step",
    steps: [
      { stepNum: 1, text: "تطبيق قاعدة حاصل ضرب دالتين: $f'(x) = (1)\\cdot\\cot^{-1} x + x \\cdot \\frac{d}{dx}(\\cot^{-1} x)$." },
      { stepNum: 2, text: "مشتقة دالة ظل التمام العكسية: $\\frac{d}{dx}(\\cot^{-1} x) = +\\frac{1}{1 + x^2}$." },
      { stepNum: 3, text: "التعويض في قاعدة الضرب: $f'(x) = \\cot^{-1} x + \\frac{x}{1 + x^2}$." },
      { stepNum: 4, text: "الاستنتاج أن المشتقة موجبة في جميع حدودها." }
    ],
    bugStep: 2,
    correctExplanation: "الخطوة رقم 2 خاطئة! جميع مشتقات الدوال المثلثية العكسية التي تبدأ بحرف 'c' (وهي $\\cos^{-1}, \\cot^{-1}, \\csc^{-1}$) تكون مشتقاتها سالبة! إذن مشتقة $\\cot^{-1} x$ هي $-\\frac{1}{1 + x^2}$. والمشتقة الصحيحة هي: $f'(x) = \\cot^{-1} x - \\frac{x}{1 + x^2}$.",
    details: "$\\frac{d}{dx}\\cot^{-1} x = -\\frac{1}{1+x^2}$ (negative sign required)."
  },
  {
    id: "essay_6",
    category: "essay",
    categoryName: "أسئلة مقالية وإثباتات (Essay / Proofs)",
    topic: "hyperbolic",
    topicName: "الدوال الزائدية وعكوسها",
    title: "إثبات مشتقة دالة جيب التمام الزائدي باستخدام تعريف المشتقة بالنهاية",
    text: "Use the limit definition of the derivative to prove that $\\frac{d}{dx}(\\cosh x) = \\sinh x$.",
    textAr: "أثبت باستخدام تعريف المشتقة بالنهاية أن: $\\frac{d}{dx}(\\cosh x) = \\sinh x$.",
    type: "essay",
    source: "الكتاب - Example 20 ص 38 و ص 39",
    modelSolution: `**خطوات الإثبات النموذجية بالتعريف (من الكتاب ص 38-39):**
1. **صيغة تعريف المشتقة:**
   $$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} = \\lim_{h \\to 0} \\frac{\\cosh(x + h) - \\cosh x}{h}$$

2. **تطبيق متطابقة مجموع زاويتين لـ $\\cosh(x + h)$:**
   نعلم أن $\\cosh(x + h) = \\cosh x \\cosh h + \\sinh x \\sinh h$.
   بالتعويض في الكسر:
   $$f'(x) = \\lim_{h \\to 0} \\frac{\\cosh x \\cosh h + \\sinh x \\sinh h - \\cosh x}{h}$$

3. **إعادة ترتيب الحدود وتوزيع النهاية:**
   $$f'(x) = \\lim_{h \\to 0} \\frac{\\cosh x (\\cosh h - 1)}{h} + \\lim_{h \\to 0} \\frac{\\sinh x \\sinh h}{h}$$
   $$f'(x) = \\cosh x \\cdot \\left(\\lim_{h \\to 0} \\frac{\\cosh h - 1}{h}\\right) + \\sinh x \\cdot \\left(\\lim_{h \\to 0} \\frac{\\sinh h}{h}\\right)$$

4. **حساب نهايات الدوال الزائدية المعيارية عند الصفر:**
   - $\\lim_{h \\to 0} \\frac{\\cosh h - 1}{h} = 0$ (بلوبيتال: $\\lim \\frac{\\sinh h}{1} = 0$).
   - $\\lim_{h \\to 0} \\frac{\\sinh h}{h} = 1$ (بلوبيتال: $\\lim \\frac{\\cosh h}{1} = 1$).

5. **التعويض النهائي:**
   $$f'(x) = \\cosh x \\cdot (0) + \\sinh x \\cdot (1) = \\sinh x \\quad \\text{Q.E.D.}$$`,
    details: "First-principles proof for hyperbolic cosine derivative."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questionsData };
}
