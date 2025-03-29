import { MyData } from "../myData";

interface props {
  userData: MyData;
}

export default function Footer({ userData }: props) {
  return (
    <div class="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-stone-800 dark:to-stone-700 dark:text-stone-300 text-white p-4 text-center">
      <p>
        © {new Date().getFullYear()} {userData.name}
      </p>
    </div>
  );
}
