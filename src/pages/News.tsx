import { SearchForm } from "../feature/search-form/SearchForm";

import { Heading } from "../shared/ui/Heading";
import { NewsList } from "../widget/news-list/NewsList";

export const News = () => {
  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center tablet-l:mb-11 desktop-l:mb-15">
          <Heading
            as="h1"
            className="mb-5 text-2xl tablet-l:text-6xl tablet-l:mb-0"
          >
            News
          </Heading>
          <SearchForm />
        </div>
        <NewsList />
      </div>
    </section>
  );
};
