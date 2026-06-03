import { Button } from "../../shared/ui/Button";
import { Heading } from "../../shared/ui/Heading";
export const NewsCard = () => {
  return (
    <li>
      <div className="rounded-xs mb-5 bg-yellow overflow-hidden tablet-l:mb-7">
        <img
          alt="new"
          src=""
          width={335}
          height={190}
          className="block w-full h-auto"
        />
      </div>

      <div>
        <Heading
          as="h2"
          className="text-m mb-3 tablet-l:text-1xl tablet-l:mb-3.5"
        >
          On Pets, Moral Logic and Love
        </Heading>
        <p className="text-ms mb-5 tablet-l:text-m tablet-l:mb-7 tablet-l:font-medium">
          In January, I fell in love with someone. It was the last thing I’d
          expect and caught me completely off guard. He has sandy blond hair
          with flecks of gray and gorgeous, sad eyes.
        </p>
        <div
          className="flex justify-between items-center text-ms tablet-l:font-medium
 tablet-l:text-m"
        >
          <span className="text-black/50 ">15/03/2023</span>
          <Button className="text-yellow underline p-0! ">Read more</Button>
        </div>
      </div>
    </li>
  );
};
