import { Button } from "../../../shared/ui/Button";
import { Heading } from "../../../shared/ui/Heading";
import { Icon } from "../../../shared/ui/Icon";

export const PetCard = () => {
  return (
    <article className="p-6 bg-white rounded-s desktop-l:w-90.75">
      <div className="rounded-s overflow-hidden  mb-6">
        <img
          src="/public/image/image1.png"
          alt="pet"
          width={287}
          height={178}
          className="block  w-full h-auto object-cover "
        />
      </div>

      <div>
        <div className="flex justify-between items-center tablet-l:mb-2">
          <Heading as="h3" className=" text-m tablet-l:text-xl">
            Found Red-Eared Slider
          </Heading>
          <div className="flex justify-between items-center">
            <Icon name="star" className="size-4 mr-1" /> <span>2</span>
          </div>
        </div>
        {/* <table className="table border-spacing-3.5 border-separate mb-4">
          <tr className=" text-black/50">
            <th className="text-xs"> Name</th>
            <th className="text-xs"> Birthday</th>
            <th className="text-xs"> Sex</th>
            <th className="text-xs"> Species</th>
            <th className="text-xs"> Category</th>
          </tr>
          <tr className="text-s">
            <td>Shelly</td>
            <td>12.08.2019</td>
            <td>Unknown</td>
            <td>Turtle</td>
            <td>Found</td>
          </tr>
        </table> */}
        <p className="text-ms mb-4 tablet-l:mb-6">
          Found this turtle near the pond. Contact if yours.
        </p>

        <span className="mb-3 text-m block">$40.99</span>
        <div className=" flex gap-2.5">
          <Button
            type="button"
            className=" bg-yellow rounded-ms text-white p-3.5 w-full"
          >
            Learn more
          </Button>

          <Button
            type="button"
            className=" bg-cream  text-white p-3.5 rounded-[50% ]  size-11.5"
          >
            <Icon name="heart" className="size-4.5 " />
          </Button>
        </div>
      </div>
    </article>
  );
};
