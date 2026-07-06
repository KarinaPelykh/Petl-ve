import { LoginForm } from "../feature/login/ui/Form";
import { PetBlock } from "../widget/pet-block/PetBlock";

export const LoginPage = () => {
  return (
    <section className="desktop-l:flex desktop-l:gap-8 desktop-l:justify-around desktop-l:items-center container px-8! pb-5">
      <PetBlock variant="dog" />
      <LoginForm />
    </section>
  );
};
