type PetInfo = {
  id: string;
  name: string;
  date: string;
  description: string;
  image: string;
};

type PetInfoProps = {
  filterData: PetInfo[];
};

export const PetInfo = ({ filterData }: PetInfoProps) => {
  return (
    <>
      {filterData.map(({ id, name, date, description, image }) => (
        <article
          key={id}
          className=" bg-white w-fit h-30.25 p-4 rounded-s1  gap-2 mt-auto hidden tablet-l:flex "
        >
          <div className=" bg-cream size-15! rounded-full flex justify-center items-center">
            <img src={image} width={32} height={32} alt="Dog Rich" />
          </div>

          <div className="w-48.5">
            <div className=" flex justify-between">
              <p className="text-yellow text-m">{name}</p>
              <p className="text-s text-black/50 ">
                Birthday:
                <span className="  text-black">{date}</span>
              </p>
            </div>
            <p className="text-black/80 text-s leading-[117%]">{description}</p>
          </div>
        </article>
      ))}
    </>
  );
};
