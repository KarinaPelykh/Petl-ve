import { Heading } from "../shared/ui/Heading";
import { PartnerList } from "../widget/partnerlist/PartnerList";
import { friends } from "../shared/api/redux/friends/selectors";
import { useEffect } from "react";
import { getFriends } from "../shared/api/redux/friends/operations";
import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";

export const OurFriends = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(friends);
  console.log(data);

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  return (
    <section className="pt-15 pb-11">
      <div className="container">
        <Heading as="h1" variant="first" className="mb-5  desktop-l:mb-15">
          Our friends
        </Heading>
        <PartnerList data={data} />
      </div>
    </section>
  );
};
