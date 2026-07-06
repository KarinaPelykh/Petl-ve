import { RegistrationForm } from "../feature/register/ui/Registration";
import { PetBlock } from "../widget/pet-block/PetBlock";

export const RegisterPage = () => {
  return (
    <section className="desktop-l:flex desktop-l:gap-8 desktop-l:justify-around desktop-l:items-center container px-8! pb-5">
      <PetBlock variant="cat" />
      <RegistrationForm />
    </section>
  );
};
