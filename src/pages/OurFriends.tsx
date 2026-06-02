import { Heading } from "../shared/ui/Heading";

export const OurFriends = () => {
  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <Heading as="h1" className="mb-5 text-2xl tablet-l:text-6xl">
          Our friends
        </Heading>
        <ul>
          <li className="bg-white rounded-xs p-5 pb-10  flex flex-col">
            <span className="rounded-ms text-yellow bg-cream p-2 w-fit ml-auto text-s">
              08:00 - 19:00
            </span>
            <div className="flex gap-3.5">
              <img className="size-20 rounded-[50%]" />
              <div>
                <Heading as="h3" className="text-m mb-3.5">
                  Whiskas
                </Heading>
                <div className="flex flex-col gap-2 text-ms">
                  <a href="mailto:whiskas@gmail.com">
                    Email: whiskas@gmail.com
                  </a>
                  <a href="">Address: website only</a>
                  <a href="tel:0–800–500–155">Phone: 0–800–500–155</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
