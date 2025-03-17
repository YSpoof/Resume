import { A } from "@solidjs/router";
import { IconTypes } from "solid-icons";

interface SkillIconProps {
  name: string;
  link: string;
  icon: IconTypes;
  glowColor?: string;
}

export const SkillIcon = (props: SkillIconProps) => {
  const glowColor = props.glowColor || "shadow-blue-500"; // Default blue glow

  return (
    <A
      href={props.link}
      target="_blank"
      class="flex flex-col items-center w-16"
    >
      <div
        class={`transition-all w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full hover:scale-105 active:scale-95 hover:shadow-sm ${glowColor}`}
      >
        {(() => {
          const Icon = props.icon;
          return <Icon size={30} class="text-gray-800" />;
        })()}
      </div>
      <span class="text-sm mt-1 text-center text-gray-700">{props.name}</span>
    </A>
  );
};
