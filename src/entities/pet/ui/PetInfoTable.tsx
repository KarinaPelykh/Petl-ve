import type { Notice } from "./PetCard";

type PetInfoTableProps = {
  notice: Notice;
};

export const PetInfoTable = ({ notice }: PetInfoTableProps) => {
  return (
    <div className="flex gap-y-0.5  gap-x-3.5 mb-4">
      <div className="text-xs">
        <div className=" text-black/50"> Name</div>
        <div className="capitalize  text-s">{notice.name}</div>
      </div>
      <div className="text-xs">
        <div className=" text-black/50"> Birthday</div>
        <div className="capitalize text-s">{notice.birthday}</div>
      </div>
      <div className="text-xs">
        <div className=" text-black/50"> Sex</div>
        <div className="capitalize text-s">{notice.sex}</div>
      </div>
      <div className="text-xs">
        <div className=" text-black/50"> Species</div>
        <div className="capitalize text-s">{notice.species}</div>
      </div>

      <div className="text-xs">
        <div className="text-black/50"> Category</div>
        <div className="capitalize text-s">{notice.category}</div>
      </div>
    </div>
  );
};
