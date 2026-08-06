import { getFriends } from "../shared/api/services";
import { Heading } from "../shared/ui/Heading";
import { PartnerList } from "../widget/partnerlist/PartnerList";
import { useEffect, useState } from "react";

export const OurFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await getFriends();
        setFriends(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, []);

  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <Heading as="h1" variant="first" className="desktop-l:mb-15 mb-5">
          Our friends
        </Heading>
        <PartnerList data={friends} />
      </div>
    </section>
  );
};
