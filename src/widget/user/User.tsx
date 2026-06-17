import { auth } from "../../shared/api/redux/user/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

export const User = () => {
  const { user } = useAppSelector(auth);

  return (
    <div className="flex items-center justify-center gap-2">
      <Button className="bg-yellow text-m w-fit px-8.75 py-3.5 text-white uppercase">
        Log out
      </Button>
      <div className="bg-cream flex size-12.5 items-center justify-center rounded-[50%]">
        <Icon name="user" className="size-6" />
      </div>
      <p className="text-1xl capitalize">{user.name || "unknown"}</p>
    </div>
  );
};
