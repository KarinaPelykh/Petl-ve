import { Tabs } from "radix-ui";
import {
  PetCard,
  // PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../../entities";
import { favorite, notices } from "../../shared/api/redux/notices/selectors";
import { useAppSelector } from "../../shared/hooks/reduxHooks";

export const UserNoticesTab = () => {
  const data = useAppSelector(favorite);
  const getNotices = useAppSelector(notices);
  const filteredData = getNotices.results.filter((notice) =>
    data.includes(notice._id),
  );

  return (
    <Tabs.Root defaultValue="favorite">
      <Tabs.List className="mb-20 flex items-center gap-2.5">
        <Tabs.Trigger
          value="favorite"
          className="aria-selected:bg-yellow text-ms rounded-ms group cursor-pointer bg-white p-3 text-center text-black transition-all duration-500 ease-out aria-selected:text-white"
        >
          My favorite pets
        </Tabs.Trigger>
        <Tabs.Trigger
          value="viewed"
          className="desktop-l:py-3 text-ms rounded-ms group aria-selected:bg-yellow w-30.75 cursor-pointer bg-white p-3 text-center text-black capitalize transition-all duration-500 ease-out aria-selected:text-white"
        >
          Viewed
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="favorite">
        <ul className="flex flex-wrap gap-2.5">
          {filteredData.map((item) => (
            <PetCard key={item._id} notice={item} className="desktop-l:w-90.75">
              <PetImage />
              <div>
                <PetTitle />
                <PetInfoTable />
                <PetDescription />
                <PetPrice />
                {/* <PetControl /> */}
              </div>
            </PetCard>
          ))}
        </ul>
      </Tabs.Content>
      <Tabs.Content value="viewed">
        <p>I watched notices</p>
      </Tabs.Content>

      {/* <p className="text-ms tablet-l:w-114.5 desktop-l:mt-45 mx-auto text-center">
        Oops,
        <span className="text-yellow">looks like there aren't any furries</span>
        on our adorable page yet. Do not worry! View your pets on the "find your
        favorite pet" page and add them to your favorites.
      </p> */}
    </Tabs.Root>
  );
};
