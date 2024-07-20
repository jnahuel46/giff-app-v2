import { Suspense } from "react";
import { GifGrid, Header } from "./components";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Suspense>
        <GifGrid />
      </Suspense>
    </main>
  );
}
