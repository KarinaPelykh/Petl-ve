import { Button } from "../../../shared/ui/Button";
import { Heading } from "../../../shared/ui/Heading";
import { Icon } from "../../../shared/ui/Icon";
import { PetInfoTable } from "./PetInfoTable";

export type Notice = {
  _id: string;
  name: string;
  imgURL: string;
  title: string;
  popularity: number;
  comment: string;
  birthday: string;
  sex: string;
  species: string;
  category: string;
};

type PetCardProps = {
  notice: Notice;
};

export const PetCard = ({ notice }: PetCardProps) => {
  return (
    <article className="p-6 bg-white rounded-s desktop-l:w-90.75">
      <div className="rounded-s overflow-hidden  mb-6">
        <img
          src={notice.imgURL}
          alt={notice.name}
          width={287}
          height={178}
          className="block  w-full h-auto object-cover desktop-l:h-44.5  desktop-l:w-78.75"
        />
      </div>

      <div>
        <div className="flex justify-between items-center tablet-l:mb-2">
          <Heading as="h3" className=" text-m tablet-l:text-xl">
            {notice.title}
          </Heading>
          <div className="flex justify-between items-center">
            <Icon name="star" className="size-4 mr-1" />
            <span>{notice.popularity}</span>
          </div>
        </div>
        <PetInfoTable notice={notice} />
        <p className="text-ms mb-4 tablet-l:mb-6">{notice.comment}</p>

        <span className="mb-3 text-m block">$40.99</span>
        <div className=" flex gap-2.5">
          <Button
            type="button"
            className=" bg-yellow rounded-ms text-white p-3.5 w-full"
          >
            Learn more
          </Button>

          <Button
            type="button"
            className=" bg-cream  text-white p-3.5 rounded-[50% ]  size-11.5"
          >
            <Icon name="heart" className="size-4.5 " />
          </Button>
        </div>
      </div>
    </article>
  );
};
