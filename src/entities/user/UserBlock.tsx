import clsx from "clsx";
import { auth } from "../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

export const UserBlock = () => {
  const { user } = useAppSelector(auth);

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div className="bg-yellow rounded-ms flex h-9.5 w-20 items-center justify-center gap-1">
          <p className="text-ms text-white">User</p>
          <Icon name="user-2" className="size-4.5" />
        </div>

        <Button
          variant="secondary"
          className="flex size-9.5 items-center justify-center rounded-[50%] p-0!"
        >
          <Icon name="edit" className="size-4.5" />
        </Button>
      </div>

      <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
        <Icon name="user" className="tablet-l:size-27.5 size-23.5" />

        <input
          type="file"
          id="file"
          className="hidden"
          data-size="lg"
          name="upload"
          accept="image/png"
          ngf-max-size="2MB"
        />
        <label htmlFor="file" className="underline">
          Upload photo
        </label>
      </div>

      <div className="desktop-l:10 tablet-l:mb-20 mb-10 w-full">
        <p className="text-m mb-5">My information</p>
        <div className="tablet-l:flex tablet-l:flex-wrap tablet-l:gap-3.5 tablet-l:justify-between desktop-l:flex-col desktop-l:gap-3.5">
          <p
            className={clsx(
              user.name && "border-yellow",
              "max-desktop-l:w-76.25! desktop-l:p-4 text-ms rounded-ms flex h-10.5 w-full items-center border border-black/50 p-3 text-black/80 shadow-lg outline-none placeholder:text-black/50 placeholder:capitalize",
            )}
          >
            {user.name || "Name"}
          </p>

          <p
            className={clsx(
              user.email && "border-yellow",
              "max-desktop-l:w-76.25! desktop-l:p-4 text-ms rounded-ms flex h-10.5 w-full items-center border border-black/50 p-3 text-black/80 shadow-lg outline-none placeholder:text-black/50 placeholder:capitalize",
            )}
          >
            {user.email || "name00@gmail.com"}
          </p>
        </div>

        <p
          className={clsx(
            user?.number && "border-yellow",
            "max-desktop-l:w-76.25! desktop-l:p-4 text-ms rounded-ms desktop-l:mt-3.5 flex h-10.5 w-full items-center border border-black/50 p-3 text-black/80 shadow-lg outline-none placeholder:text-black/50 placeholder:capitalize",
          )}
        >
          {user?.number || "+380"}
        </p>
      </div>
    </>
  );
};
