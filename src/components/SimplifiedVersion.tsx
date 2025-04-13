import { BiSolidFilePdf } from "solid-icons/bi";

export default function SimplifiedVersion({ line = false }) {
  if (line) {
    return (
      <a
        href="/cv-luis-silva.pdf"
        class="text-blue-600 dark:text-blue-300 font-semibold hover:underline rounded-sm flex md:hidden items-center gap-2 justify-self-center mb-4"
        download={true}>
        <BiSolidFilePdf
          size={20}
          class="text-blue-600 dark:text-blue-300 self-baseline"
        />
        Versão simplificada
      </a>
    );
  }

  return (
    <div class="hidden md:flex flex-col items-center gap-2 text-sm md:text-base">
      <p class="text-center">
        <a
          href="/cv-luis-silva.pdf"
          class="text-stone-100 dark:text-blue-300 font-semibold hover:underline rounded-sm"
          download={true}>
          <BiSolidFilePdf
            size={80}
            class="text-stone-100 dark:text-blue-300 mx-auto"
          />
          Versão simplificada
        </a>
      </p>
    </div>
  );
}
