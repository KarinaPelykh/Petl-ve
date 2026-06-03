import { Heading } from "../../../shared/ui/Heading";

export const PartnerCard = () => {
  return (
    <li className="bg-white rounded-xs  p-5 pb-10  flex flex-col tablet-l:relative tablet-l:py-10 ">
      <span className="rounded-ms text-yellow bg-cream p-2 w-fit ml-auto text-s tablet-l:text-ms tablet-l:absolute tablet-l:top-3 tablet-l:right-3">
        08:00 - 19:00
      </span>
      <div className="flex gap-3.5 tablet-l:gap-4">
        <img
          className="size-20 rounded-[50%] tablet-l:size-22.5"
          alt=""
          src=""
          width={80}
          height={80}
        />
        <div>
          <Heading
            as="h3"
            className="text-m mb-3.5 tablet-l:text-1xl tablet-l:mb-5"
          >
            Whiskas
          </Heading>
          <ul className="flex flex-col gap-2 text-ms">
            <li className="text-black/50">
              Email:
              <a href="mailto:whiskas@gmail.com" className="text-black">
                whiskas@gmail.com
              </a>
            </li>
            <li className="text-black/50">
              Address:
              <a href="" className="text-black">
                website only
              </a>
            </li>
            <li className="text-black/50">
              Phone:
              <a href="tel:0–800–500–155" className="text-black">
                0–800–500–155
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
