import { SearchForm } from "../feature/search-form/SearchForm";
import { Heading } from "../shared/ui/Heading";

export const News = () => {
  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <Heading as="h1" className="mb-5 text-2xl">
          News
        </Heading>
        <SearchForm />
      </div>
    </section>
  );
};
