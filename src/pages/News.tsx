import { useState } from "react";
import { SearchForm } from "../feature/search-form/SearchForm";

import { Heading } from "../shared/ui/Heading";
import { NewsList } from "../widget/news-list/NewsList";

export const News = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center tablet-l:mb-11 desktop-l:mb-15">
          <Heading as="h1" variant="first" className="mb-5  tablet-l:mb-0">
            News
          </Heading>
          <SearchForm search={search} setSearch={setSearch} />
        </div>
        <NewsList />
      </div>
    </section>
  );
};
