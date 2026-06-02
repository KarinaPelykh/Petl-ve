import { SearchForm } from "../feature/search-form/SearchForm";
import { Heading } from "../shared/ui/Heading";

export const News = () => {
  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <div className="tablet-l:flex tablet-l:justify-between tablet-l:items-center">
          <Heading as="h1" className="mb-5 text-2xl tablet-l:text-6xl">
            News
          </Heading>
          <SearchForm />
                  <ul>
                      
          </ul>
        </div>
      </div>
    </section>
  );
};
