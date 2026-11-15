const courses = [
  {
    name: "HTML",
    icon: "🌐",
    description: "تعلم بناء صفحات ومواقع الويب.",
    lessons: [
      {
        title: "الدرس الأول: مقدمة HTML",
        explanation: "HTML هي اللغة المستخدمة لبناء هيكل صفحات الويب. نكتب العناصر داخل وسوم، ولكل عنصر وظيفة.",
        code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Website</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>',
        questions: [
          ["ما وظيفة HTML؟", ["تصميم الألوان", "بناء هيكل الصفحة", "إدارة الخادم"], 1],
          ["ما الوسم الرئيسي للصفحة؟", ["<html>", "<img>", "<br>"], 0],
          ["أين نضع محتوى الصفحة الظاهر؟", ["<head>", "<body>", "<title>"], 1],
          ["ما معنى HTML؟", ["HyperText Markup Language", "High Text Main Language", "Home Tool Markup Link"], 0],
          ["ما الوسم المستخدم لعنوان الصفحة في المتصفح؟", ["<title>", "<p>", "<div>"], 0]
        ]
      },
      {
        title: "الدرس الثاني: العناوين والفقرات",
        explanation: "نستخدم h1 إلى h6 للعناوين، ونستخدم p لكتابة الفقرات. h1 هو العنوان الأكبر عادةً.",
        code: '<h1>عنوان رئيسي</h1>\n<h2>عنوان فرعي</h2>\n<p>هذه فقرة نصية.</p>',
        questions: [
          ["ما الوسم المستخدم للفقرة؟", ["<h1>", "<p>", "<img>"], 1],
          ["ما أكبر عنوان افتراضيًا؟", ["<h6>", "<h3>", "<h1>"], 2],
          ["كم مستوى للعناوين في HTML؟", ["3", "6", "10"], 1],
          ["هل نحتاج وسم إغلاق للفقرة؟", ["نعم", "لا", "فقط في CSS"], 0],
          ["أي وسم يمثل عنوانًا فرعيًا؟", ["<h2>", "<body>", "<br>"], 0]
        ]
      },
      {
        title: "الدرس الثالث: الروابط والصور",
        explanation: "نستخدم a لإنشاء الروابط وimg لعرض الصور. الخاصية href تحدد وجهة الرابط وsrc تحدد مصدر الصورة.",
        code: '<a href="https://example.com">زيارة الموقع</a>\n\n<img src="photo.jpg" alt="وصف الصورة">',
        questions: [
          ["ما الوسم المستخدم لإنشاء رابط؟", ["<a>", "<p>", "<h1>"], 0],
          ["ما الخاصية التي تحدد وجهة الرابط؟", ["src", "href", "alt"], 1],
          ["ما الوسم المستخدم للصور؟", ["<picture-text>", "<img>", "<image-link>"], 1],
          ["ما وظيفة alt؟", ["وصف الصورة", "تغيير لونها", "تكبيرها"], 0],
          ["هل img يحتاج وسم إغلاق؟", ["لا، ليس بالشكل المعتاد", "نعم دائمًا", "يحتاج وسم p"], 0]
        ]
      }
    ]
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "تعلم تنسيق وتصميم صفحات الويب.",
    lessons: [
      {
        title: "الدرس الأول: مقدمة CSS",
        explanation: "CSS مسؤولة عن مظهر الصفحة، مثل الألوان والخطوط والمسافات. نحدد العنصر ثم نكتب خصائصه بين الأقواس.",
        code: 'p {\n  color: purple;\n  font-size: 20px;\n}',
        questions: [
          ["ما وظيفة CSS؟", ["بناء الهيكل", "تنسيق الصفحة", "إدارة قواعد البيانات"], 1],
          ["كيف نكتب تعليقًا في CSS؟", ["// تعليق", "/* تعليق */", "<!-- تعليق -->"], 1],
          ["ما الخاصية المسؤولة عن لون النص؟", ["color", "width", "margin"], 0],
          ["ما الرمز المستخدم لبدء القاعدة؟", ["{", "(", "["], 0],
          ["أين نربط ملف CSS خارجي؟", ["داخل head", "داخل footer فقط", "داخل h1"], 0]
        ]
      },
      {
        title: "الدرس الثاني: الألوان والخطوط",
        explanation: "يمكن تغيير لون النص باستخدام color، ولون الخلفية باستخدام background-color، وحجم الخط باستخدام font-size.",
        code: 'body {\n  background-color: #080816;\n  color: white;\n  font-size: 18px;\n}',
        questions: [
          ["ما الخاصية التي تغير الخلفية؟", ["color", "background-color", "font-size"], 1],
          ["ما الخاصية التي تغير حجم الخط؟", ["font-size", "border", "padding"], 0],
          ["ما معنى #ffffff في CSS؟", ["لون أبيض", "لون أسود", "لون أحمر"], 0],
          ["ما الخاصية التي تجعل الخط عريضًا؟", ["font-weight", "margin", "height"], 0],
          ["ما وحدة قياس شائعة لحجم الخط؟", ["px", "kg", "km"], 0]
        ]
      },
      {
        title: "الدرس الثالث: Flexbox",
        explanation: "Flexbox يساعدنا على ترتيب العناصر داخل الحاوية. نستخدم display:flex ثم نتحكم في الاتجاه والمحاذاة والمسافات.",
        code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}',
        questions: [
          ["كيف نفعل Flexbox؟", ["display: grid", "display: flex", "position: flex"], 1],
          ["ما وظيفة justify-content؟", ["محاذاة العناصر على المحور الرئيسي", "تغيير الخط", "إضافة صورة"], 0],
          ["ما وظيفة gap؟", ["إضافة مسافة بين العناصر", "تغيير لون النص", "إخفاء العنصر"], 0],
          ["ما الخاصية التي تتحكم في المحور العرضي؟", ["align-items", "font-size", "border"], 0],
          ["ما القيمة التي ترتب العناصر عموديًا؟", ["row", "column", "center"], 1]
        ]
      }
    ]
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "تعلم إضافة التفاعل والوظائف للمواقع.",
    lessons: [
      {
        title: "الدرس الأول: مقدمة JavaScript",
        explanation: "JavaScript لغة برمجة تضيف التفاعل إلى صفحات الويب، مثل الاستجابة للضغط على الأزرار وتغيير المحتوى.",
        code: 'console.log("Hello World");\nalert("Welcome!");',
        questions: [
          ["ما وظيفة JavaScript في المواقع؟", ["إضافة التفاعل", "كتابة الصور", "تغيير اسم الملف"], 0],
          ["كيف نطبع رسالة في Console؟", ["print()", "console.log()", "show()"], 1],
          ["أي كلمة تستخدم لتعريف متغير قابل للتغيير؟", ["let", "img", "style"], 0],
          ["ما الرمز المستخدم غالبًا لإنهاء التعليمة؟", [";", "#", "@"], 0],
          ["هل JavaScript هي نفسها Java؟", ["نعم تمامًا", "لا، لغتان مختلفتان", "هي CSS"], 1]
        ]
      },
      {
        title: "الدرس الثاني: المتغيرات",
        explanation: "المتغير مكان نخزن فيه قيمة. نستخدم let للقيم التي يمكن تغييرها وconst للقيم التي لا نعيد إسنادها.",
        code: 'let name = "Adam";\nlet age = 15;\nconst country = "Egypt";\n\nconsole.log(name);',
        questions: [
          ["ما وظيفة المتغير؟", ["تخزين قيمة", "رسم صورة", "إنشاء ملف CSS"], 0],
          ["أي كلمة لتعريف قيمة قابلة للتغيير؟", ["const", "let", "html"], 1],
          ["أي كلمة لتعريف ثابت؟", ["const", "var-color", "body"], 0],
          ["ما نوع القيمة 25؟", ["نص", "رقم", "صورة"], 1],
          ["كيف نكتب نصًا في JavaScript؟", ['"Hello"', "<p>Hello</p>", "{Hello}"], 0]
        ]
      },
      {
        title: "الدرس الثالث: الشروط",
        explanation: "الشروط تسمح بتنفيذ أوامر حسب تحقق شرط معين. نستخدم if وelse لاتخاذ القرار.",
        code: 'let score = 80;\n\nif (score >= 50) {\n  console.log("نجحت");\n} else {\n  console.log("حاول مرة أخرى");\n}',
        questions: [
          ["ما الكلمة المستخدمة لبدء الشرط؟", ["if", "for", "let"], 0],
          ["متى يعمل else؟", ["عندما لا يتحقق شرط if", "دائمًا أولًا", "عند تعريف متغير"], 0],
          ["ما معنى >= ؟", ["أكبر من أو يساوي", "أصغر من", "يساوي فقط"], 0],
          ["هل يمكن استخدام أكثر من شرط؟", ["نعم", "لا", "في CSS فقط"], 0],
          ["ما وظيفة if؟", ["اتخاذ قرار بناءً على شرط", "تغيير لون الصفحة", "عرض صورة"], 0]
        ]
      }
    ]
  },
  {
    name: "Python",
    icon: "🐍",
    description: "ابدأ تعلم البرمجة بلغة Python.",
    lessons: [
      {
        title: "الدرس الأول: مقدمة Python",
        explanation: "Python لغة برمجة سهلة القراءة وتستخدم في مجالات كثيرة. يمكن طباعة رسالة باستخدام print.",
        code: 'print("Hello World")\nprint("Welcome to Python")',
        questions: [
          ["كيف نطبع رسالة في Python؟", ["echo()", "print()", "console.log()"], 1],
          ["ما امتداد ملف Python؟", [".css", ".py", ".html"], 1],
          ["هل Python حساسة لحالة الأحرف؟", ["نعم", "لا", "في التعليقات فقط"], 0],
          ["ما ناتج print(5)؟", ["5", "print", "خطأ دائمًا"], 0],
          ["هل Python لغة برمجة؟", ["نعم", "لا", "هي متصفح"], 0]
        ]
      },
      {
        title: "الدرس الثاني: المتغيرات",
        explanation: "نستخدم المتغيرات لتخزين البيانات. في Python لا نحتاج إلى كتابة نوع المتغير قبل اسمه.",
        code: 'name = "Adam"\nage = 15\n\nprint(name)\nprint(age)',
        questions: [
          ["كيف ننشئ متغيرًا؟", ["name = value", "let name", "var: name"], 0],
          ["ما نوع القيمة 10؟", ["int", "str", "list"], 0],
          ["ما نوع القيمة Hello بين علامتي اقتباس؟", ["int", "str", "bool"], 1],
          ["هل نحتاج let لتعريف متغير؟", ["نعم", "لا"], 1],
          ["ما وظيفة = ؟", ["إسناد قيمة", "طباعة نص", "إنهاء البرنامج"], 0]
        ]
      },
      {
        title: "الدرس الثالث: الشروط",
        explanation: "تستخدم if وelse لاتخاذ قرارات داخل البرنامج. يجب الانتباه إلى المسافات البادئة في Python.",
        code: 'score = 80\n\nif score >= 50:\n    print("نجحت")\nelse:\n    print("حاول مرة أخرى")',
        questions: [
          ["ما الكلمة المستخدمة للشرط؟", ["if", "style", "html"], 0],
          ["ما الكلمة البديلة عند عدم تحقق الشرط؟", ["else", "print", "input"], 0],
          ["ما معنى == ؟", ["مقارنة التساوي", "إسناد قيمة", "ضرب"], 0],
          ["هل المسافات البادئة مهمة في Python؟", ["نعم", "لا"], 0],
          ["ما ناتج الشرط إذا كانت الدرجة 80 والشرط >= 50؟", ["ينفذ if", "ينفذ else", "لا شيء"], 0]
        ]
      }
    ]
  }
];

const courseList = document.getElementById("course-list");
const lessonList = document.getElementById("lesson-list");
const lessonContent = document.getElementById("lesson-content");
const quizArea = document.getElementById("quiz-area");
const learningTitle = document.getElementById("learning-title");
const learningDescription = document.getElementById("learning-description");

let selectedCourse = null;
let selectedLesson = null;
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;

let completed = JSON.parse(localStorage.getItem("cv-completed") || "[]");

function saveProgress() {
  localStorage.setItem("cv-completed", JSON.stringify(completed));
}

function renderCourses() {
  courseList.innerHTML = "";

  courses.forEach((course, index) => {
    const done = completed.filter(item => item.startsWith(course.name + "-")).length;

    const card = document.createElement("article");
    card.className = "course-card";

    const title = document.createElement("h3");
    title.textContent = course.icon + " " + course.name;

    const description = document.createElement("p");
    description.textContent = course.description;

    const progress = document.createElement("p");
    progress.textContent = `الدروس المكتملة: ${done} من 3`;

    const button = document.createElement("button");
    button.textContent = "عرض الدروس";
    button.addEventListener("click", () => openCourse(index));

    card.append(title, description, progress, button);
    courseList.appendChild(card);
  });
}

function openCourse(index) {
  selectedCourse = courses[index];
  selectedLesson = null;

  learningTitle.textContent = "مسار " + selectedCourse.name;
  learningDescription.textContent = selectedCourse.description;

  lessonList.innerHTML = "";
  lessonContent.innerHTML = "";
  quizArea.innerHTML = "";

  selectedCourse.lessons.forEach((lesson, index) => {
    const button = document.createElement("button");
    button.className = "lesson-button";
    button.textContent = lesson.title;

    if (completed.includes(selectedCourse.name + "-" + index)) {
      button.textContent += " ✓";
    }

    button.addEventListener("click", () => openLesson(index));
    lessonList.appendChild(button);
  });

  document.getElementById("learning").scrollIntoView({ behavior: "smooth" });
}

function openLesson(index) {
  selectedLesson = selectedCourse.lessons[index];
  currentQuestion = 0;
  correctAnswers = 0;
  answered = false;

  document.querySelectorAll(".lesson-button").forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });

  lessonContent.innerHTML = "";

  const box = document.createElement("div");
  box.className = "lesson-content";

  const title = document.createElement("h3");
  title.textContent = selectedLesson.title;

  const explanation = document.createElement("p");
  explanation.textContent = selectedLesson.explanation;

  const exampleTitle = document.createElement("h3");
  exampleTitle.textContent = "مثال عملي";

  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.textContent = selectedLesson.code;
  pre.appendChild(code);

  const note = document.createElement("p");
  note.textContent = "اقرأ الشرح وجرب كتابة المثال بنفسك، ثم ابدأ الاختبار.";

  box.append(title, explanation, exampleTitle, pre, note);
  lessonContent.appendChild(box);

  quizArea.innerHTML = "";

  const startButton = document.createElement("button");
  startButton.className = "main-btn";
  startButton.textContent = "ابدأ اختبار الدرس";
  startButton.addEventListener("click", startQuiz);

  quizArea.appendChild(startButton);
}

function startQuiz() {
  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();
}

function showQuestion() {
  answered = false;

  const question = selectedLesson.questions[currentQuestion];

  quizArea.innerHTML = "";

  const box = document.createElement("div");
  box.className = "quiz-box";

  const progress = document.createElement("p");
  progress.className = "quiz-progress";
  progress.textContent = `السؤال ${currentQuestion + 1} من 5`;

  const title = document.createElement("h3");
  title.textContent = question[0];

  const optionsBox = document.createElement("div");

  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback";

  const next = document.createElement("button");
  next.id = "next-question";
  next.textContent = currentQuestion === 4 ? "عرض النتيجة" : "السؤال التالي";
  next.disabled = true;

  question[1].forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.textContent = answer;

    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const correct = question[2];

      document.querySelectorAll(".quiz-option").forEach((option, i) => {
        option.disabled = true;

        if (i === correct) option.classList.add("correct");
        if (i === index && index !== correct) option.classList.add("wrong");
      });

      if (index === correct) {
        correctAnswers++;
        feedback.textContent = "إجابة صحيحة! أحسنت 🎉";
      } else {
        feedback.textContent = "إجابة غير صحيحة. راجع الإجابة الصحيحة باللون الأخضر.";
      }

      next.disabled = false;
    });

    optionsBox.appendChild(button);
  });

  next.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < 5) {
      showQuestion();
    } else {
      showResult();
    }
  });

  box.append(progress, title, optionsBox, feedback, next);
  quizArea.appendChild(box);
}

function showResult() {
  const percentage = correctAnswers * 20;
  const passed = correctAnswers >= 3;

  const box = document.createElement("div");
  box.className = "quiz-box result";

  const title = document.createElement("h3");
  title.textContent = passed ? "أحسنت! اجتزت الاختبار 🎉" : "حاول مرة أخرى 💪";

  const score = document.createElement("strong");
  score.textContent = `${correctAnswers} / 5`;

  const percentageText = document.createElement("p");
  percentageText.textContent = `نتيجتك: ${percentage}%`;

  const message = document.createElement("p");
  message.textContent = passed
    ? "تم تسجيل إكمال هذا الدرس على هذا الجهاز."
    : "تحتاج إلى 3 إجابات صحيحة على الأقل لإكمال الدرس.";

  const retry = document.createElement("button");
  retry.id = "retry-quiz";
  retry.textContent = "إعادة الاختبار";
  retry.addEventListener("click", startQuiz);

  box.append(title, score, percentageText, message, retry);

  if (passed) {
    const key = selectedCourse.name + "-" + selectedCourse.lessons.indexOf(selectedLesson);

    if (!completed.includes(key)) {
      completed.push(key);
      saveProgress();
    }

    const done = document.createElement("p");
    done.textContent = "✓ الدرس مكتمل";
    done.style.color = "#65e6b5";
    box.appendChild(done);

    renderCourses();
    openCourse(courses.indexOf(selectedCourse));
    openLesson(selectedCourse.lessons.indexOf(selectedLesson));
  }

  quizArea.innerHTML = "";
  quizArea.appendChild(box);
}

renderCourses();
