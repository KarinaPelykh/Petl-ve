import { Heading } from "../shared/ui/Heading";
import { PartnerList } from "../widget/partnerlist/PartnerList";

export const OurFriends = () => {
  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <Heading
          as="h1"
          className="mb-5 text-2xl tablet-l:text-6xl desktop-l:mb-15"
        >
          Our friends
        </Heading>
        <PartnerList />
      </div>
    </section>
  );
};
