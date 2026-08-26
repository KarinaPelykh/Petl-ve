import clsx from "clsx";
import { usePetContext } from "../api/usePetContex";

export const PetInfoTable = ({
  categoryClassName,
  tableClassName,
}: {
  categoryClassName?: string;
  tableClassName?: string;
}) => {
  const { data } = usePetContext();

  const updatedDateBirthday = data?.birthday
    ?.split("-")
    .map((item: string) => item !== "-" && item)
    .join(".");
  return (
    <div
      className={clsx(
        "mb-4 flex gap-x-3.5 gap-y-0.5",
        tableClassName,
        categoryClassName && "gap-x-6.25 gap-y-0.75",
      )}
    >
      <div className="text-xs">
        <div className="text-black/50"> Name</div>
        <div className="text-s capitalize">{data.name}</div>
      </div>
      <div className="text-xs">
        <div className="text-black/50"> Birthday</div>
        <div className="text-s capitalize">{updatedDateBirthday}</div>
      </div>
      <div className="text-xs">
        <div className="text-black/50"> Sex</div>
        <div className="text-s capitalize">{data.sex}</div>
      </div>
      <div className="text-xs">
        <div className="text-black/50"> Species</div>
        <div className="text-s capitalize">{data.species}</div>
      </div>

      <div className={clsx("text-xs", categoryClassName)}>
        <div className="text-black/50"> Category</div>
        {"category" in data && (
          <div className="text-s capitalize">{data.category}</div>
        )}
      </div>
    </div>
  );
};
