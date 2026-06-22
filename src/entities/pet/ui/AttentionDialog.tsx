import { Heading } from "../../../shared/ui/Heading";
import { HeaderAuthList } from "../../../widget/header/HeaderAuthList";

export const AttentionDialog = () => {
  return (
    <>
      <div className="bg-cream desktop-l:size-20 flex size-20 items-center justify-center rounded-[50%]">
        <img src="/public/image/dog.png" className="size-11" />
      </div>

      <Heading as="h2" className="text-yellow text-1xl tablet-l:text-3xl">
        Attention
      </Heading>
      <p className="text-ms text-center">
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <HeaderAuthList className="flex gap-2" btnClassName="capitalize!" />
    </>
  );
};
