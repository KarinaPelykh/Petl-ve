import { Link } from "react-router";
import { Heading } from "../shared/ui/Heading";

export const NotFound = () => {
  return (
    <section className="container w-full h-dvh pb-5 ">
      <div className="bg-yellow  rounded-ms p-7.75 h-full flex flex-col  justify-center gap-5 items-center ">
        <Heading
          as="h1"
          className="text-9xl flex text-white justify-center items-center tablet-l:text-10xl desktop-l:mb-10"
        >
          4
          <div className=" bg-white/10 rounded-[50%] overflow-hidden">
            <img
              src="/image/pet-webP/cat2x.webp"
              width={109}
              height={109}
              className="tablet-l:size-70"
            />
          </div>
          4
        </Heading>
        <p className=" text-white text-m desktop-l:text-3xl desktop-l:mb-5">
          Ooops! This page not found :(
        </p>
        <Link to="/" className="bg-cream text-yellow rounded-m py-3 px-7.5">
          To home page
        </Link>
      </div>
    </section>
  );
};
