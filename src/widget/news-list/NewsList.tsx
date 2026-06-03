import { NewsCard } from "./NewsCard";

export const NewsList = () => {
  return (
    <ul className="grid gap-5 tablet-l:grid-cols-2 desktop-l:grid-cols-3 desktop-l:gap-9">
      <NewsCard />
    </ul>
  );
};
