import { Heading } from "../../../shared/ui/Heading";
import { Icon } from "../../../shared/ui/Icon";
import { usePetContext } from "../api/usePetContex";

export const PetTitle = () => {
  const { notice } = usePetContext();
  return (
    <div className="tablet-l:mb-2 flex items-center justify-between">
      <Heading as="h3" className="text-m tablet-l:text-xl">
        {notice.title}
      </Heading>
      <div className="flex items-center justify-between">
        <Icon name="star" className="mr-1 size-4" />
        <span>{notice.popularity}</span>
      </div>
    </div>
  );
};
