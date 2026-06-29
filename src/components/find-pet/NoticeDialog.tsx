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

import type { Notice } from "../../entities/pet/ui/PetCard";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { favorite } from "../../shared/api/redux/notices/selectors";

type NoticeDialogProps = {
  data?: Notice | null;
  handelAddFavorite: (val: string) => void;
  deleteFromFavorite: (val: string) => void;
};

export const NoticeDialog = ({
  data,
  handelAddFavorite,
  deleteFromFavorite,
}: NoticeDialogProps) => {
  const favoriteNotices = useAppSelector(favorite);
  if (!data) return;
  const idFavoriteNotice = favoriteNotices.find((notice) =>
    notice.includes(data._id),
  );

  return (
    <>
      <PetCard notice={data} className="p-0!">
        <div className="tablet-l:size-37.5 relative mx-auto mb-4 size-30">
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
          type="button"
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            !idFavoriteNotice
              ? handelAddFavorite(data._id)
              : deleteFromFavorite(data._id);
          }}
          variant="primary"
          className="flex w-full items-center justify-center gap-2"
        >
          {idFavoriteNotice ? "Delete" : "Add"}
          <Icon
            name={idFavoriteNotice ? "trash" : "heart"}
            className="size-4.5 fill-transparent stroke-white"
          />
        </Button>

        <Button variant="secondary" className="w-full" type="button">
          Contact
        </Button>
      </div>
    </>
  );
};
