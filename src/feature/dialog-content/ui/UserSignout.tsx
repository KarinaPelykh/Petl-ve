import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { signout } from "../../../shared/api/redux/user/operations";
import { Modal } from "../../../shared/ui/Modal";
import { Heading } from "../../../shared/ui/Heading";
import { Button } from "../../../shared/ui/Button";
import { Dialog } from "radix-ui";

type UserSignoutProps = {
  setOpen: (val: boolean) => void;
};

export const UserSignout = ({ setOpen }: UserSignoutProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(signout());
    navigate("/login");
  };

  return (
    <Modal className="w-md p-20">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-cream mb-5 flex size-20 items-center justify-center rounded-[50%]">
          <img src="/public/image/cat.png" width={44} height={44} alt="cat" />
        </div>
        <Heading as="h3" className="mb-7 text-3xl">
          Already leaving?
        </Heading>
        <div className="flex w-full gap-2">
          <Button className="w-35" variant="primary" onClick={logout}>
            Yes
          </Button>
          <Dialog.Trigger
            className="rounded-ms w-35 bg-black/5 text-black"
            onClick={() => setOpen(false)}
          >
            No
          </Dialog.Trigger>
        </div>
      </div>
    </Modal>
  );
};
