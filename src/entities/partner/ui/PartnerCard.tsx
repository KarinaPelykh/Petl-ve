import { Heading } from "../../../shared/ui/Heading";
import type { Data } from "../../../widget/partnerlist/PartnerList";

type PartnerCardProps = {
  item: Data;
};

export const PartnerCard = ({ item }: PartnerCardProps) => {
  return (
    <li className="bg-white rounded-xs  p-5 pb-10  flex flex-col tablet-l:relative tablet-l:py-10 ">
      <span className="rounded-ms text-yellow bg-cream p-2 w-fit ml-auto text-s tablet-l:text-ms tablet-l:absolute tablet-l:top-3 tablet-l:right-3">
        08:00 - 19:00
      </span>
      <div className="flex gap-3.5 tablet-l:gap-4">
        <img
          className="size-20 rounded-[50%] tablet-l:size-22.5"
          alt=""
          src={item.imageUrl}
          width={80}
          height={80}
        />
        <div>
          <Heading
            as="h3"
            className="text-m mb-3.5 tablet-l:text-1xl tablet-l:mb-5"
          >
            {item.title}
          </Heading>
          <ul className="flex flex-col gap-2 text-ms">
            <li className="text-black/50">
              Email:
              <a href="mailto:whiskas@gmail.com" className="text-black">
                {item.email ?? "UNknown"}
              </a>
            </li>
            <li className="text-black/50">
              Address:
              <a
                href={item.addressUrl ?? item.url}
                className="text-black"
                target="blank"
                rel="noopener_noreferrer"
              >
                {item.address ?? " website only"}
              </a>
            </li>
            <li className="text-black/50">
              Phone:
              <a href={`tel:${item.phone}`} className="text-black">
                {item.phone ?? "Unknown"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
