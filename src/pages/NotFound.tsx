import { Link } from "react-router";
import { Heading } from "../shared/ui/Heading";

export const NotFound = () => {
  return (
    <section className="container h-dvh w-full pb-5">
      <div className="bg-yellow rounded-ms flex h-full flex-col items-center justify-center gap-5 p-7.75">
        <Heading
          as="h1"
          className="tablet-l:text-10xl desktop-l:mb-10 flex items-center justify-center text-9xl text-white"
        >
          4
          <div className="overflow-hidden rounded-[50%] bg-white/10">
            <img
              src="/image/pet-webP/cat2x.webp"
              width={109}
              height={109}
              className="tablet-l:size-70"
            />
          </div>
          4
        </Heading>
        <p className="text-m desktop-l:text-3xl desktop-l:mb-5 text-white">
          Ooops! This page not found :(
        </p>
        <Link to="/" className="bg-cream text-yellow rounded-m px-7.5 py-3">
          To home page
        </Link>
      </div>
    </section>
  );
};
