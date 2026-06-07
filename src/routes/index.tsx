import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bahan Ajar UT — SPA" },
      { name: "description", content: "Aplikasi manajemen bahan ajar UT (stok, tracking DO, order)." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/bahan-ajar/index.html");
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-300">
      <a href="/bahan-ajar/index.html" className="underline">Buka aplikasi Bahan Ajar →</a>
    </div>
  );
}
