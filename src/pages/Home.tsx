import { Heading } from "../shared/ui/Heading";
import { HeaderNav } from "../widget/header/HeaderNav";

export const HomePage = () => {
  return (
    <section className="container text-5xl py-2.5 tablet-l:py-4">
      <div className="bg-yellow rounded-ms pb-12.5 px-5 tablet-l:rounded-m flex flex-col tablet-l:px-8 tablet-l:pb-11 desktop-l:px-16 desktop-l:pb-8">
        <div className="pt-4.5 mb-15 tablet-l:pt-6.75 tablet-l:mb-30.75">
          <HeaderNav />
        </div>
        <div className="desktop-l:flex  desktop-l:items-end  ">
          <Heading
            as="h1"
            className="text-white mb-6 text-5xl tablet-l:text-7xl tablet-l:mb-8 desktop-l:text-8xl! desktop-l:w-190 desktop-l:mb-0"
          >
            Take good <span className="text-white/40">care</span> of your small
            pets
          </Heading>
          <p className="ml-auto text-white text-ms tablet-l:w-63.75 tablet-l:text-xl font-medium ">
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
      </div>

      <div>
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet="/image/home_desk2@x.webp"
          />
          <source media="(min-width:768px)" srcSet="/image/home_tab2@x.webp" />
          <img
            src="/image/home_mob2@x.webp"
            alt="bg"
            className="block w-full h-auto object-contain rounded-ms tablet-l:rounded-m"
          />
        </picture>
      </div>
    </section>
  );
};
