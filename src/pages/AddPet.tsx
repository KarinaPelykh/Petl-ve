import { AddPetForm } from "../feature/add-pet/ui/AddPetForm";
import { PetBlock } from "../widget/pet-block/PetBlock";

export const AddPetPage = () => {
  return (
    <section className="desktop-l:pb-8">
      <div className="desktop-l:flex desktop-l:gap-8 container">
        <PetBlock variant="second-dog" />
        <AddPetForm />
      </div>
    </section>
  );
};
