import { Tabs } from "radix-ui";

import { FavoriteNoticesList } from "./FavoriteNoticesList";
import { ViewedNoticesList } from "./ViewedNoticesList";

type UserNoticesTabProps = {
  dialog: { setDialogState: (val: { mode: string; id: string }) => void };
};

export const UserNoticesTab = ({ dialog }: UserNoticesTabProps) => {
  return (
    <Tabs.Root
      defaultValue="favorite"
      className="desktop-l:w-166 max-tablet-l:w-83.75 mx-auto"
    >
      <Tabs.List className="desktop-l:mb-8 mb-5 flex items-center gap-2.5">
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
        <FavoriteNoticesList dialog={dialog} />
      </Tabs.Content>
      <Tabs.Content value="viewed">
        <ViewedNoticesList dialog={dialog} />
      </Tabs.Content>
    </Tabs.Root>
  );
};
