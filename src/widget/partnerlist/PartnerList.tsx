import { PartnerCard } from "../../entities/parner/ui/PartnerCard";

export const PartnerList = () => {
  return (
    <ul className="grid gap-5 grid-cols-1 tablet-l:grid-cols-2 desktop-l:grid-cols-3 ">
      <PartnerCard />
    </ul>
  );
};
