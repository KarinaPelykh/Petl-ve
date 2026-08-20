import { PartnerCard } from "../../entities/partner/ui/PartnerCard";

type WorkDay = {
  isOpen: boolean;
  to: string;
  from: string;
};

export type Data = {
  _id: string;
  imageUrl: string;
  title: string;
  email: string;
  addressUrl: string;
  address: string;
  url: string;
  phone: string;
  workDays?: WorkDay[];
};

type PartnerListProps = {
  data: Data[];
};

export const PartnerList = ({ data }: PartnerListProps) => {
  return (
    <ul className="mobile-md:grid-cols-2 desktop-l:grid-cols-3 grid grid-cols-1 gap-5">
      {data?.map((item) => (
        <PartnerCard key={item._id} item={item} />
      ))}
    </ul>
  );
};
