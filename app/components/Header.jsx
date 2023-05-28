import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="container flex mt-5 gap-6">
        <div className="">
          <Image
            className="inline"
            src={"/icon-a.png"}
            alt="Logo"
            width={"100"}
            height={"100"}
          ></Image>
        </div>
        <div className="pt-4">
          <h1 className="text-5xl">Music World</h1>
        </div>
      </div>
    </>
  );
}
