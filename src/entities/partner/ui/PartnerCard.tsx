import { Heading } from "../../../shared/ui/Heading";
import type { Data } from "../../../widget/partnerlist/PartnerList";

type PartnerCardProps = {
  item: Data;
};

export const PartnerCard = ({ item }: PartnerCardProps) => {
  return (
    <li className="tablet-l:relative tablet-l:py-10 flex flex-col rounded-xs bg-white p-5 pb-10">
      <span className="rounded-ms text-yellow bg-cream text-s tablet-l:text-ms tablet-l:absolute tablet-l:top-3 tablet-l:right-3 ml-auto w-fit p-2">
        08:00 - 19:00
      </span>
      <div className="tablet-l:gap-4 flex gap-3.5">
        <img
          className="tablet-l:size-22.5 size-20 rounded-[50%]"
          alt=""
          src={item.imageUrl}
          width={80}
          height={80}
        />
        <div>
          <Heading
            as="h3"
            className="text-m tablet-l:text-1xl tablet-l:mb-5 mb-3.5"
          >
            {item.title}
          </Heading>
          <ul className="text-ms flex flex-col gap-2">
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
