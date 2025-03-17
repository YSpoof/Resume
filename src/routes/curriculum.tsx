import { A } from "@solidjs/router";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "solid-icons/ai";
import { FaSolidChalkboard } from "solid-icons/fa";
import { FiGlobe } from "solid-icons/fi";
import {
  IoArrowBackOutline,
  IoBookOutline,
  IoSchoolOutline,
} from "solid-icons/io";
import { SiInstagram } from "solid-icons/si";
import { VsGlobe } from "solid-icons/vs";
import { Index } from "solid-js";
import { SkillIcon } from "~/components/curriculum/SkillIcon";
import myData from "~/myData";

export default function Curriculum() {
  return (
    <main class="min-h-screen bg-[#f8f9ff] text-slate-700 p-6 pb-12">
      {/* Navigation Bar with Return Button */}
      <div class="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-10 px-6 py-3">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <A
            href="/"
            class="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <IoArrowBackOutline size={18} />
            <span class="font-medium">Voltar</span>
          </A>
          <h2 class="font-bold text-indigo-700">Currículo Educacional</h2>
        </div>
      </div>

      <div class="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Sidebar with Personal Info */}
        <div class="lg:col-span-1">
          <div class="sticky top-20">
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 mb-6">
              {/* Profile Photo with Decorative Elements */}
              <div class="flex flex-col items-center mb-6 relative">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-indigo-100 rounded-full -z-10 blur-md"></div>
                <img
                  src={myData.photo}
                  alt={myData.name}
                  class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4 z-0"
                />
                <div class="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-full shadow-md">
                  <FaSolidChalkboard size={18} />
                </div>

                <h1 class="text-2xl font-bold text-indigo-700 text-center mt-2">
                  {myData.name}
                </h1>
                <p class="text-purple-600 font-medium flex items-center gap-2 text-sm mt-1">
                  {myData.location} •{" "}
                  <span class="text-indigo-600">{myData.jobTitle}</span>•{" "}
                  {myData.age}
                </p>
              </div>

              {/* Contact Information */}
              <div class="space-y-3 pt-4 border-t border-indigo-100">
                <div class="flex items-center gap-3">
                  <AiOutlineMail
                    class="text-indigo-600 min-w-[20px]"
                    size={20}
                  />
                  <a
                    href={`mailto:${myData.contact.email}`}
                    class="text-sm hover:text-purple-600 transition-colors truncate"
                  >
                    {myData.contact.email}
                  </a>
                </div>
                <div class="flex items-center gap-3">
                  <FiGlobe class="text-indigo-600 min-w-[20px]" size={18} />
                  <A
                    target="_blank"
                    href={myData.contact.website}
                    class="text-sm hover:text-purple-600 transition-colors truncate"
                  >
                    {myData.contact.website.replace(/https?:\/\//, "")}
                  </A>
                </div>
                <div class="flex items-center gap-3">
                  <SiInstagram class="text-indigo-600 min-w-[20px]" size={20} />
                  <A
                    target="_blank"
                    href={myData.contact.instagram}
                    class="text-sm hover:text-purple-600 transition-colors"
                  >
                    Instagram
                  </A>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div class="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
              <div class="flex items-center gap-2 mb-4">
                <IoBookOutline class="text-indigo-600" size={20} />
                <h2 class="text-lg font-semibold text-indigo-700">
                  Outras Habilidades
                </h2>
              </div>
              <div class="space-y-4">
                <Index each={myData.skills}>
                  {(skill) => (
                    <div class="transition-all bg-gradient-to-r from-indigo-50/60 to-purple-50/60 p-3 rounded-lg hover:shadow-md">
                      <div class="flex justify-between items-center">
                        <h3 class="font-medium text-indigo-700">
                          {skill().name}
                        </h3>
                        <span class="text-purple-600 text-sm bg-purple-50 px-2 py-0.5 rounded-full">
                          {skill().level}
                        </span>
                      </div>
                      <p class="text-slate-600 text-sm mt-1">
                        {skill().description}
                      </p>
                    </div>
                  )}
                </Index>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div class="lg:col-span-2 space-y-8">
          {/* Tools & Methods */}
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div class="flex items-center gap-2 mb-4">
              <IoSchoolOutline class="text-indigo-600" size={22} />
              <h2 class="text-xl font-semibold text-indigo-700">
                Ferramentas e Tecnologias
              </h2>
            </div>
            <div class="flex flex-wrap gap-4 mt-4">
              <Index each={myData.tools}>
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

          {/* Academic Formation */}
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div class="flex items-center gap-2 mb-6">
              <IoSchoolOutline class="text-indigo-600" size={22} />
              <h2 class="text-xl font-semibold text-indigo-700">
                Formação Acadêmica
              </h2>
            </div>
            <div class="space-y-5 relative">
              {/* Timeline line */}
              <div class="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-50"></div>

              <Index each={myData.education}>
                {(education, index) => (
                  <div class="ml-12 relative">
                    {/* Timeline dot */}
                    <div class="absolute -left-12 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white shadow-md"></div>

                    <div class="transition-all bg-gradient-to-r from-indigo-50/60 to-purple-50/60 p-4 rounded-lg shadow-sm border border-indigo-100/50 hover:shadow-md">
                      <h3 class="font-bold text-lg text-indigo-700">
                        {education().name}
                      </h3>
                      <p class="text-purple-600">{education().location}</p>
                      <p class="text-slate-500 text-sm">{education().date}</p>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>

          {/* Professional Experience */}
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div class="flex items-center gap-2 mb-6">
              <IoBookOutline class="text-indigo-600" size={22} />
              <h2 class="text-xl font-semibold text-indigo-700">
                Experiência Profissional
              </h2>
            </div>
            <div class="space-y-5 relative">
              {/* Timeline line */}
              <div class="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-50"></div>

              <Index each={myData.jobs}>
                {(job) => (
                  <div class="ml-12 relative">
                    {/* Timeline dot */}
                    <div class="absolute -left-12 w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-md"></div>

                    <div class="transition-all bg-gradient-to-r from-indigo-50/60 to-purple-50/60 p-4 rounded-lg shadow-sm border border-indigo-100/50 hover:shadow-md">
                      <h3 class="font-bold text-lg text-indigo-700">
                        {job().title}
                      </h3>
                      <p class="text-purple-600">{job().company}</p>
                      <p class="text-slate-500 text-sm">{job().date}</p>
                      <p class="mt-2 text-slate-600 text-sm">
                        {job().description}
                      </p>
                    </div>
                  </div>
                )}
              </Index>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto mt-8 text-center">
        <p class="text-sm text-slate-500 italic">
          "Se a educação sozinha não transforma a sociedade, sem ela tampouco a
          sociedade muda." — Paulo Freire
        </p>
      </div>
    </main>
  );
}
