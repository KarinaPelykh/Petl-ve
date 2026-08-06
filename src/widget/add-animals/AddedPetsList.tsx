import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";
import { PetImage, PetCard, PetTitle, PetInfoTable } from "../../entities";
import { Button } from "../../shared/ui/Button";
import { deletePet } from "../../shared/api/redux/user/operations";
import { Icon } from "../../shared/ui/Icon";
import { pets } from "../../shared/api/redux/user/selectors";

export const AddedPetsList = () => {
  const data = useAppSelector(pets);
  const dispatch = useAppDispatch();

  return (
    <ul
      className={clsx(
        "mb-10 flex flex-col gap-3.5",
        !data?.length ? "desktop-l:tb-20 tb-10" : "mt-5",
      )}
    >
      {data?.length ? (
        data?.map((pet) => (
          <PetCard
            key={pet._id}
            data={pet}
            className="rounded-s1 flex flex-row items-center gap-6.25 border border-black/15 p-5!"
          >
            <PetImage imgClassName="size-[90px]! rounded-[50%]  mb-0!" />
            <div className="flex w-60.75 flex-col gap-3 overflow-hidden">
              <PetTitle className="mb-0!" titleClassName="mb-0!" />
              <PetInfoTable categoryClassName="hidden" />
            </div>

            <Button
              onClick={() => dispatch(deletePet(pet._id))}
              type="button"
              variant="secondary"
              className="mb-auto flex size-9.5 cursor-pointer items-center justify-center rounded-[50%] p-0!"
            >
              <Icon
                name="trash"
                className="stroke-yellow size-4.5! fill-transparent"
              />
            </Button>
          </PetCard>
        ))
      ) : (
        <p>Your list is empty, Let's add some notices</p>
      )}
    </ul>
  );
};
