import clsx from "clsx";
import {
  PetCard,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../entities";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";
import { PetPopularity } from "../../entities/pet/ui/PetPopularity";

export const NoticeDialog = ({ data }) => {
  return (
    <>
      <PetCard notice={data} className="p-0!">
        <div className="tablet-l:size-[150px] relative mx-auto mb-4 size-30">
          <div
            data-content={data?.category}
            className={clsx(
              `after:bg-cream after:rounded-ms after:text-yellow after:absolute after:top-0 after:-left-5 after:z-10 after:block after:px-3.5 after:py-2 after:capitalize after:content-[attr(data-content)]`,
            )}
          />
          <PetImage imgClassName="rounded-[50%]! w-full h-full mx-auto" />
        </div>

        <PetTitle className="flex-col">
          <PetPopularity />
        </PetTitle>
        <PetInfoTable />
        <PetDescription />
        <PetPrice className="text-center" />
      </PetCard>
      <div className="flex w-full items-center justify-center gap-2">
        <Button
          variant="primary"
          className="flex w-full items-center justify-center gap-2"
        >
          Add
          <Icon
            name="heart"
            className="size-4.5 fill-transparent stroke-white"
          />
        </Button>
        <Button variant="secondary" className="w-full">
          Contact
        </Button>
      </div>
    </>
  );
};
