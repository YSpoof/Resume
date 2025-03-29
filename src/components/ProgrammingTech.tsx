import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import { MyData } from "../myData";

interface props {
  userData: MyData;
}

export default function ProgrammingTech({ userData }: props) {
  return (
    <div class="bg-gradient-to-r from-blue-100/60 to-cyan-100/60 dark:from-stone-800 dark:to-stone-700 rounded-lg p-5 shadow-sm">
      <h3 class="text-xl font-semibold text-blue-700 dark:text-stone-300  mb-4 border-b border-blue-200 dark:border-stone-200 pb-2">
        Tecnologias
      </h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <For each={userData.programmingTech}>
          {(skill) => (
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              class={`flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-stone-200 hover:bg-opacity-80 transition-all hover:-translate-y-1 ${skill.glowColor} hover:shadow-md`}
            >
              <Dynamic component={skill.icon} class="h-8 w-8 text-gray-700" />
              <span class="font-medium text-gray-800">{skill.name}</span>
            </a>
          )}
        </For>
      </div>
    </div>
  );
}
