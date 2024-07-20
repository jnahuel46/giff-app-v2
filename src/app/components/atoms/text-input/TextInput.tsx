"use client";

import { useRouter } from "next/navigation";
import React, { useState, KeyboardEvent } from "react";

export const TextInput = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      router.push(`?category=${value}`);
    }
  };

  return (
    <input
      className="relative h-[40px] lg:h-[54px] left-0 top-0 flex w-full justify-center text-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 lg:text-left"
      placeholder="Type here to search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
