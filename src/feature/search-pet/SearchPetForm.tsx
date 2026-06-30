import { Form } from "../../shared/ui/Form";
import { SearchField } from "../../shared/ui/SearchField";

import { MySelect } from "./Select";
import { AsyncSearchBar } from "./AsyncSearchBar";
import { RadioGroupBtn } from "./RadioGroupBtn";
import {
  checkboxesExpensive,
  checkboxesPopular,
} from "./constants/searchPet.constants";
import { usePetsFilter } from "./hook/usePetsFilter";
import { useGetFilteredNotices } from "./api/useGetFilteredNotices";
// import {
//   getCategory,
//   getGender,
//   getSpecies,
// } from "../../shared/api/redux/notices/operations";
// import { useEffect, useState } from "react";

export const SearchPetForm = () => {
  const { filter, onChangeInput } = usePetsFilter();
  useGetFilteredNotices({ filter });

  // const [selectData, setSelectData] = useState({
  //   category: [],
  //   gender: [],
  //   species: [],
  // });

  // useEffect(() => {
  //   async function gedDataForSelect() {
  //     try {
  //       const category = await getCategory();
  //       const gender = await getGender();
  //       const species = await getSpecies();
  //       setSelectData({ category, gender, species });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   gedDataForSelect();
  // }, []);

  return (
    <Form className="bg-cream! tablet-l:py-10 tablet-l:px-8 desktop-l:p-10 desktop-l:w-304 mb-10 p-5">
      <div className="tablet-l:flex-row tablet-l:flex-wrap flex w-full flex-col gap-3">
        <SearchField
          type="search"
          value={filter.keyword}
          onChange={(val) => onChangeInput(val, "keyword")}
          className="tablet-l:w-66.25 desktop-l:w-66.25 outline-yellow border-0 bg-white"
        />
        <div className="flex gap-2">
          <MySelect
            data={selectData?.category}
            onChange={(val) => onChangeInput(val, "category")}
            field="Category"
            className="desktop-l:w-50"
          />
          <MySelect
            data={selectData?.gender}
            onChange={(val) => onChangeInput(val, "sex")}
            field="By gender"
            className="desktop-l:w-47.5"
          />
        </div>
        <MySelect
          data={selectData?.species}
          onChange={(val) => onChangeInput(val, "species")}
          field="By type"
          className="tablet-l:w-47.5"
        />
        <AsyncSearchBar
          value={filter.location}
          onChange={(val) => onChangeInput(val, "location")}
          className="desktop-l:w-56.75 border-0 bg-white"
        />
      </div>
      <div className="my-5 h-px w-full bg-black/10" />
      <div className="flex gap-2">
        <RadioGroupBtn
          filter={filter.byPopularity}
          data={checkboxesPopular}
          onChange={(val) => onChangeInput(val, "byPopularity")}
        />

        <RadioGroupBtn
          filter={filter.byPrice}
          data={checkboxesExpensive}
          onChange={(val) => onChangeInput(val, "byPrice")}
        />
      </div>
    </Form>
  );
};
