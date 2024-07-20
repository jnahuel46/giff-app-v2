import { titleFont } from "@/app/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center text-xs mb-10 bg-beige-100 h-[40px]">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold `}>
          Awesome Beaches{" "}
        </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacy & Legal
      </Link>

      <Link href="/" className="mx-3">
        Places
      </Link>
    </div>
  );
};
