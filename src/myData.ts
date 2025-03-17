import {
  SiAdobeillustrator,
  SiCanva,
  SiInkscape,
  SiLibreoffice,
  SiLinux,
  SiMicrosoftoffice,
  SiWindows,
} from "solid-icons/si";

// I was born on august 30, 2000

function getCurrentAge(): string {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let birthMonth = 2;
  let birthDay = 15;

  let age = new Date().getFullYear() - 2000;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return `${age} anos`;
}

export default {
  name: "Luana Cassimiro",
  photo: "https://github.com/n0tlun4.png",
  whoami:
    "Sou formada em Pedagogia pela Universidade de Mogi das Cruzes (UMC) e Pós-Graduada em Alfabetização e Letramento pelo Centro Universitário Internacional (UNINTER).",
  jobTitle: "Educadora",
  age: getCurrentAge(),
  contact: {
    email: "luana@lzart.com.br",
    website: "https://tarefaedu.lzart.com.br",
    github: "https://github.com/n0tlun4",
    linkedin: "https://www.linkedin.com/in/luana-cassimiro",
    instagram: "https://www.instagram.com/tarefa.educacao",
  },
  location: "São Paulo, SP",
  education: [
    {
      name: "Pós-graduação: Alfabetização e letramento",
      location: "UNINTER",
      date: "2022 -> 2022",
    },
    {
      name: "Graduação: Pedagogia",
      location: "UMC",
      date: "2018 -> 2020",
    },
  ],
  jobs: [
    {
      date: "Mar/2024 -> Atual",
      title: "Professora de Apoio Pedagógico (PAP)",
      company: "E.M.E.F Joel Fernandes de Souza",
      description:
        "Atuo na recuperação contínua e paralela de estudantes com dificuldades de aprendizagem.",
    },
    {
      date: "Mar/2019 -> Abr/2020",
      title: "Estágio Remunerado",
      company: "E.M.E.F Madre Joana Angélica De Jesus",
      description:
        "Auxiliava no planejamento e na realização das atividades de rotina em sala de aula e demais espaços educativos da escola.",
    },
  ],
  tools: [
    {
      name: "LibreOffice",
      icon: SiLibreoffice,
      link: "https://www.libreoffice.org/",
      glowColor: "shadow-orange-500",
    },
    {
      name: "MS Office",
      icon: SiMicrosoftoffice,
      link: "https://www.office.com/",
      glowColor: "shadow-blue-600",
    },
    {
      name: "Canva",
      icon: SiCanva,
      link: "https://www.canva.com/",
      glowColor: "shadow-cyan-500",
    },
    {
      name: "Illustrator",
      icon: SiAdobeillustrator,
      link: "https://www.adobe.com/products/illustrator.html",
      glowColor: "shadow-amber-600",
    },
    {
      name: "Inkscape",
      icon: SiInkscape,
      link: "https://inkscape.org/",
      glowColor: "shadow-teal-600",
    },
    {
      name: "Linux",
      icon: SiLinux,
      link: "https://www.linux.org/",
      glowColor: "shadow-yellow-500",
    },
    {
      name: "Windows",
      icon: SiWindows,
      link: "https://www.microsoft.com/windows/",
      glowColor: "shadow-blue-500",
    },
  ],
  skills: [
    {
      name: "Boa comunicação",
      level: "Qualidade",
      description:
        "Habilidade de se expressar claramente, tanto na escrita quanto na fala, facilitando o entendimento e a colaboração.",
    },
    {
      name: "Trabalho em equipe",
      level: "Qualidade",
      description:
        "Capacidade de colaborar efetivamente com outros, contribuindo para um ambiente de trabalho positivo e produtivo.",
    },
    {
      name: "Organização e proatividade",
      level: "Qualidade",
      description:
        "Habilidade em gerenciar tarefas e recursos de forma eficiente, antecipando-se a problemas e buscando soluções inovadoras.",
    },
  ],
};
