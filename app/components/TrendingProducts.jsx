import React from "react";
import Image from "next/image";

export default function TrendingProducts() {
  return (
    <>
      <div className="mt-10 text-center basis-[270px] flex-grow border shadow">
        <Image
          className="w-full"
          src={"/icon-b.png"}
          alt="Album-cover"
          width={200}
          height={200}
        ></Image>
        <hr />
        <div>
          <p>Madcity</p>
          <p>J cole</p>
        </div>
      </div>
    </>
  );
}
