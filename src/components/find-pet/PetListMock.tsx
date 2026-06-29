// type PetListMockProps = {
//   resetFilter: () => void;
// };

export const PetListMock = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative mb-6 h-74 w-74">
        <img
          src="/image/ChatGPT.png"
          alt="No data"
          className="relative h-full w-full object-contain"
        />
      </div>

      <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
        No pets found
      </h2>

      <p className="mb-6 max-w-md text-gray-500">
        We couldn’t find any results for your filters. Try changing search or
        reset filters to see more pets.
      </p>
      {/* 
      <button
        className="bg-yellow rounded-full px-6 py-3 font-semibold text-white shadow-md transition hover:bg-yellow-500"
        onClick={resetFilter}
      >
        Reset filters
      </button> */}
    </div>
  );
};
