function getCurrentAge(): string {
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  const birthMonth = 7;
  const birthDay = 30;
  const birthYear = 2000;
  let age = new Date().getFullYear() - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return `${age} anos`;
}

const data = {
  name: "Luís Silva",
  photo: "https://github.com/yspoof.png",
  bio: "Sou um entusiasta da tecnologia atualmente com foco em desenvolvimento FrontEnd. Gosto de aprender coisas novas e criar soluções performáticas.",
  age: getCurrentAge(),
  location: "São Paulo, SP",
  jobTitle: "Desenvolvedor Front-End • Técnico de T.I",
  pdfVersion: "/cv-luis-silva.pdf",
  contact: {
    email: "luis@lzart.com.br",
    website: "https://lzart.com.br",
    github: "https://github.com/yspoof",
    linkedin: "https://linkedin.com/in/notluissilva/",
  },
  programmingTech: [
    {
      name: "Angular",
      icon: "vscode-icons:file-type-angular",
      link: "https://angular.dev/",
      glowColor: "shadow-red-500",
    },
    {
      name: "Bash",
      icon: "logos:bash-icon",
      link: "https://www.gnu.org/software/bash/",
      glowColor: "shadow-yellow-500",
    },
    {
      name: "Drizzle",
      icon: "material-icon-theme:drizzle",
      link: "https://orm.drizzle.team/",
      glowColor: "shadow-green-500",
    },
    {
      name: "Git",
      icon: "vscode-icons:file-type-git",
      link: "https://git-scm.com/",
      glowColor: "shadow-blue-500",
    },
    {
      name: "Nitro",
      icon: "unjs:nitro",
      link: "https://nitro.build/",
      glowColor: "shadow-red-400",
    },
    {
      name: "Nuxt",
      icon: "vscode-icons:file-type-nuxt",
      link: "https://nuxt.com/",
      glowColor: "shadow-green-600",
    },
    {
      name: "TailwindCSS",
      icon: "vscode-icons:file-type-tailwind",
      link: "https://tailwindcss.com/",
      glowColor: "shadow-cyan-500",
    },
    {
      name: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
      link: "https://www.typescriptlang.org/",
      glowColor: "shadow-blue-400",
    },
    {
      name: "Vue.js",
      icon: "vscode-icons:file-type-vue",
      link: "https://vuejs.org/",
      glowColor: "shadow-green-300",
    },
    {
      name: "Zod",
      icon: "logos:zod",
      link: "https://zod.dev/",
      glowColor: "shadow-blue-200",
    },
  ],
  skills: [
    {
      name: "Inglês",
      level: "Avançado",
      description: "Conversação, escrita e leitura.",
    },
    {
      name: "Linux",
      level: "Avançado",
      description: "Administralção de servidores.",
    },
    {
      name: "Google Admin",
      level: "Intermediário",
      description: "Gerenciamento de dispositivos e usuários.",
    },
    {
      name: "PfSense",
      level: "Intermediário",
      description: "Firewall e VPN.",
    },
    {
      name: "Unifi",
      level: "Intermediário",
      description: "Infraestrutura de rede.",
    },
    {
      name: "Docker",
      level: "Iniciante",
      description: "Orquestração de containers via Compose.",
    },
    {
      name: "WordPress",
      level: "Iniciante",
      description: "Gerenciamento de sites.",
    },
  ],
  education: [
    {
      name: "Redes de Computadores",
      location: "UNINTER",
      date: "2022 -> 2024",
    },
  ],
  jobs: [
    {
      date: "2025 -> Atual",
      title: "Desenvolvedor Front-end Pleno",
      company: "Extreme Digital Solutions",
      description:
        "Atuo na EDS utilizando o framework Angular 8+, TypeScript, HTML, CSS/SCSS para a estilização de componentes. Minha função inclui a criação de componentes reutilizáveis e modulares, diferentes views em aplicações e otimização das mesmas, sempre seguindo os padrões de mercado e boas práticas de desenvolvimento.\n\nAlém disso, faço uso do Angular Material para a construção de interfaces de usuário responsivas e acessíveis, garantindo uma experiência consistente em diferentes dispositivos.\n\nUtilizo Git para controle de versão e colaboração em equipe, além de Bash para automações diversas no ambiente de desenvolvimento.\n\nTrabalho em estreita colaboração com designers, desenvolvedores backend e outros membros da equipe para garantir que os requisitos do projeto sejam atendidos e que as soluções entregues sejam escaláveis e de alta qualidade.",
    },
    {
      date: "2023 -> 2025",
      title: "Auxiliar de T.I",
      company: "Instituto de Educação São José",
      description:
        "Presto suporte técnico para mais de 250 usuários incluindo estudantes e professores, garantindo o funcionamento adequado dos sistemas e dispositivos.\n\nGerencio a infraestrutura de rede, que conta com 2 links dedicados e 3 unidades físicas separadas, utilizando equipamentos Unifi e um firewall pfSense como gateway principal.\n\nTambém sou responsável pelo cadastro e manutenção de contas de e-mail institucionais para funcionários, além do gerenciamento centralizado de mais de 300 Chromebooks através do Google Admin onde fiz diversos scripts para automatizar e facilitar tais tarefas utilizando GoogleScript e a API do Google.\n\nOutra das minhas atribuições inclui a administração de um servidor local baseado em Arch Linux, utilizado para serviços internos e armazenamento de dados.",
    },
    {
      date: "2020 -> 2023",
      title: "Técnico de Informática",
      company: "Jornal Cenário de Notícias",
      description:
        "Realizava a administração da rede corporativa, composta por 3 links dedicados, garantindo estabilidade e desempenho.\n\nFiz a implementação e zelava pela manutenção de um servidor Debian que exercia funções como: Armazenamento centralizado de arquivos, servia de ambiente de testes para WordPress e atuava como serviço de DNS Cache para otimização do tráfego de rede, consegui automatizar várias taréfas com Docker e scritps em Bash e ZSH.\n\nPrestava suporte técnico aos colaboradores, incluindo manutenção de desktops, equipamentos de TI e infraestrutura audiovisual (câmeras, mesas de mistura e sistemas de transmissão).\n\nCuidava do site tvcenario.com feito em WordPress.\n\nCoordenava transmissões ao vivo para programas diversificados como cobertura de eventos corporativos e públicos, transmissão de notícias, sorteios e programas especiais.",
    },
    {
      date: "2019 -> Atual",
      title: "Consultor Freelance",
      company: "~~~",
      description:
        "Desde Novembro de 2019, atuo como Consultor Freelance com foco em desenvolvimento frontend, entregando soluções de alta qualidade que aliam performance robusta e excelente experiência do usuário.\n\nTenho trabalhado com uma variedade de tecnologias modernas, incluindo HTML, SCSS, JavaScript, TypeScript, Angular (8+), Angular Material, Vue.js, Nuxt, TailwindCSS, Bootstrap e DrizzleORM.\n\nNo dia a dia, também faço uso de Git para versionamento, Bash para automações e Nitro como servidor backend.\n\nMeu objetivo é sempre atender às necessidades dos clientes com soluções escaláveis, modernas e bem estruturadas.",
    },
  ],
};

export default data;
export type MyData = typeof data;
