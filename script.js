// Array de preguntas y respuestas
const questionsData = [
  {
    question: "¿Cuál es el mejor lenguaje de programación?",
    answer: "No hay un lenguaje de programación 'mejor' en general, depende del caso de uso y de tus preferencias. Algunos lenguajes populares son JavaScript, Python y Java."
  },
  {
    question: "¿Cuál es la capital de Francia?",
    answer: "La capital de Francia es París."
  },
  {
    question: "¿Cuál es la fórmula para calcular el área de un círculo?",
    answer: "La fórmula para calcular el área de un círculo es: A = π * r^2, donde π es el valor aproximado de 3.14159 y r es el radio del círculo."
  }
];

// Función para mostrar las preguntas y respuestas en la página
function displayQuestions() {
  const questionsContainer = document.getElementById("questions");

  questionsData.forEach((data) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionTitle = document.createElement("h3");
    questionTitle.classList.add("question-title");
    questionTitle.textContent = data.question;

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");
    answerDiv.textContent = data.answer;

    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(answerDiv);

    questionsContainer.appendChild(questionDiv);
  });
}

// Función para agregar una nueva pregunta y respuesta
function addQuestion(event) {
  event.preventDefault();
  
  const questionInput = document.getElementById("question-input");
  const questionValue = questionInput.value.trim();
  
  if (questionValue !== "") {
    const questionData = {
      question: questionValue,
      answer: "Próximamente...",
    };
    
    questionsData.push(questionData);
    questionInput.value = "";
    
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";
    
    displayQuestions();
  }
}

// Evento submit del formulario
const questionForm = document.getElementById("question-form");
questionForm.addEventListener("submit", addQuestion);

// Mostrar las preguntas y respuestas iniciales
displayQuestions();
