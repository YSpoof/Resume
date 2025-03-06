import { CgSandClock } from "solid-icons/cg";
import { Component, For } from "solid-js";
import { Dynamic } from "solid-js/web";
import userData from "./myData";

const Curriculum: Component = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 md:p-8">
      <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div class="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={userData.photo}
              alt={userData.name}
              class="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div class="text-center md:text-left">
              <h1 class="text-3xl md:text-4xl font-bold">{userData.name}</h1>
              <h2 class="text-xl md:text-2xl mt-2 font-light">
                {userData.jobTitle}
              </h2>
              <p class="mt-3 max-w-xl text-blue-50">{userData.bio}</p>

              <div class="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{userData.location}</span>
                </div>
                <div class="flex items-center gap-2">
                  <CgSandClock size={20} />
                  <span>{userData.age}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
          {/* Left Column */}
          <div class="lg:col-span-1 space-y-8">
            {/* Contact Info */}
            <div class="bg-blue-50 rounded-lg p-5 shadow-sm">
              <h3 class="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
                Contato
              </h3>
              <div class="space-y-3">
                <a
                  href={`mailto:${userData.contact.email}`}
                  class="flex items-center gap-3 text-blue-600 hover:text-green-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{userData.contact.email}</span>
                </a>
                <a
                  href={userData.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-blue-600 hover:text-green-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>Website</span>
                </a>
                <a
                  href={userData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-blue-600 hover:text-green-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href={userData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-blue-600 hover:text-green-600 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Skills */}
            <div class="bg-green-50 rounded-lg p-5 shadow-sm">
              <h3 class="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
                Habilidades
              </h3>
              <div class="space-y-4">
                <For each={userData.skills}>
                  {(skill) => (
                    <div class="space-y-1">
                      <div class="flex justify-between items-center">
                        <span class="font-medium text-gray-800">
                          {skill.name}
                        </span>
                        <span class="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {skill.level}
                        </span>
                      </div>
                      <p class="text-sm text-gray-600">{skill.description}</p>
                    </div>
                  )}
                </For>
              </div>
            </div>

            {/* Education */}
            <div class="bg-blue-50 rounded-lg p-5 shadow-sm">
              <h3 class="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
                Formação
              </h3>
              <div class="space-y-4">
                <For each={userData.education}>
                  {(edu) => (
                    <div>
                      <h4 class="font-medium text-gray-800">{edu.name}</h4>
                      <div class="flex justify-between text-sm mt-1">
                        <span class="text-gray-600">{edu.location}</span>
                        <span class="text-blue-600">{edu.date}</span>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div class="lg:col-span-2 space-y-8">
            {/* Programming Skills */}
            <div class="bg-gradient-to-r from-blue-100/60 to-green-100/60 rounded-lg p-5 shadow-sm">
              <h3 class="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
                Tecnologias
              </h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <For each={userData.programmingSkills}>
                  {(skill) => (
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={`flex flex-col items-center gap-2 p-4 rounded-lg bg-white hover:bg-opacity-80 transition-all hover:-translate-y-1 ${skill.glowColor} hover:shadow-md`}
                    >
                      <Dynamic
                        component={skill.icon}
                        class="h-8 w-8 text-gray-700"
                      />
                      <span class="font-medium text-gray-800">
                        {skill.name}
                      </span>
                    </a>
                  )}
                </For>
              </div>
            </div>

            {/* Work Experience */}
            <div class="bg-white rounded-lg p-5 shadow-sm border border-green-100">
              <h3 class="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
                Experiência Profissional
              </h3>
              <div class="space-y-6">
                <For each={userData.jobs}>
                  {(job) => (
                    <div class="relative pl-6 border-l-2 border-blue-300">
                      <div class="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-green-500"></div>
                      <div class="mb-1">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <h4 class="font-bold text-gray-800">{job.title}</h4>
                          <span class="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {job.date}
                          </span>
                        </div>
                        <h5 class="text-gray-600 font-medium">{job.company}</h5>
                      </div>
                      <p class="text-gray-700 mt-2">{job.description}</p>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div class="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 text-center">
          <p>
            © {new Date().getFullYear()} {userData.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
