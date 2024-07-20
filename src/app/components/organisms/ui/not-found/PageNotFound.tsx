import { titleFont } from "@/app/config/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! So sorry.</p>
        <p className="font-light">
          <span>Go back to </span>
          <Link href="/" className="font-normal hover:underline transition-all">
            home
          </Link>
        </p>
      </div>
    </div>
  );
};
