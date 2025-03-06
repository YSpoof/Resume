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

export default {
  name: "Luís Silva",
  photo: "https://github.com/yspoof.png",
  bio: "Sou um entusiasta da tecnologia com foco em desenvolvimento WEB. Gosto de aprender coisas novas e criar soluções performáticas.",
  age: getCurrentAge(),
  location: "São Paulo, SP",
  jobTitle: "Desenvolvedor Web • Técnico de T.I",
  contact: {
    email: "luis@lzart.com.br",
    website: "https://lzart.com.br",
    github: "https://github.com/yspoof",
    linkedin: "https://www.linkedin.com/in/luís-silva-607b94356",
  },
  programmingSkills: [
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
      glowColor: "shadow-teal-500",
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
      name: "Inglês",
      level: "Avançado",
      description: "Conversação, escrita e leitura.",
    },
    {
      name: "Linux",
      level: "Intermediário",
      description: "Administralção de servidores.",
    },
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
        "Presto suporte técnico para mais de 200 estudantes e professores. Gerencio a rede com 2 links dedicados e 3 unidades separadas, utilizando equipamentos Unifi e um pfSense de gateway. Cuido do cadastro de emails de funcionários e do gerenciamento de mais de 300 Chromebooks via Google Admin. Gerencio também um servidor local que utiliza Arch Linux.",
    },
    {
      date: "2020 -> 2023",
      title: "Técnico de Informática",
      company: "Jornal Cenário de Notícias",
      description:
        "Cuidava da rede composta por 3 links dedicados, um servidor Debian, máquinas dos colaboradores e demais equipamentos além de gerenciar a manutenção do site tvcenario.com feito em WordPress.",
    },
  ],
};
