import Image from "next/image";
import React from "react";

interface GifGridItemProps {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: GifGridItemProps) => {

  return (
    <div className="flex flex-col items-center justify-between m-10">
      <Image
        src={url}
        alt={title}
        width={400}
        height={400}
        priority
      />
      <p className="mt-5 font-mono text-sm">{title}</p>
    </div>
  );
};
