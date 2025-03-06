const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer class="text-center bg-gray-800 text-white p-4">
      <p>
        © {year} -{" "}
        <a href="https://lzart.com.br" target="_blank" class="underline">
          LZArt
        </a>
      </p>
    </footer>
  );
}
