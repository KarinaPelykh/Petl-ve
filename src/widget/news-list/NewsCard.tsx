import { Link } from "react-router";
import { useFormatDate } from "../../shared/hooks/useFormatDate";
import { Heading } from "../../shared/ui/Heading";
import type { New } from "../../pages/News";

type NewsCardProps = {
  item: New;
};

export const NewsCard = ({ item }: NewsCardProps) => {
  const date = useFormatDate(item.date);

  return (
    <li className="desktop-l:w-90.25 tablet-l:h-119 shadow-base flex flex-col rounded-xs">
      <div className="tablet-l:mb-0! desktop-l:h[226px] tablet-l:h-56.5 mb-5 h-47.5 w-full overflow-hidden rounded-xs">
        <img
          alt="news"
          src={item.imgUrl}
          width={335}
          height={190}
          className="block h-auto w-full object-cover"
        />
      </div>
      <div className="tablet-l:py-7 flex flex-1 flex-col p-2.5">
        <div className="flex flex-col">
          <Heading
            as="h2"
            className="text-m tablet-l:text-1xl tablet-l:mb-3.5 mb-3"
          >
            {item.title}
          </Heading>
          <p className="text-ms tablet-l:text-m tablet-l:font-medium">
            {item.text}
          </p>
        </div>
        <div className="tablet-l:mt-auto! text-ms tablet-l:font-medium tablet-l:text-m mt-5 flex items-center justify-between">
          <span className="text-black/50">{date}</span>
          <Link
            to={item.url}
            target="black"
            className="text-yellow p-0! font-normal! underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </li>
  );
};
