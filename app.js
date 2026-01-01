// ===== DADOS E CONFIGURAÇÕES =====

// Conceitos estoicos por mês
const monthlyConceptsData = {
  0: {
    // Janeiro
    title: "Virtude como o Bem Supremo",
    content: `A virtude é o único bem verdadeiro segundo os estoicos. Neste mês, reflita sobre as quatro virtudes cardeais: 
    <br><br><strong>Sabedoria (Sophia):</strong> Discernimento e conhecimento do que é bom, mau e indiferente. 
    <br><strong>Coragem (Andreia):</strong> Força para enfrentar adversidades e fazer o que é certo.
    <br><strong>Justiça (Dikaiosyne):</strong> Tratar os outros com equidade e viver em harmonia com a sociedade.
    <br><strong>Temperança (Sophrosyne):</strong> Autocontrole e moderação em todas as coisas.`
  },
  1: {
    // Fevereiro
    title: "Dicotomia do Controle",
    content: `O princípio fundamental do estoicismo:  distinguir entre o que está sob nosso controle e o que não está. 
    <br><br><strong>Sob nosso controle:</strong> Nossos pensamentos, opiniões, desejos e ações.
    <br><strong>Fora do nosso controle:</strong> O passado, o futuro, opiniões alheias, eventos externos. 
    <br><br>Foque sua energia apenas no que você pode controlar e aceite o resto com serenidade.`
  },
  2: {
    // Março
    title: "Memento Mori",
    content: `"Lembre-se de que você vai morrer" não é mórbido, mas libertador. 
    <br><br>A consciência da nossa mortalidade nos ajuda a: 
    <br>• Valorizar o tempo presente
    <br>• Priorizar o que realmente importa
    <br>• Não adiar decisões importantes
    <br>• Tratar as pessoas com mais amor e respeito
    <br><br>Viva cada dia como se fosse o último, mas planeje como se fosse viver para sempre.`
  },
  3: {
    // Abril
    title: "Amor Fati",
    content: `"Amor ao destino" - não apenas aceitar, mas abraçar tudo que acontece.
    <br><br>Os estoicos nos ensinam a amar nosso destino, vendo cada obstáculo como uma oportunidade de crescimento.
    <br><br>"Não busque que as coisas aconteçam como você quer, mas queira que aconteçam como acontecem, e você será feliz." - Epicteto
    <br><br>Este mês, pratique transformar obstáculos em oportunidades. `
  },
  4: {
    // Maio
    title: "A Vida Presente",
    content: `O presente é tudo o que temos. O passado não existe mais e o futuro ainda não chegou.
    <br><br>Marco Aurélio escreveu: "Confine-se ao presente."
    <br><br>Práticas para viver o presente:
    <br>• Atenção plena nas tarefas diárias
    <br>• Não ruminar sobre o passado
    <br>• Não se preocupar excessivamente com o futuro
    <br>• Encontrar gratidão no momento atual`
  },
  5: {
    // Junho
    title: "Cosmopolitismo",
    content: `Os estoicos foram os primeiros cosmopolitas - cidadãos do mundo. 
    <br><br>"Sou um cidadão do mundo" - Sócrates
    <br><br>Este mês, reflita sobre: 
    <br>• Nossa conexão com toda a humanidade
    <br>• A responsabilidade para com o bem comum
    <br>• Superar preconceitos e divisões artificiais
    <br>• Ver-se como parte de algo maior`
  },
  6: {
    // Julho
    title:  "Premeditatio Malorum",
    content:  `A "premeditação dos males" - visualizar o que pode dar errado para estar preparado.
    <br><br>Não é pessimismo, mas preparação mental: 
    <br>• Reduz a ansiedade sobre o futuro
    <br>• Aumenta a gratidão pelo que temos
    <br>• Nos torna mais resilientes
    <br>• Diminui o impacto de eventos negativos
    <br><br>"Se está em suas mãos, por que se preocupar?  Se não está, por que se preocupar?" - Epicteto`
  },
  7: {
    // Agosto
    title: "Apatheia",
    content: `Apatheia não é "apatia", mas liberdade das paixões destrutivas.
    <br><br>É alcançar a tranquilidade através de:
    <br>• Não ser dominado por emoções negativas
    <br>• Manter equanimidade diante dos eventos
    <br>• Responder com razão, não com reação
    <br>• Cultivar paz interior independente das circunstâncias
    <br><br>Não é suprimir emoções, mas não ser escravizado por elas.`
  },
  8: {
    // Setembro
    title:  "O Obstáculo é o Caminho",
    content:  `"O impedimento à ação faz avançar a ação.  O que está no caminho se torna o caminho." - Marco Aurélio
    <br><br>Cada obstáculo é uma oportunidade para praticar:
    <br>• Paciência
    <br>• Criatividade
    <br>• Resiliência
    <br>• Virtude
    <br><br>Este mês, transforme seus desafios em combustível para o crescimento. `
  },
  9: {
    // Outubro
    title: "Logos - A Razão Universal",
    content: `Os estoicos acreditavam no Logos - a razão que governa o universo.
    <br><br>Viver de acordo com a natureza significa:
    <br>• Alinhar-se com a razão universal
    <br>• Aceitar a ordem natural das coisas
    <br>• Usar nossa própria razão para viver bem
    <br>• Reconhecer nossa conexão com o todo
    <br><br>"Tudo está interligado e o vínculo é sagrado." - Marco Aurélio`
  },
  10: {
    // Novembro
    title: "Praemeditatio - Preparação Mental",
    content: `A prática estoica de ensaiar mentalmente desafios futuros.
    <br><br>Benefícios da preparação mental:
    <br>• Aumenta a confiança
    <br>• Reduz o medo do desconhecido
    <br>• Melhora a performance sob pressão
    <br>• Desenvolve estratégias de enfrentamento
    <br><br>Este mês, visualize sucesso em desafios futuros enquanto se prepara para obstáculos. `
  },
  11: {
    // Dezembro
    title: "Reflexão e Renovação",
    content: `Fim do ano - tempo de reflexão estoica sobre o ano que passou.
    <br><br>Sêneca recomendava examinar diariamente:
    <br>• Que má hábito curei hoje?
    <br>• Que vício resisti?
    <br>• Em que sou melhor?
    <br><br>Use este mês para: 
    <br>• Revisar seu progresso no caminho da virtude
    <br>• Agradecer por lições aprendidas
    <br>• Preparar-se para continuar a jornada estoica`
  }
};

// Citações estoicas (uma para cada dia do ano)
const stoicQuotes = [
  {
    text: "Você tem poder sobre sua mente - não sobre eventos externos.  Perceba isso e você encontrará força.",
    author: "Marco Aurélio"
  },
  {
    text: "A felicidade da sua vida depende da qualidade dos seus pensamentos.",
    author: "Marco Aurélio"
  },
  {
    text: "Não é o homem que tem muito pouco, mas o homem que deseja mais, que é pobre.",
    author: "Sêneca"
  },
  {
    text: "Começamos a viver apenas quando cessamos de nos queixar.",
    author: "Sêneca"
  },
  {
    text: "Não é o que acontece a você, mas como você reage que importa.",
    author: "Epicteto"
  },
  {
    text: "Primeiro diga a si mesmo o que você gostaria de ser; e então faça o que deve fazer.",
    author: "Epicteto"
  },
  {
    text: "A melhor vingança é não ser como seu inimigo.",
    author: "Marco Aurélio"
  },
  {
    text: "Se não é certo, não faça.  Se não é verdade, não diga.",
    author: "Marco Aurélio"
  },
  {
    text: "Quanto mais você raciocina, mais você será livre.",
    author: "Marco Aurélio"
  },
  {
    text: "A vida é muito curta para ser desperdiçada em coisas triviais.",
    author: "Sêneca"
  },
  // Continue com mais citações para completar 365+ dias
  {
    text:  "As dificuldades fortalecem a mente, assim como o trabalho fortalece o corpo.",
    author: "Sêneca"
  },
  {
    text: "Ele que teme a morte nunca fará nada digno de um homem vivo.",
    author: "Sêneca"
  },
  {
    text: "Não há vento favorável para quem não sabe aonde vai.",
    author: "Sêneca"
  },
  {
    text: "Quem é fiel em pouco, também é fiel em muito.",
    author: "Sêneca"
  },
  {
    text: "A virtude é sua própria recompensa.",
    author: "Sêneca"
  },
  {
    text: "Nenhum homem é livre se não é senhor de si mesmo.",
    author: "Epicteto"
  },
  {
    text: "É impossível para um homem aprender o que ele acha que já sabe.",
    author: "Epicteto"
  },
  {
    text: "A saúde e a boa disposição são melhores que todos os bens.",
    author: "Epicteto"
  },
  {
    text:  "Temos duas orelhas e uma boca para que possamos ouvir duas vezes mais do que falamos.",
    author: "Epicteto"
  },
  {
    text:  "A riqueza consiste não em ter grandes posses, mas em ter poucas necessidades.",
    author: "Epicteto"
  },
  {
    text: "Seja tolerante com os outros e rigoroso consigo mesmo.",
    author: "Marco Aurélio"
  },
  {
    text: "A alma se tinge com a cor de seus pensamentos.",
    author: "Marco Aurélio"
  },
  {
    text:  "Aceite tudo que acontece, mesmo que pareça desagradável, porque leva a este fim:  a saúde do universo.",
    author: "Marco Aurélio"
  },
  {
    text: "Faça cada ato da sua vida como se fosse o último.",
    author: "Marco Aurélio"
  },
  {
    text: "Quando você acorda de manhã, pense no privilégio precioso de estar vivo - respirar, pensar, aproveitar, amar.",
    author: "Marco Aurélio"
  },
  {
    text: "A vida inteira do filósofo é uma preparação para a morte.",
    author: "Cícero"
  },
  {
    text: "Um homem sábio conterá suas emoções como um cocheiro contém seus cavalos.",
    author: "Cícero"
  },
  {
    text: "A gratidão não é apenas a maior das virtudes, mas a mãe de todas as outras.",
    author: "Cícero"
  },
  {
    text: "A vida de cada homem é um diário no qual ele pretende escrever uma história e escreve outra.",
    author: "Sêneca"
  },
  {
    text: "Arranje tempo para aprender:  é a base da sabedoria.",
    author: "Sêneca"
  },
  {
    text:  "O maior obstáculo para viver é a expectativa, que depende de amanhã e desperdiça hoje.",
    author: "Sêneca"
  }
];

// Gerar mais citações para completar o ano
function getQuoteForDay(dayOfYear) {
  return stoicQuotes[dayOfYear % stoicQuotes.length];
}

// ===== ESTADO DA APLICAÇÃO =====
let currentMonth = 0;
let currentYear = 2026;
let currentDay = null;
let userData = {};

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  loadUserData();
  initializeApp();
  attachEventListeners();
});

function initializeApp() {
  // Definir mês atual (Janeiro 2026 por padrão)
  const today = new Date();
  if (today.getFullYear() === 2026) {
    currentMonth = today. getMonth();
  } else {
    currentMonth = 0; // Janeiro
  }
  currentYear = 2026;

  renderMonthView();
}

// ===== NAVEGAÇÃO =====
function attachEventListeners() {
  document
    .getElementById("prev-month")
    .addEventListener("click", () => changeMonth(-1));
  document
    .getElementById("next-month")
    .addEventListener("click", () => changeMonth(1));
  document
    .getElementById("back-to-calendar")
    .addEventListener("click", backToCalendar);
  document. getElementById("save-day").addEventListener("click", saveDay);
  document
    .getElementById("view-summary")
    .addEventListener("click", viewMonthlySummary);
  document
    .getElementById("close-summary")
    .addEventListener("click", closeSummary);
}

function changeMonth(direction) {
  currentMonth += direction;

  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }

  // Limitar ao ano 2026
  if (currentYear < 2026) {
    currentYear = 2026;
    currentMonth = 0;
  } else if (currentYear > 2026) {
    currentYear = 2026;
    currentMonth = 11;
  }

  renderMonthView();
}

// ===== RENDERIZAÇÃO DO MÊS =====
function renderMonthView() {
  showSection("calendar-view");

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  document.getElementById("current-month-year").textContent =
    `${monthNames[currentMonth]} ${currentYear}`;

  // Renderizar conceito estoico do mês
  const concept = monthlyConceptsData[currentMonth];
  document. getElementById("concept-title").textContent = concept.title;
  document.getElementById("concept-content").innerHTML = concept.content;

  // Renderizar calendário
  renderCalendar();
}

function renderCalendar() {
  const calendarGrid = document.getElementById("calendar-grid");
  calendarGrid.innerHTML = "";

  // Cabeçalho dos dias da semana
  const dayHeaders = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  dayHeaders.forEach(day => {
    const header = document.createElement("div");
    header.className = "calendar-day-header";
    header.textContent = day;
    calendarGrid.appendChild(header);
  });

  // Primeiro dia do mês e total de dias
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Espaços vazios antes do primeiro dia
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "calendar-day empty";
    calendarGrid.appendChild(emptyCell);
  }

  // Dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.className = "calendar-day";
    dayCell.textContent = day;

    // Verificar se há dados salvos para este dia
    const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    if (userData[dateKey] && Object.keys(userData[dateKey]).length > 0) {
      dayCell.classList.add("has-data");
    }

    // Marcar dia atual
    const today = new Date();
    if (
      today.getFullYear() === currentYear &&
      today.getMonth() === currentMonth &&
      today.getDate() === day
    ) {
      dayCell.classList.add("today");
    }

    dayCell.addEventListener("click", () => openDay(day));
    calendarGrid.appendChild(dayCell);
  }
}

// ===== VISUALIZAÇÃO DO DIA =====
function openDay(day) {
  currentDay = day;
  showSection("day-view");

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const dayNames = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ];

  const date = new Date(currentYear, currentMonth, day);
  const dayName = dayNames[date.getDay()];

  document.getElementById("day-title").textContent =
    `${dayName}, ${day} de ${monthNames[currentMonth]} de ${currentYear}`;

  // Citação do dia
  const dayOfYear = getDayOfYear(date);
  const quote = getQuoteForDay(dayOfYear);
  document.getElementById("daily-quote-text").textContent = `"${quote.text}"`;
  document.getElementById("daily-quote-author").textContent = `— ${quote.author}`;

  // Carregar dados salvos
  loadDayData(day);
}

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function loadDayData(day) {
  const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
    2,
    "0"
  )}-${String(day).padStart(2, "0")}`;
  const dayData = userData[dateKey] || {};

  // Carregar gratidões
  document.getElementById("gratitude-1").value = dayData.gratitude1 || "";
  document.getElementById("gratitude-2").value = dayData.gratitude2 || "";
  document.getElementById("gratitude-3").value = dayData.gratitude3 || "";

  // Carregar objetivo
  document.getElementById("daily-goal").value = dayData.goal || "";

  // Carregar melhorias
  document.getElementById("improvement-1").value = dayData.improvement1 || "";
  document.getElementById("improvement-2").value = dayData.improvement2 || "";
  document.getElementById("improvement-3").value = dayData.improvement3 || "";
}

function saveDay() {
  const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
    2,
    "0"
  )}-${String(currentDay).padStart(2, "0")}`;

  userData[dateKey] = {
    gratitude1: document.getElementById("gratitude-1").value,
    gratitude2: document.getElementById("gratitude-2").value,
    gratitude3: document. getElementById("gratitude-3").value,
    goal: document.getElementById("daily-goal").value,
    improvement1: document.getElementById("improvement-1").value,
    improvement2: document.getElementById("improvement-2").value,
    improvement3: document.getElementById("improvement-3").value,
    timestamp: new Date().toISOString()
  };

  saveUserData();
  alert("✅ Dia salvo com sucesso!");
  backToCalendar();
}

function backToCalendar() {
  showSection("calendar-view");
  renderCalendar(); // Atualizar para mostrar dias com dados
}

// ===== RESUMO MENSAL =====
function viewMonthlySummary() {
  showSection("monthly-summary");

  const gratitudesList = document.getElementById("summary-gratitudes");
  const improvementsList = document.getElementById("summary-improvements");

  gratitudesList.innerHTML = "";
  improvementsList.innerHTML = "";

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let gratitudesCount = 0;
  let improvementsCount = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    const dayData = userData[dateKey];

    if (dayData) {
      // Gratidões
      [dayData.gratitude1, dayData.gratitude2, dayData. gratitude3].forEach(
        gratitude => {
          if (gratitude && gratitude.trim()) {
            const li = document.createElement("li");
            li.textContent = `Dia ${day}: ${gratitude}`;
            gratitudesList.appendChild(li);
            gratitudesCount++;
          }
        }
      );

      // Melhorias
      [
        dayData.improvement1,
        dayData.improvement2,
        dayData.improvement3
      ].forEach(improvement => {
        if (improvement && improvement. trim()) {
          const li = document.createElement("li");
          li.textContent = `Dia ${day}: ${improvement}`;
          improvementsList.appendChild(li);
          improvementsCount++;
        }
      });
    }
  }

  if (gratitudesCount === 0) {
    gratitudesList. innerHTML =
      "<li>Nenhuma gratidão registrada este mês. </li>";
  }

  if (improvementsCount === 0) {
    improvementsList. innerHTML =
      "<li>Nenhum ponto de melhoria registrado este mês.</li>";
  }
}

function closeSummary() {
  showSection("calendar-view");
}

// ===== GERENCIAMENTO DE DADOS =====
function saveUserData() {
  try {
    localStorage.setItem("agendaEstoica2026", JSON.stringify(userData));
  } catch (error) {
    console.error("Erro ao salvar dados:", error);
    alert("Erro ao salvar dados. Verifique o armazenamento do navegador.");
  }
}

function loadUserData() {
  try {
    const saved = localStorage.getItem("agendaEstoica2026");
    userData = saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
    userData = {};
  }
}

// ===== UTILITÁRIOS =====
function showSection(sectionId) {
  const sections = [
    "calendar-view",
    "day-view",
    "monthly-summary",
    "monthly-concept"
  ];

  sections.forEach(id => {
    const element = document.getElementById(id);
    if (id === sectionId) {
      element.style.display = "block";
    } else if (id === "monthly-concept") {
      // Mostrar conceito apenas na visualização do calendário
      element.style.display =
        sectionId === "calendar-view" ? "block" :  "none";
    } else {
      element.style.display = "none";
    }
  });

  // Mostrar/ocultar footer
  const footer = document.querySelector("footer");
  footer.style.display = sectionId === "calendar-view" ? "block" : "none";
}

// ===== EXPANDIR LISTA DE CITAÇÕES =====
// Adicionar mais citações ao array stoicQuotes para cobrir 365 dias
const additionalQuotes = [
  {
    text: "A coisa mais difícil é nos conhecermos; a mais fácil é falar mal dos outros.",
    author: "Tales de Mileto"
  },
  {
    text: "O homem que move montanhas começa carregando pequenas pedras.",
    author: "Confúcio"
  },
  {
    text: "Não conte os dias, faça os dias contarem.",
    author: "Muhammad Ali"
  },
  {
    text: "A adversidade é o primeiro caminho para a verdade.",
    author: "Lord Byron"
  },
  {
    text: "Quem olha para fora, sonha; quem olha para dentro, desperta.",
    author: "Carl Jung"
  },
  {
    text: "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    author: "Winston Churchill"
  },
  {
    text: "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    author: "Steve Jobs"
  },
  {
    text: "Seja você mesmo; todos os outros já foram pegos.",
    author: "Oscar Wilde"
  },
  {
    text: "Dois caminhos divergiam em um bosque, e eu - eu peguei o menos percorrido, e isso fez toda a diferença.",
    author: "Robert Frost"
  },
  {
    text: "O propósito da nossa vida é ser feliz.",
    author: "Dalai Lama"
  }
];

stoicQuotes.push(...additionalQuotes);

// Adicionar mais citações conforme necessário para completar 365
while (stoicQuotes.length < 365) {
  stoicQuotes.push({
    text: "A vida é o que acontece quando você está ocupado fazendo outros planos.",
    author: "John Lennon"
  });
}
