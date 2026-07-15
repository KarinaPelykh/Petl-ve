import clsx from "clsx";
import { auth } from "../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { Icon } from "../../shared/ui/Icon";
import { Dialog } from "radix-ui";
import type { Dispatch, SetStateAction } from "react";
import type { DialogState } from "../../feature/dialog-content/hook/useManageDialog";

type UserBlockProps = {
  setDialogState: Dispatch<SetStateAction<DialogState>>;
};

export const UserBlock = ({ setDialogState }: UserBlockProps) => {
  const { user } = useAppSelector(auth);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="bg-yellow rounded-ms flex h-9.5 w-20 items-center justify-center gap-1 p-2.5">
          <p className="text-ms text-white">User</p>
          <Icon name="user-2" className="size-4.5" />
        </div>

        <Dialog.Trigger
          className="bg-cream flex size-9.5 items-center justify-center rounded-[50%]"
          onClick={() => setDialogState({ mode: "edit", id: "" })}
        >
          <Icon name="edit" className="size-4.5" />
        </Dialog.Trigger>
      </div>

      <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="avatar"
            className="tablet-l:size-27.5 size-23.5 rounded-[50%]"
          />
        ) : (
          <Icon name="user" className="tablet-l:size-27.5 size-23.5" />
        )}
        <input
          type="file"
          id="file"
          className="hidden"
          data-size="lg"
          accept="image/png"
          ngf-max-size="2MB"
        />
        <label htmlFor="file" className="text-s underline">
          Upload photo
        </label>
      </div>

      <div className="desktop-l:10 tablet-l:mb-20 mb-10 w-full">
        <p className="text-m mb-5">My information</p>
        <div className="tablet-l:gap-3.5 tablet-l:grid tablet-l:grid-cols-2 tablet-l:justify-between desktop-l:flex desktop-l:flex-col desktop-l:gap-3.5 flex flex-col flex-wrap gap-2.5">
          <p
            className={clsx(
              user.name && "border-yellow",
              "desktop-l:p-4 text-ms rounded-ms flex items-center border border-black/50 p-3 text-black/80 capitalize placeholder:text-black/50 placeholder:capitalize",
            )}
          >
            {user.name || "Name"}
          </p>

          <p
            className={clsx(
              user.email && "border-yellow",
              "desktop-l:p-4 text-ms rounded-ms flex items-center border border-black/50 p-3 text-black/80 placeholder:text-black/50 placeholder:capitalize",
            )}
          >
            {user.email || "name00@gmail.com"}
          </p>

          <p
            className={clsx(
              user.phone && "border-yellow",
              "desktop-l:p-4 text-ms rounded-ms flex items-center border border-black/50 p-3 text-black/80 placeholder:text-black/50 placeholder:capitalize",
            )}
          >
            {user.phone || "+380"}
          </p>
        </div>
      </div>
    </>
  );
};
