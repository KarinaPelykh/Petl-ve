import clsx from "clsx";
import { Icon } from "../../../shared/ui/Icon";
import { usePetContext } from "../api/usePetContex";

export const PetPopularity = () => {
  const { notice } = usePetContext();

  const currentLIkes = Math.min(notice.popularity, 5000);
  const rawRating = (currentLIkes / 5000) * 5;
  const rating = Math.round(rawRating * 2) / 2;

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((index) => {
        const isFilled = index <= rating;
        return (
          <Icon
            name="star"
            className={clsx(
              "size-4 transition-colors",
              isFilled ? "fill-yellow" : "fill-black/5",
            )}
            key={index}
          />
        );
      })}
      <span>{notice.popularity}</span>
    </div>
  );
};
