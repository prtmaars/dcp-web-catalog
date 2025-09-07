"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language.startsWith("id") ? "id" : "en";
    router.replace(`/${lang}`);
  }, [router]);

  return (
    <main className="flex h-screen items-center justify-center">
      <p className="text-lg">Redirecting...</p>
    </main>
  );
}
