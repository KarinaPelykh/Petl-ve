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
  setCardId: (val: string) => void;
};

export const PetCard = ({ notice, setCardId }: PetCardProps) => {
  return (
    <article className="desktop-l:w-90.75 rounded-s bg-white p-6">
      <div className="mb-6 overflow-hidden rounded-s">
        <img
          src={notice.imgURL}
          alt={notice.name}
          width={287}
          height={178}
          className="desktop-l:h-44.5 desktop-l:w-78.75 block h-auto w-full object-cover"
        />
      </div>

      <div>
        <div className="tablet-l:mb-2 flex items-center justify-between">
          <Heading as="h3" className="text-m tablet-l:text-xl">
            {notice.title}
          </Heading>
          <div className="flex items-center justify-between">
            <Icon name="star" className="mr-1 size-4" />
            <span>{notice.popularity}</span>
          </div>
        </div>
        <PetInfoTable notice={notice} />
        <p className="text-ms tablet-l:mb-6 mb-4">{notice.comment}</p>

        <span className="text-m mb-3 block">$40.99</span>
        <div className="flex gap-2.5">
          <Button
            onClick={() => setCardId(notice._id)}
            type="button"
            className="bg-yellow rounded-ms w-full p-3.5 text-white"
          >
            Learn more
          </Button>

          <Button
            type="button"
            className="bg-cream rounded-[50% ] size-11.5 p-3.5 text-white"
          >
            <Icon name="heart" className="size-4.5" />
          </Button>
        </div>
      </div>
    </article>
  );
};
