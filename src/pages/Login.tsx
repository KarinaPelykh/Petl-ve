import { LoginForm } from "../feature/login/ui/Form";
import { PetBlock } from "../widget/pet-block/PetBlock";

export const LoginPage = () => {
  return (
    <section className="container px-8! pb-5 desktop-l:flex desktop-l:gap-8  desktop-l:justify-around desktop-l:items-center">
      <PetBlock variant="dog" />
      <LoginForm />
    </section>
  );
};
