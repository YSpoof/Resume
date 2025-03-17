import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="flex flex-col min-h-screen bg-white transition-colors duration-300">
          <main class="flex flex-grow">
            <section class="mx-auto w-full">
              <Suspense>{props.children}</Suspense>
            </section>
          </main>
          <Footer />
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
