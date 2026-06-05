import { PetCard } from "../entities/pet/ui/PetCard";
import { Heading } from "../shared/ui/Heading";

export const FindPets = () => {
  return (
    <section className="py-13.5">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-10">
          Find your favorite pet
        </Heading>
        <div className="flex justify-center">
          <ul className="grid gap-5  tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-8">
            <PetCard />
          </ul>
        </div>
      </div>
    </section>
  );
};
