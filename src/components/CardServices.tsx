import Image from "next/image";
import React from "react";

interface Props {
  image: string
  title: string
  description: string
}
function CardServices({ image, title, description }: Props) {
  return (
    <>
      <div className="rounded-md h-full">
        <div className=" h-[164px] relative rounded-md">
          <Image
            src={image}
            alt=""
            className="h-full w-full object-cover rounded-md"
            width={400}
            height={400}
          />
        </div>
        <p className="text-center font-bold my-4">{title}</p>
        <p>{description}</p>
      </div>
    </>
  );
}

export default CardServices;
