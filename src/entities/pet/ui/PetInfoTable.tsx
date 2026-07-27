import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

export const PetInfoTable = ({
  categoryClassName,
  tableClassName,
}: {
  categoryClassName?: string;
  tableClassName?: string;
}) => {
  const { notice } = usePetContext();

  const updatedDateBirthday = notice?.birthday
    ?.split("-")
    .map((item) => item !== "-" && item)
    .join(".");
  // from first div mb-4
  return (
    <div
      className={clsx(
        "flex gap-x-3.5 gap-y-0.5",
        tableClassName,
        categoryClassName && "gap-x-6.25 gap-y-0.75",
      )}
    >
      <div className="text-xs">
        <div className="text-black/50"> Name</div>
        <div className="text-s capitalize">{notice.name}</div>
      </div>
      <div className="text-xs">
        <div className="text-black/50"> Birthday</div>
        <div className="text-s capitalize">{updatedDateBirthday}</div>
      </div>
      <div className="text-xs">
        <div className="text-black/50"> Sex</div>
        <div className="text-s capitalize">{notice.sex}</div>
      </div>
      <div className="text-xs">
        <div className="text-black/50"> Species</div>
        <div className="text-s capitalize">{notice.species}</div>
      </div>

      <div className={clsx("text-xs", categoryClassName)}>
        <div className="text-black/50"> Category</div>
        <div className="text-s capitalize">{notice.category}</div>
      </div>
    </div>
  );
};
