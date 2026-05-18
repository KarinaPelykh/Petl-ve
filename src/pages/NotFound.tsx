import { Link } from "react-router";
import { Heading } from "../shared/ui/Heading";

export const NotFound = () => {
  return (
    <section className="container w-full h-dvh pb-5 ">
      <div className="bg-yellow  rounded-ms p-7.75  flex flex-col  justify-center gap-5 items-center ">
        <Heading
          as="h1"
          className="text-9xl flex text-white justify-center items-center"
        >
          4
          <div className=" bg-white/10 rounded-full">
            <img
              src="/public/image/pet-webP/cat2x.webp"
              width={109}
              height={109}
            />
          </div>
          4
        </Heading>
        <p className=" text-white text-m ">Ooops! This page not found :(</p>
        <Link to="/" className="bg-cream text-yellow rounded-m py-3 px-7.5">
          To home page
        </Link>
      </div>
    </section>
  );
};
