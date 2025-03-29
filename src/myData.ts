import { FaBrandsAngular, FaBrandsGit, FaBrandsVuejs } from "solid-icons/fa";
import {
  SiExpress,
  SiGnubash,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "solid-icons/si";
import { TbBrandSolidjs } from "solid-icons/tb";

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
  bio: "Sou um entusiasta da tecnologia atualmente com foco em desenvolvimento WEB. Gosto de aprender coisas novas e criar soluções performáticas.",
  age: getCurrentAge(),
  location: "São Paulo, SP",
  jobTitle: "Desenvolvedor Web • Técnico de T.I",
  contact: {
    email: "luis@lzart.com.br",
    website: "https://lzart.com.br",
    github: "https://github.com/yspoof",
    linkedin: "https://www.linkedin.com/in/luís-silva-607b94356",
  },
  programmingTech: [
    {
      name: "Angular",
      icon: FaBrandsAngular,
      link: "https://angular.dev/",
      glowColor: "shadow-red-500",
    },
    {
      name: "Bash",
      icon: SiGnubash,
      link: "https://www.gnu.org/software/bash/",
      glowColor: "shadow-yellow-500",
    },
    {
      name: "Express",
      icon: SiExpress,
      link: "https://expressjs.com/",
      glowColor: "shadow-green-500",
    },
    {
      name: "Git",
      icon: FaBrandsGit,
      link: "https://git-scm.com/",
      glowColor: "shadow-blue-500",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      link: "https://www.prisma.io/",
      glowColor: "shadow-purple-500",
    },
    {
      name: "Solid",
      icon: TbBrandSolidjs,
      link: "https://www.solidjs.com/",
      glowColor: "shadow-blue-300",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      link: "https://tailwindcss.com/",
      glowColor: "shadow-cyan-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      link: "https://www.typescriptlang.org/",
      glowColor: "shadow-blue-400",
    },
    {
      name: "Vue",
      icon: FaBrandsVuejs,
      link: "https://vuejs.org/",
      glowColor: "shadow-green-300",
    },
  ],
  skills: [
    {
      name: "Docker",
      level: "Iniciante",
      description: "Orquestração de containers via Compose.",
    },
    {
      name: "Google Admin",
      level: "Intermediário",
      description: "Gerenciamento de dispositivos e usuários.",
    },
    {
      name: "Inglês",
      level: "Avançado",
      description: "Conversação, escrita e leitura.",
    },
    {
      name: "Linux",
      level: "Intermediário",
      description: "Administralção de servidores.",
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
      date: "2023 -> Atual",
      title: "Auxiliar de T.I",
      company: "Institudo de Educação São José",
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
  ],
};

export default data;
export type MyData = typeof data;
