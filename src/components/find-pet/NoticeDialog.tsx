import clsx from "clsx";
import {
  PetCard,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../entities";

export const NoticeDialog = ({ data }) => {
  return (
    <PetCard notice={data} className="p-0!">
      <div className="relative w-full">
        <div
          data-content={data?.category}
          className={clsx(
            `after:bg-cream after:rounded-ms after:text-yellow after:absolute after:top-0 after:left-[108px] after:z-10 after:block after:px-3.5 after:py-2 after:capitalize after:content-[attr(data-content)]`,
          )}
        />
        <PetImage imgClassName="rounded-[50%]! size-30  mx-auto  " />
      </div>

      <PetTitle />
      <PetInfoTable />
      <PetDescription />
      <PetPrice />
    </PetCard>
  );
};
