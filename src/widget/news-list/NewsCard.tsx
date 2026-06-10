import { Link } from "react-router";
import type { New } from "../../shared/api/redux/news/types";
import { useFormatDate } from "../../shared/hooks/useFormatDate";
import { Heading } from "../../shared/ui/Heading";

type NewsCardProps = {
  item: New;
};

export const NewsCard = ({ item }: NewsCardProps) => {
  const date = useFormatDate(item.date);

  return (
    <li className="flex flex-col desktop-l:w-90.25 tablet-l:h-119">
      <div className="rounded-xs mb-5 tablet-l:mb-0! desktop-l:h[226px]   tablet-l:h-56.5 h-47.5 overflow-hidden w-fit">
        <img
          alt="news"
          src={item.imgUrl}
          width={335}
          height={190}
          className="block object-cover w-full h-auto "
        />
      </div>
      <div className="flex flex-col flex-1 tablet-l:py-7  ">
        <div className="flex flex-col">
          <Heading
            as="h2"
            className="text-m mb-3 tablet-l:text-1xl tablet-l:mb-3.5"
          >
            {item.title}
          </Heading>
          <p className="text-ms tablet-l:text-m tablet-l:font-medium">
            {item.text}
          </p>
        </div>
        <div
          className="flex justify-between items-center   tablet-l:mt-auto!  mt-5  text-ms tablet-l:font-medium
 tablet-l:text-m"
        >
          <span className="text-black/50 ">{date}</span>
          <Link to={item.url} target="black" className="text-yellow  p-0! ">
            Read more
          </Link>
        </div>
      </div>
    </li>
  );
};
