import { usePetContext } from "../api/usePetContex";

export const PetInfoTable = () => {
  const { notice } = usePetContext();

  const updatedDateBirthday = notice?.birthday
    ?.split("-")
    .map((item) => item !== "-" && item)
    .join(".");

  return (
    <div className="mb-4 flex gap-x-3.5 gap-y-0.5">
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

      <div className="text-xs">
        <div className="text-black/50"> Category</div>
        <div className="text-s capitalize">{notice.category}</div>
      </div>
    </div>
  );
};
