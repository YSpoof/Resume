import { A } from "@solidjs/router";
import { FaSolidChalkboard } from "solid-icons/fa";
import { IoBookOutline, IoSchoolOutline } from "solid-icons/io";
import { SiInstagram } from "solid-icons/si";
import { VsGlobe } from "solid-icons/vs";
import myData from "~/myData";

export default function Home() {
  return (
    <main class="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-slate-700 p-6">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div class="flex flex-col items-center mb-10">
          <div class="relative">
            <div class="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-lg opacity-40"></div>
            <img
              src={myData.photo}
              alt={myData.name}
              class="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-4 transition-all hover:scale-105"
            />
            <div class="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-full shadow-md">
              <FaSolidChalkboard size={20} />
            </div>
          </div>
          <h1 class="text-4xl font-bold text-indigo-700">{myData.name}</h1>
          <p class="text-purple-600 mt-2 font-medium flex items-center gap-2">
            {myData.location} •{" "}
            <span class="text-indigo-600">{myData.jobTitle}</span>• {myData.age}
          </p>
        </div>

        {/* About Section */}
        <div class="w-full bg-white rounded-xl p-6 shadow-md border border-indigo-100 mb-8">
          <div class="flex items-center gap-2 mb-3">
            <IoBookOutline class="text-indigo-600" size={24} />
            <h2 class="text-xl font-semibold text-indigo-700">Sobre Mim</h2>
          </div>
          <p class="text-lg text-slate-600 leading-relaxed">{myData.whoami}</p>
        </div>

        {/* Social Links */}
        <div class="flex gap-4 mb-8">
          <a
            href={myData.contact.website}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 py-2 px-4 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            <VsGlobe size={22} class="text-slate-700" />
            <span class="text-slate-700">Website</span>
          </a>
          <a
            href={myData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 py-2 px-4 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            <SiInstagram size={22} class="text-slate-700" />
            <span class="text-slate-700">Instagram</span>
          </a>
        </div>

        {/* Expertise Section */}
        <div class="w-full bg-white rounded-xl p-6 shadow-md border border-indigo-100 mb-10">
          <div class="flex items-center gap-2 mb-4">
            <IoSchoolOutline class="text-indigo-600" size={24} />
            <h2 class="text-xl font-semibold text-indigo-700">
              Ferramentas e Tecnologias
            </h2>
          </div>

          <div class="flex gap-3 flex-wrap">
            {myData.tools.slice(0, 5).map((tool) => (
              <span class="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-800 rounded-full text-sm border border-indigo-100 hover:shadow-sm transition-all">
                {tool.name}
              </span>
            ))}
            <span class="px-3 py-1 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-800 rounded-full text-sm border border-purple-100 hover:shadow-sm transition-all">
              e muito mais...
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <A
          href="/curriculum"
          class="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <IoSchoolOutline size={20} />
          <span>Ver currículo acadêmico completo</span>
        </A>

        {/* Footer Quote */}
        <p class="mt-12 text-center text-sm text-slate-500 italic">
          "Se a educação sozinha não transforma a sociedade, sem ela tampouco a
          sociedade muda." — Paulo Freire
        </p>
      </div>
    </main>
  );
}
