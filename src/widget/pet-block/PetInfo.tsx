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
          className="rounded-s1 tablet-l:flex mt-auto hidden h-30.25 w-fit gap-2 bg-white p-4"
        >
          <div className="bg-cream flex size-15! items-center justify-center rounded-full">
            <img src={image} width={32} height={32} alt="Dog Rich" />
          </div>

          <div className="w-48.5">
            <div className="flex justify-between">
              <p className="text-yellow text-m">{name}</p>
              <p className="text-s text-black/50">
                Birthday:
                <span className="text-black">{date}</span>
              </p>
            </div>
            <p className="text-s leading-[117%] text-black/80">{description}</p>
          </div>
        </article>
      ))}
    </>
  );
};
