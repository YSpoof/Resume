import { FiGlobe, FiMail } from "solid-icons/fi";
import { SiGithub, SiLinkedin } from "solid-icons/si";
import { MyData } from "../myData";

interface props {
  userData: MyData;
}

export default function Contact({ userData }: props) {
  return (
    <div class="bg-blue-50 dark:bg-stone-800 rounded-lg p-5 shadow-sm">
      <h3 class="text-xl font-semibold text-blue-700 dark:text-stone-300 mb-4 border-b border-blue-200 dark:border-stone-200 pb-2">
        Contato
      </h3>
      <div class="space-y-3">
        <a
          href={`mailto:${userData.contact.email}`}
          class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors"
        >
          <FiMail size={20} class="self-start" />
          <span>{userData.contact.email}</span>
        </a>
        <a
          href={userData.contact.website}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors"
        >
          <FiGlobe size={20} class="self-start" />
          <span>Website</span>
        </a>
        <a
          href={userData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors"
        >
          <SiGithub size={20} class="self-start" />
          <span>GitHub</span>
        </a>
        <a
          href={userData.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 text-blue-600 dark:text-stone-300 hover:text-stone-200 transition-colors"
        >
          <SiLinkedin size={20} class="self-start" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
