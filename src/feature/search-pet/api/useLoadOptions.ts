type Locations = {
  _id: string;
  stateEn?: string;
  cityEn: string;
  countyEn: string;
};

export const useLoadOptions = () => {
  const loadOptions = (inputValue: string) => {
    if (inputValue.length < 3) {
      return Promise.resolve([]);
    }

    return fetch(
      `https://petlove.b.goit.study/api/cities/?keyword=${inputValue}`,
    )
      .then((data) => data.json())
      .then((data) => {
        return data.map(({ _id, stateEn, cityEn, countyEn }: Locations) => ({
          locationId: _id,
          value: `${stateEn},${cityEn}`,
          label: `${cityEn} (${stateEn} обл., ${countyEn} р-н)`,
        }));
      });
  };

  return { loadOptions };
};
