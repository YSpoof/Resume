import { A } from "@solidjs/router";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "solid-icons/ai";
import { FiGlobe } from "solid-icons/fi";
import { Index } from "solid-js";
import { SkillIcon } from "~/components/curriculum/SkillIcon";
import myData from "~/myData";

export default function Curriculum() {
  return (
    <main class="max-w-4xl mx-auto text-gray-800 dark:text-gray-200 p-6">
      {/* Header Section */}
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

      {/* Content Card */}
      <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        {/* Contact Information */}
        <div class="mb-10">
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Informações para Contato
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            <div class="flex items-center gap-3">
              <AiOutlineMail
                class="text-blue-600 dark:text-blue-400"
                size={24}
              />
              <a
                href={`mailto:${myData.contact.email}`}
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {myData.contact.email}
              </a>
            </div>
            <div class="flex items-center gap-3">
              <FiGlobe class="text-blue-600 dark:text-blue-400" size={22} />
              <A
                target="_blank"
                href={myData.contact.website}
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {myData.contact.website.replace(/https?:\/\//, "")}
              </A>
            </div>
            <div class="flex items-center gap-3">
              <AiFillLinkedin
                class="text-blue-600 dark:text-blue-400"
                size={24}
              />
              <A
                target="_blank"
                href={myData.contact.linkedin}
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </A>
            </div>
            <div class="flex items-center gap-3">
              <AiFillGithub
                class="text-blue-600 dark:text-blue-400"
                size={24}
              />
              <A
                target="_blank"
                href={myData.contact.github}
                class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </A>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div class="mb-10">
          <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Tecnologias
          </h2>
          <div class="flex flex-wrap gap-5 mt-4 justify-center">
            <Index each={myData.programmingSkills}>
              {(skill) => (
                <SkillIcon
                  name={skill().name}
                  link={skill().link}
                  icon={skill().icon}
                  glowColor={skill().glowColor}
                />
              )}
            </Index>
          </div>
        </div>

        {/* Two-column layout for academic and experience */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic */}
          <div>
            <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Formação Acadêmica
            </h2>
            <div class="space-y-5">
              <Index each={myData.education}>
                {(education) => (
                  <div class="transition-all bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:scale-105 hover:shadow-lg">
                    <h3 class="font-bold text-lg">{education().name}</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      {education().location}
                    </p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">
                      {education().date}
                    </p>
                  </div>
                )}
              </Index>
            </div>

            {/* Additional Skills */}
            <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 mt-8">
              Outras Habilidades
            </h2>
            <div class="space-y-5">
              <Index each={myData.skills}>
                {(skill) => (
                  <div class="transition-all bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:scale-105 hover:shadow-lg">
                    <div class="flex justify-between">
                      <h3 class="font-bold text-lg">{skill().name}</h3>
                      <span>{skill().level}</span>
                    </div>
                    <p>{skill().description}</p>
                  </div>
                )}
              </Index>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 class="text-2xl font-bold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Experiência Profissional
            </h2>
            <div class="space-y-5">
              <Index each={myData.jobs}>
                {(job) => (
                  <div class="transition-all bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:scale-105 hover:shadow-lg">
                    <h3 class="font-bold text-lg">{job().title}</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                      {job().company}
                    </p>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">
                      {job().date}
                    </p>
                    <p class="mt-2 text-pretty">{job().description}</p>
                  </div>
                )}
              </Index>
            </div>
          </div>
        </div>
      </div>

      {/* Return to home button */}
      <div class="mt-8 text-center">
        <A
          href="/"
          class="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg inline-block"
        >
          Voltar à página inicial
        </A>
      </div>
    </main>
  );
}
