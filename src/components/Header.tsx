import { CgSandClock } from "solid-icons/cg";
import { FaSolidLocationDot } from "solid-icons/fa";
import { MyData } from "../myData";

interface props {
  userData: MyData;
}

export default function Header({ userData }: props) {
  return (
    <div class="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-stone-800 dark:to-stone-700 text-white dark:text-stone-300 p-6 md:p-8">
      <div class="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={userData.photo}
          alt={userData.name}
          class="transition-all w-32 h-32 rounded-full border-4 border-white dark:border-stone-300 shadow-lg object-cover hover:scale-105 hover:shadow-xl"
        />
        <div class="text-center md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold dark:text-stone-200">
            {userData.name}
          </h1>
          <h2 class="text-xl md:text-2xl mt-2 font-light dark:text-stone-300">
            {userData.jobTitle}
          </h2>
          <p class="mt-3 max-w-xl text-blue-50">{userData.bio}</p>

          <div class="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <div class="flex items-center gap-2">
              <FaSolidLocationDot size={20} class="self-start" />
              <span>{userData.location}</span>
            </div>
            <div class="flex items-center gap-2">
              <CgSandClock size={20} class="self-start" />
              <span>{userData.age}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
