import { Tabs } from "radix-ui";

import { FavoriteNoticesList } from "./FavoriteNoticesList";
import { ViewedNoticesList } from "./ViewedNoticesList";

export const UserNoticesTab = () => {
  return (
    <Tabs.Root defaultValue="favorite" className="desktop-l:w-166">
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
        <FavoriteNoticesList />
      </Tabs.Content>
      <Tabs.Content value="viewed">
        <ViewedNoticesList />
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
