<script lang="ts">
  import EmailIcon from "~icons/mdi/email";
  import WebIcon from "~icons/mdi/web";
  import GithubIcon from "~icons/mdi/github";
  import LinkedinIcon from "~icons/mdi/linkedin";
  import PinIcon from "~icons/mdi/pin";
  import TimerSandIcon from "~icons/mdi/timer-sand";
  import PdfIcon from "~icons/mdi/file-pdf-box";
  import AngularIcon from "~icons/vscode-icons/file-type-angular";
  import GitIcon from "~icons/vscode-icons/file-type-git";
  import NuxtIcon from "~icons/vscode-icons/file-type-nuxt";
  import TailwindIcon from "~icons/vscode-icons/file-type-tailwind";
  import TypeScriptIcon from "~icons/vscode-icons/file-type-typescript-official";
  import VueIcon from "~icons/vscode-icons/file-type-vue";
  import SvelteIcon from "~icons/vscode-icons/file-type-svelte";
  import BashIcon from "~icons/logos/bash-icon";
  import ZodIcon from "~icons/logos/zod";
  import NitroIcon from "~icons/unjs/nitro";
  import DrizzleIcon from "~icons/material-icon-theme/drizzle";
  import PostgresIcon from "~icons/devicon/postgresql";
  import GiteaIcon from "~icons/devicon/gitea";
  import LinuxIcon from "~icons/logos/linux-tux";
  import DockerIcon from "~icons/logos/docker-icon";

  type Props = {
    icon: string;
    size?: number;
    class?: string;
  };

  let { icon, size = 24, class: className }: Props = $props();

  const icons: Record<string, typeof EmailIcon> = {
    "mdi:email": EmailIcon,
    "mdi:web": WebIcon,
    "mdi:github": GithubIcon,
    "mdi:linkedin": LinkedinIcon,
    "mdi:pin": PinIcon,
    "mdi:timer-sand": TimerSandIcon,
    "mdi:file-pdf-box": PdfIcon,
    "vscode-icons:file-type-angular": AngularIcon,
    "vscode-icons:file-type-git": GitIcon,
    "vscode-icons:file-type-nuxt": NuxtIcon,
    "vscode-icons:file-type-tailwind": TailwindIcon,
    "vscode-icons:file-type-typescript-official": TypeScriptIcon,
    "vscode-icons:file-type-vue": VueIcon,
    "vscode-icons:file-type-svelte": SvelteIcon,
    "logos:bash-icon": BashIcon,
    "logos:zod": ZodIcon,
    "unjs:nitro": NitroIcon,
    "material-icon-theme:drizzle": DrizzleIcon,
    "devicon:postgresql": PostgresIcon,
    "devicon:gitea": GiteaIcon,
    "logos:linux-tux": LinuxIcon,
    "logos:docker-icon": DockerIcon,
    "logos:postgresql": PostgresIcon,
  };
</script>

{#if icons[icon]}
  {@const IconComponent = icons[icon]}
  <IconComponent width={size} height={size} class={className} />
{/if}
