import { A } from "@solidjs/router";
import { AiFillGithub, AiFillLinkedin } from "solid-icons/ai";
import myData from "~/myData";

export default function Home() {
  return (
    <main class="max-w-3xl mx-auto text-gray-800 dark:text-gray-200 p-6 flex flex-col items-center md:h-screen">
      <div class="flex flex-col items-center mb-10">
        <img
          src={myData.photo}
          alt={myData.name}
          class="w-40 h-40 rounded-full shadow-lg mb-4 transition-all hover:-rotate-1 hover:scale-105 hover:shadow-xl"
        />
        <h1 class="text-4xl font-bold">{myData.name}</h1>
        <p class="text-gray-500 dark:text-gray-400 mt-2">
          São Paulo, SP • {myData.age} anos
        </p>
      </div>

      <p class="text-lg text-center max-w-xl mb-8">{myData.whoami}</p>

      <div class="flex gap-6 mb-8">
        <a
          href={myData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          class="transition-all flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
        >
          <AiFillGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href={myData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="transition-all flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
        >
          <AiFillLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-lg mb-2">Desenvolvedor Web • Técnico de T.I</h2>
        <div class="flex gap-3 flex-wrap justify-center mt-4">
          {myData.programmingSkills.slice(0, 4).map((skill) => (
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm transition-all hover:scale-110 hover:shadow-lg cursor-default">
              {skill.name}
            </span>
          ))}
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm transition-all hover:scale-110 hover:shadow-lg cursor-default">
            e muito mais...
          </span>
        </div>
      </div>

      <A
        href="/curriculum"
        class="mt-12 px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
      >
        Ver currículo completo
      </A>
    </main>
  );
}
