import type { New } from "../../shared/api/redux/news/types";
import { Button } from "../../shared/ui/Button";
import { Heading } from "../../shared/ui/Heading";

type NewsCardProps = {
  item: New;
};

export const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <li className="desktop-l:h-[476px] desktop-l:w-fit">
      <div className="rounded-xs mb-5 overflow-hidden tablet-l:mb-7 w-fit">
        <img
          alt="new"
          src={item.imgUrl}
          width={335}
          height={190}
          className="block w-full h-auto desktop-l:w-[361px] desktop-l:h-[226px]"
        />
      </div>

      <div className="desktop-l:py-7 flex flex-col desktop-l:w-[361px]">
        <Heading
          as="h2"
          className="text-m mb-3 tablet-l:text-1xl tablet-l:mb-3.5"
        >
          {item.title}
        </Heading>
        <p className="text-ms mb-5 tablet-l:text-m tablet-l:font-medium">
          {item.text}
        </p>
        <div
          className="flex justify-between items-center text-ms tablet-l:font-medium
 tablet-l:text-m"
        >
          <span className="text-black/50 ">{item.date}</span>
          <Button className="text-yellow underline p-0! ">Read more</Button>
        </div>
      </div>
    </li>
  );
};
