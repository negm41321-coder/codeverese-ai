const courses = [
  {
    name: "HTML",
    icon: "🌐",
    description: "تعلم بناء صفحات الويب من الصفر",
    lessons: [
      {
        title: "مقدمة في HTML",
        content: "HTML هي اللغة المسؤولة عن بناء هيكل صفحات الويب. نستخدمها لإضافة العناوين والنصوص والصور والروابط.",
        example: `<h1>مرحبا بالعالم</h1>
<p>هذه أول صفحة ويب لي</p>`,
        questions: [
          ["ما وظيفة HTML؟", ["تصميم الألوان", "بناء هيكل الصفحة", "تشغيل الخادم"], 1],
          ["ما امتداد ملف HTML؟", [".css", ".js", ".html"], 2],
          ["ما الوسم المستخدم لأكبر عنوان؟", ["<h1>", "<p>", "<img>"], 0],
          ["ما الوسم المستخدم لكتابة فقرة؟", ["<div>", "<p>", "<a>"], 1],
          ["هل HTML لغة ترميز؟", ["نعم", "لا", "لغة برمجة فقط"], 0]
        ]
      },
      {
        title: "العناوين والفقرات",
        content: "تستخدم وسوم h1 إلى h6 لكتابة العناوين بأحجام مختلفة، ونستخدم p لكتابة الفقرات.",
        example: `<h1>عنوان رئيسي</h1>
<h2>عنوان فرعي</h2>
<p>هذه فقرة نصية.</p>`,
        questions: [
          ["كم عدد مستويات العناوين؟", ["3", "6", "9"], 1],
          ["ما الوسم الخاص بالفقرة؟", ["<p>", "<h1>", "<br>"], 0],
          ["أي عنوان هو الأكبر؟", ["<h6>", "<h3>", "<h1>"], 2],
          ["ما وظيفة h2؟", ["صورة", "عنوان فرعي", "رابط"], 1],
          ["هل يمكن استخدام أكثر من عنوان في الصفحة؟", ["نعم", "لا", "فقط عنوان واحد"], 0]
        ]
      },
      {
        title: "الروابط والصور",
        content: "نستخدم الوسم a لإنشاء الروابط، والوسم img لإضافة الصور إلى الصفحة.",
        example: `<a href="https://example.com">افتح الموقع</a>
<img src="photo.jpg" alt="صورة">`,
        questions: [
          ["ما الوسم المستخدم للروابط؟", ["<img>", "<a>", "<p>"], 1],
          ["ما الخاصية التي تحدد وجهة الرابط؟", ["src", "alt", "href"], 2],
          ["ما الوسم المستخدم للصور؟", ["<img>", "<h1>", "<a>"], 0],
          ["ما وظيفة alt؟", ["وصف الصورة", "تغيير اللون", "إنشاء رابط"], 0],
          ["هل img يحتاج إلى وسم إغلاق منفصل؟", ["نعم", "لا", "حسب اللون"], 1]
        ]
      }
    ]
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "تعلم تنسيق وتصميم صفحات الويب",
    lessons: [
      {
        title: "مقدمة في CSS",
        content: "CSS هي اللغة التي نستخدمها لتنسيق صفحات HTML، مثل الألوان والخطوط والمسافات.",
        example: `h1 {
  color: purple;
  font-size: 30px;
}`,
        questions: [
          ["ما وظيفة CSS؟", ["تنسيق الصفحة", "إنشاء قاعدة بيانات", "كتابة النصوص فقط"], 0],
          ["ما امتداد ملف CSS؟", [".html", ".css", ".js"], 1],
          ["ما الخاصية المسؤولة عن لون النص؟", ["background", "color", "width"], 1],
          ["كيف نحدد العنصر في CSS؟", ["باستخدام المحدد", "باستخدام الصورة", "باستخدام الرابط فقط"], 0],
          ["هل CSS تكمل HTML؟", ["نعم", "لا", "ليس لها علاقة"], 0]
        ]
      },
      {
        title: "الألوان والخطوط",
        content: "يمكنك تغيير لون النص والخلفية وحجم الخط ونوعه باستخدام خصائص CSS.",
        example: `p {
  color: white;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
}`,
        questions: [
          ["ما الخاصية التي تغير الخلفية؟", ["color", "background-color", "font-size"], 1],
          ["ما الخاصية التي تغير حجم الخط؟", ["font-size", "margin", "border"], 0],
          ["ما قيمة تجعل الخط عريضًا؟", ["bold", "small", "none"], 0],
          ["ما الخاصية التي تغير نوع الخط؟", ["font-family", "padding", "height"], 0],
          ["هل يمكن استخدام أسماء ألوان مثل red؟", ["نعم", "لا", "فقط أرقام"], 0]
        ]
      },
      {
        title: "المسافات والحدود",
        content: "نستخدم margin للمسافة الخارجية، وpadding للمسافة الداخلية، وborder لإضافة إطار حول العنصر.",
        example: `.card {
  margin: 20px;
  padding: 15px;
  border: 2px solid purple;
}`,
        questions: [
          ["ما وظيفة margin؟", ["مسافة خارجية", "لون النص", "حجم الخط"], 0],
          ["ما وظيفة padding؟", ["مسافة داخلية", "صورة", "رابط"], 0],
          ["ما الخاصية التي تضيف إطارًا؟", ["border", "color", "display"], 0],
          ["ما معنى solid؟", ["خط متصل", "خط متقطع", "بدون إطار"], 0],
          ["هل يمكن تغيير سمك الحدود؟", ["نعم", "لا", "فقط في HTML"], 0]
        ]
      }
    ]
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "تعلم إضافة التفاعل والذكاء لصفحات الويب",
    lessons: [
      {
        title: "مقدمة في JavaScript",
        content: "JavaScript لغة برمجة تضيف التفاعل إلى صفحات الويب، مثل الأزرار والقوائم والاختبارات.",
        example: `alert("مرحبا بك!");
console.log("Hello");`,
        questions: [
          ["ما وظيفة JavaScript؟", ["تنسيق الألوان فقط", "إضافة التفاعل", "إنشاء الصور"], 1],
          ["ما امتداد ملف JavaScript؟", [".js", ".css", ".html"], 0],
          ["ما الأمر الذي يعرض رسالة؟", ["alert()", "style()", "image()"], 0],
          ["ما وظيفة console.log؟", ["عرض قيمة في وحدة التحكم", "تغيير الخلفية", "إنشاء صورة"], 0],
          ["هل JavaScript لغة برمجة؟", ["نعم", "لا", "لغة تنسيق"], 0]
        ]
      },
      {
        title: "المتغيرات",
        content: "المتغيرات تستخدم لتخزين البيانات. يمكن إنشاء متغير باستخدام let أو const.",
        example: `let name = "Adam";
const age = 16;
console.log(name);`,
        questions: [
          ["ما وظيفة المتغير؟", ["تخزين البيانات", "تغيير الصورة", "إنشاء إطار"], 0],
          ["أي كلمة تنشئ متغيرًا قابلًا للتغيير؟", ["let", "const", "style"], 0],
          ["هل يمكن تغيير قيمة const بعد تعريفها؟", ["نعم", "لا", "دائمًا"], 1],
          ["ما نوع القيمة 'Adam'؟", ["رقم", "نص", "قيمة منطقية"], 1],
          ["ما الرمز المستخدم لإسناد قيمة؟", ["=", "+", "/"], 0]
        ]
      },
      {
        title: "الشروط",
        content: "الشروط تسمح بتنفيذ أوامر مختلفة حسب تحقق شرط معين، ونستخدم if وelse.",
        example: `let score = 80;

if (score >= 50) {
  console.log("ناجح");
} else {
  console.log("حاول مرة أخرى");
}`,
        questions: [
          ["ما الكلمة المستخدمة لبدء الشرط؟", ["if", "let", "for"], 0],
          ["ما وظيفة else؟", ["تنفيذ بديل عند عدم تحقق الشرط", "تعريف متغير", "إنشاء صفحة"], 0],
          ["ما معنى >= ؟", ["أكبر من أو يساوي", "أصغر من", "يساوي فقط"], 0],
          ["هل يمكن استخدام if بدون else؟", ["نعم", "لا", "مستحيل"], 0],
          ["ما نوع نتيجة الشرط؟", ["صواب أو خطأ", "صورة", "ملف"], 0]
        ]
      }
    ]
  },
  {
    name: "Python",
    icon: "🐍",
    description: "ابدأ تعلم البرمجة بلغة Python",
    lessons: [
      {
        title: "مقدمة في Python",
        content: "Python لغة برمجة سهلة القراءة وتستخدم في مجالات كثيرة مثل التطبيقات وتحليل البيانات والذكاء الاصطناعي.",
        example: `print("Hello World")`,
        questions: [
          ["ما اسم اللغة؟", ["Java", "Python", "CSS"], 1],
          ["ما الأمر المستخدم للطباعة؟", ["print()", "show()", "writeCSS()"], 0],
          ["هل Python لغة برمجة؟", ["نعم", "لا", "لغة تنسيق"], 0],
          ["هل Python معروفة بسهولة القراءة؟", ["نعم", "لا", "لا تحتوي على أوامر"], 0],
          ["ما النص الذي يطبع Hello؟", ['print("Hello")', "color: red", "<h1>"], 0]
        ]
      },
      {
        title: "المتغيرات في Python",
        content: "نستخدم المتغيرات لتخزين المعلومات مثل الأسماء والأرقام.",
        example: `name = "Adam"
age = 16
print(name)`,
        questions: [
          ["كيف نضع قيمة في متغير؟", ["باستخدام =", "باستخدام href", "باستخدام color"], 0],
          ["ما نوع القيمة 20؟", ["نص", "عدد صحيح", "صورة"], 1],
          ["ما نوع القيمة 'Adam'؟", ["نص", "عدد", "قائمة"], 0],
          ["هل نحتاج إلى كتابة let لإنشاء متغير؟", ["نعم", "لا", "دائمًا"], 1],
          ["ما الأمر الذي يعرض قيمة المتغير؟", ["print()", "border", "href"], 0]
        ]
      },
      {
        title: "الشروط في Python",
        content: "نستخدم if لتنفيذ أمر عند تحقق شرط، وelse لتنفيذ أمر بديل.",
        example: `score = 80

if score >= 50:
    print("ناجح")
else:
    print("حاول مرة أخرى")`,
        questions: [
          ["ما الكلمة المستخدمة للشرط؟", ["if", "let", "class"], 0],
          ["ما الكلمة المستخدمة للحالة البديلة؟", ["else", "print", "name"], 0],
          ["ما معنى >= ؟", ["أكبر من أو يساوي", "أصغر من", "لا يساوي"], 0],
          ["بماذا نحدد بداية كتلة الأوامر؟", ["المسافة البادئة", "لون النص", "الصورة"], 0],
          ["هل يمكن استخدام if مع else؟", ["نعم", "لا", "فقط في CSS"], 0]
        ]
      }
    ]
  }
];

let selectedCourse = null;
let selectedLesson = null;
let currentQuestion = 0;
let correctAnswers = 0;
let answered = false;

let completed = JSON.parse(localStorage.getItem("cv-completed") || "[]");
let lastLesson = JSON.parse(localStorage.getItem("cv-last-lesson") || "null");

const courseList = document.getElementById("course-list");
const lessonList = document.getElementById("lesson-list");
const lessonContent = document.getElementById("lesson-content");
const quizArea = document.getElementById("quiz-area");
const learningTitle = document.getElementById("learning-title");
const learningDescription = document.getElementById("learning-description");

function saveProgress() {
  localStorage.setItem("cv-completed", JSON.stringify(completed));
  localStorage.setItem("cv-last-lesson", JSON.stringify(lastLesson));
}

function lessonKey(course, lessonIndex) {
  return course.name + "-" + lessonIndex;
}

function renderCourses() {
  courseList.innerHTML = "";

  courses.forEach((course, index) => {
    const card = document.createElement("div");
    card.className = "course-card";

    const doneCount = course.lessons.filter((lesson, i) =>
      completed.includes(lessonKey(course, i))
    ).length;

    card.innerHTML = `
      <h3>${course.icon} ${course.name}</h3>
      <p>${course.description}</p>
      <p>${doneCount} من ${course.lessons.length} دروس مكتملة</p>
      <button class="main-btn" type="button">ابدأ التعلم</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openCourse(index);
    });

    courseList.appendChild(card);
  });
}

function renderDashboard() {
  const summary = document.getElementById("dashboard-summary");
  const dashboardCourses = document.getElementById("dashboard-courses");
  const achievements = document.getElementById("dashboard-achievements");
  const resumeButton = document.getElementById("resume-button");

  if (!summary || !dashboardCourses || !achievements || !resumeButton) return;

  const totalLessons = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const totalCompleted = completed.length;
  const percentage = Math.round((totalCompleted / totalLessons) * 100);

  summary.innerHTML = `
    <div class="dashboard-card">
      <strong>${totalCompleted}</strong>
      <span>دروس مكتملة</span>
    </div>
    <div class="dashboard-card">
      <strong>${percentage}%</strong>
      <span>نسبة تقدمك</span>
    </div>
    <div class="dashboard-card">
      <strong>${courses.length}</strong>
      <span>مسارات تعليمية</span>
    </div>
  `;

  dashboardCourses.innerHTML = "";

  courses.forEach(course => {
    const done = course.lessons.filter((lesson, i) =>
      completed.includes(lessonKey(course, i))
    ).length;

    const percent = Math.round((done / course.lessons.length) * 100);

    const card = document.createElement("div");
    card.className = "dashboard-course-card";
    card.innerHTML = `
      <h4>${course.icon} ${course.name}</h4>
      <p>${done} من ${course.lessons.length} دروس</p>
      <div class="dashboard-progress">
        <div style="width: ${percent}%"></div>
      </div>
      <p>${percent}% مكتمل</p>
    `;

    dashboardCourses.appendChild(card);
  });

  const badges = [
    { icon: "🌱", title: "بداية الرحلة", condition: totalCompleted >= 1 },
    { icon: "🔥", title: "متعلم نشيط", condition: totalCompleted >= 3 },
    { icon: "🏆", title: "إنجاز رائع", condition: totalCompleted >= 6 },
    { icon: "🚀", title: "محترف المسارات", condition: totalCompleted >= 12 }
  ];

  achievements.innerHTML = "";

  badges.forEach(badge => {
    const card = document.createElement("div");
    card.className = "achievement-card" + (badge.condition ? " unlocked" : "");
    card.innerHTML = `
      <strong>${badge.icon}</strong>
      <span>${badge.title}</span>
      <p>${badge.condition ? "تم الحصول عليها" : "لم تُفتح بعد"}</p>
    `;
    achievements.appendChild(card);
  });

  resumeButton.disabled = !lastLesson;
}

function openCourse(index) {
  selectedCourse = courses[index];
  selectedLesson = null;

  learningTitle.textContent = selectedCourse.name;
  learningDescription.textContent = selectedCourse.description;

  lessonList.innerHTML = "";
  lessonContent.innerHTML = "";
  quizArea.innerHTML = "";

  selectedCourse.lessons.forEach((lesson, lessonIndex) => {
    const button = document.createElement("button");
    button.className = "lesson-button";
    button.textContent = lesson.title;

    if (completed.includes(lessonKey(selectedCourse, lessonIndex))) {
      button.textContent += " ✓";
    }

    button.addEventListener("click", () => openLesson(lessonIndex));
    lessonList.appendChild(button);
  });

  document.getElementById("learning").scrollIntoView({ behavior: "smooth" });
}

function openLesson(index) {
  selectedLesson = selectedCourse.lessons[index];
  currentQuestion = 0;
  correctAnswers = 0;

  lastLesson = {
    courseIndex: courses.indexOf(selectedCourse),
    lessonIndex: index
  };
  saveProgress();

  lessonContent.innerHTML = `
    <h3>${selectedLesson.title}</h3>
    <p>${selectedLesson.content}</p>
    <h4>مثال عملي:</h4>
    <pre><code></code></pre>
    <button id="start-quiz" class="main-btn" type="button">ابدأ الاختبار</button>
  `;

  lessonContent.querySelector("code").textContent = selectedLesson.example;

  quizArea.innerHTML = "";

  document.getElementById("start-quiz").addEventListener("click", () => {
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
  });
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
  box.appendChild(progress);

  const title = document.createElement("h3");
  title.textContent = question[0];
  box.appendChild(title);

  question[1].forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.textContent = answer;

    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      if (index === question[2]) {
        correctAnswers++;
        button.textContent += " ✓";
      } else {
        button.textContent += " ✕";
      }

      const nextButton = document.createElement("button");
      nextButton.className = "main-btn";
      nextButton.textContent =
        currentQuestion === 4 ? "عرض النتيجة" : "السؤال التالي";

      nextButton.addEventListener("click", () => {
        currentQuestion++;

        if (currentQuestion < 5) {
          showQuestion();
        } else {
          showResult();
        }
      });

      box.appendChild(nextButton);
    });

    box.appendChild(button);
  });

  quizArea.appendChild(box);
}

function showResult() {
  const box = document.createElement("div");
  box.className = "quiz-box";

  const passed = correctAnswers >= 3;

  box.innerHTML = `
    <h3>انتهى الاختبار 🎉</h3>
    <p>إجاباتك الصحيحة: ${correctAnswers} من 5</p>
    <p>${passed ? "ممتاز! لقد اجتزت الدرس بنجاح." : "حاول مرة أخرى، يمكنك النجاح!"}</p>
  `;

  if (passed) {
    const key = lessonKey(
      selectedCourse,
      selectedCourse.lessons.indexOf(selectedLesson)
    );

    if (!completed.includes(key)) {
      completed.push(key);
      saveProgress();
    }

    const done = document.createElement("p");
    done.textContent = "✓ الدرس مكتمل";
    done.style.color = "#65e6b5";
    box.appendChild(done);

    renderCourses();
    renderDashboard();

    const lessonIndex = selectedCourse.lessons.indexOf(selectedLesson);
    const lessonButtons = document.querySelectorAll(".lesson-button");
    if (lessonButtons[lessonIndex] && !lessonButtons[lessonIndex].textContent.includes("✓")) {
      lessonButtons[lessonIndex].textContent += " ✓";
    }
  }

  const retryButton = document.createElement("button");
  retryButton.className = "main-btn";
  retryButton.textContent = "إعادة الاختبار";
  retryButton.addEventListener("click", () => {
    currentQuestion = 0;
    correctAnswers = 0;
    showQuestion();
  });

  box.appendChild(retryButton);

  quizArea.innerHTML = "";
  quizArea.appendChild(box);
}

document.getElementById("resume-button").addEventListener("click", () => {
  if (!lastLesson) return;

  openCourse(lastLesson.courseIndex);
  openLesson(lastLesson.lessonIndex);
});

renderCourses();
renderDashboard();
