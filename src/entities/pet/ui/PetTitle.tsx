// import clsx from "clsx";
import { Heading } from "../../../shared/ui/Heading";
import { Icon } from "../../../shared/ui/Icon";
import { usePetContext } from "../api/usePetContex";

export const PetTitle = () => {
  const { notice } = usePetContext();

  // const currentLIkes = Math.min(notice.popularity, 5000);
  // const rawRating = (currentLIkes / 5000) * 5;
  // const rating = Math.round(rawRating * 2) / 2;

  return (
    <div className="tablet-l:mb-2 flex items-center justify-between">
      <Heading as="h3" className="text-m tablet-l:text-xl">
        {notice.title}
      </Heading>
      <div className="flex items-center justify-between">
        <Icon name="star" className="fill-yellow mr-1 size-4" />
        <span>{notice.popularity}</span>
      </div>

      {/* <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((index) => {
          const isFilled = index <= rating;
          return (
            <Icon
              name="star"
              className={clsx(
                "size-4 transition-colors",
                isFilled ? "fill-yellow" : "fill-black/30",
              )}
              key={index}
            />
          );
        })}
      </div> */}
    </div>
  );
};
