import React from "react";
import { TextInput } from "../../atoms/text-input/TextInput";
import { TopLeft } from "../../atoms/top-left-element/TopLeft";
import { TopRigth } from "../../atoms/top-rigth-element/TopRigth";

export const Header = () => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <TopLeft />
      <TextInput />
      <TopRigth />
    </div>
  );
};
