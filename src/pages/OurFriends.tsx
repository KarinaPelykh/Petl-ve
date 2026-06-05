import { Heading } from "../shared/ui/Heading";
import { PartnerList } from "../widget/partnerlist/PartnerList";

export const OurFriends = () => {
  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-5  desktop-l:mb-15">
          Our friends
        </Heading>
        <PartnerList />
      </div>
    </section>
  );
};
