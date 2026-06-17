// QUIZ INTERNET SEGURA
// Para editar no GitHub:
// 1. Abre este ficheiro: script.js
// 2. Altera as perguntas, respostas e explicações dentro da lista "questions"
// 3. Guarda as alterações

const questions = [
  {
    question: "O que deves fazer se aparecer uma mensagem estranha no computador?",
    answers: [
      "Clicar logo para ver",
      "Pedir ajuda a um adulto",
      "Esconder dos adultos",
      "Responder à mensagem"
    ],
    correct: 1,
    explanation: "Muito bem! Quando algo parece estranho, devemos pedir ajuda a um adulto."
  },
  {
    question: "A palavra-passe deve ser partilhada com os colegas?",
    answers: [
      "Sim, se forem meus amigos",
      "Sim, para jogar mais rápido",
      "Não, é secreta",
      "Só no recreio"
    ],
    correct: 2,
    explanation: "Certo! A palavra-passe é como uma chave: deve ficar em segredo."
  },
  {
    question: "Que informação NÃO devemos partilhar na Internet?",
    answers: [
      "A nossa cor preferida",
      "O nosso nome completo, morada ou telefone",
      "Um desenho feito por nós",
      "Uma opinião sobre um livro"
    ],
    correct: 1,
    explanation: "Exatamente! Dados pessoais devem ser protegidos."
  },
  {
    question: "Se alguém desconhecido falar contigo online, o que deves fazer?",
    answers: [
      "Contar logo a um adulto",
      "Responder e fazer amizade",
      "Enviar uma fotografia",
      "Dar o nome da escola"
    ],
    correct: 0,
    explanation: "Muito bem! Devemos falar com um adulto quando um desconhecido nos contacta online."
  },
  {
    question: "Antes de abrir um link, devemos...",
    answers: [
      "Clicar sempre",
      "Ver se parece seguro e pedir ajuda se tivermos dúvidas",
      "Enviar o link a todos os amigos",
      "Ignorar os adultos"
    ],
    correct: 1,
    explanation: "Certo! Nem todos os links são seguros."
  },
  {
    question: "Qual destas é uma boa palavra-passe?",
    answers: [
      "123456",
      "omeunome",
      "password",
      "Sol!Livro7Gato"
    ],
    correct: 3,
    explanation: "Boa! Uma palavra-passe forte mistura palavras, números e símbolos."
  },
  {
    question: "O que devemos fazer antes de publicar uma fotografia?",
    answers: [
      "Pensar se é seguro e pedir autorização",
      "Publicar sempre",
      "Mandar para desconhecidos",
      "Escrever a nossa morada na legenda"
    ],
    correct: 0,
    explanation: "Muito bem! Devemos pensar antes de partilhar fotos ou vídeos."
  },
  {
    question: "Na Internet devemos tratar os outros...",
    answers: [
      "Com respeito e simpatia",
      "Com insultos",
      "Como se ninguém visse",
      "Só bem quando o professor está a ver"
    ],
    correct: 0,
    explanation: "Certo! Ser educado online é tão importante como na sala de aula."
  },
  {
    question: "Se uma aplicação pede autorização para tudo, devemos...",
    answers: [
      "Aceitar sem ler",
      "Pedir ajuda a um adulto",
      "Dar todos os dados",
      "Instalar escondido"
    ],
    correct: 1,
    explanation: "Muito bem! Um adulto pode ajudar a perceber se a aplicação é segura."
  },
  {
    question: "Depois de muito tempo no ecrã, é bom...",
    answers: [
      "Continuar sempre",
      "Dormir com o tablet ligado",
      "Fazer uma pausa e brincar também",
      "Nunca sair de casa"
    ],
    correct: 2,
    explanation: "Exatamente! A Internet é útil, mas brincar e descansar também é importante."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionNumber = document.getElementById("questionNumber");
const scoreText = document.getElementById("score");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  answersBox.innerHTML = "";

  const q = questions[currentQuestion];

  questionNumber.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  scoreText.textContent = `Pontos: ${score}`;
  questionText.textContent = q.question;
  progressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer;
    button.addEventListener("click", () => chooseAnswer(button, index));
    answersBox.appendChild(button);
  });
}

function chooseAnswer(button, selectedIndex) {
  if (answered) return;

  answered = true;
  const q = questions[currentQuestion];
  const allButtons = document.querySelectorAll(".answer");

  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === q.correct) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === q.correct) {
    score++;
    scoreText.textContent = `Pontos: ${score}`;
    feedback.textContent = "✅ Resposta certa! " + q.explanation;
  } else {
    button.classList.add("wrong");
    feedback.textContent = "❌ Quase! " + q.explanation;
  }

  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  finalScore.textContent = `Acertaste ${score} em ${questions.length} perguntas.`;

  if (score === questions.length) {
    finalMessage.textContent = "Excelente! És um verdadeiro guardião da Internet segura! 🛡️";
  } else if (score >= 7) {
    finalMessage.textContent = "Muito bem! Já sabes muitas regras importantes. 🌟";
  } else if (score >= 4) {
    finalMessage.textContent = "Bom esforço! Continua a praticar para navegares em segurança. 👍";
  } else {
    finalMessage.textContent = "Vamos aprender mais um pouco. A segurança online é muito importante! 💡";
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
}
