import { Link } from "react-router";
import { Icon } from "../../shared/ui/Icon";
import { AddedPetsList } from "./AddedPetsList";

export const AddAnimals = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-m">My pets</p>

        <Link
          to="/add-pet"
          className="bg-yellow primary rounded-ms flex w-29.5 items-center justify-center gap-2 p-2.5 text-white"
        >
          Add pet <Icon name="plus" className="size-4.5" />
        </Link>
      </div>
      <AddedPetsList />
    </>
  );
};
