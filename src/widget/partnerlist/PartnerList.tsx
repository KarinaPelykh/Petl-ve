import { PartnerCard } from "../../entities/partner/ui/PartnerCard";

export type Data = {
  _id: string;
  imageUrl: string;
  title: string;
  email: string;
  addressUrl: string;
  address: string;
  url: string;
  phone: string;
};

type PartnerListProps = {
  data: Data[];
};

export const PartnerList = ({ data }: PartnerListProps) => {
  return (
    <ul className="grid gap-5 grid-cols-1 tablet-l:grid-cols-2 desktop-l:grid-cols-3 ">
      {data.map((item) => (
        <PartnerCard key={item._id} item={item} />
      ))}
    </ul>
  );
};
