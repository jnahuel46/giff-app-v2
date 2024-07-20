import React from "react";

export const TopRigth = () => {
  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 "
        href="https://astro-portfolio-lake.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        By Jere
      </a>
    </div>
  );
};
