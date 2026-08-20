import { Heading } from "../../../shared/ui/Heading";
import type { Data } from "../../../widget/partnerlist/PartnerList";

type PartnerCardProps = {
  item: Data;
};

export const PartnerCard = ({ item }: PartnerCardProps) => {
  const workDay = item?.workDays?.filter((workDay) => workDay.isOpen)[0];

  const workingHours = workDay
    ? `${workDay?.from}:${workDay?.to}`
    : "Day and night";

  return (
    <li className="group shadow-base before:bg-yellow relative flex flex-col overflow-hidden rounded-xs bg-white p-5 pb-10 transition-all duration-300 ease-out before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-0 before:-translate-x-1/2 before:transition-all before:duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] hover:before:w-full">
      <span className="tablet-l:absolute tablet-l:top-3 tablet-l:right-3 rounded-ms bg-cream text-s text-yellow group-hover:bg-yellow ml-auto w-fit p-2 transition-all duration-300 group-hover:-rotate-2 group-hover:text-white">
        {workingHours}
      </span>

      <div className="tablet-l:gap-4 flex gap-3.5">
        <img
          className="tablet-l:size-22.5 size-20 rounded-[50%] transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
          alt=""
          src={item.imageUrl}
          width={80}
          height={80}
        />

        <div>
          <Heading
            as="h3"
            className="text-m tablet-l:text-1xl tablet-l:mb-5 mb-3.5 transition-transform duration-300 group-hover:translate-x-1"
          >
            {item.title}
          </Heading>

          <ul className="text-ms flex flex-col gap-2">
            <li className="max-tablet-l:truncate max-tablet-l:w-36.5 text-black/50 transition-transform duration-300 group-hover:translate-x-1">
              Email:
              <a href="mailto:whiskas@gmail.com" className="text-black">
                {item.email ?? "UNknown"}
              </a>
            </li>

            <li className="max-tablet-l:truncate max-tablet-l:w-36.5 text-black/50 transition-transform delay-75 duration-300 group-hover:translate-x-1">
              Address:
              <a
                href={item.addressUrl ?? item.url}
                className="text-black"
                target="_blank"
                rel="noopener_noreferrer"
              >
                {item.address ?? " website only"}
              </a>
            </li>

            <li className="max-tablet-l:truncate max-tablet-l:w-36.5 text-black/50 transition-transform delay-100 duration-300 group-hover:translate-x-1">
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
