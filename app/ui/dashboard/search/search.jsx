"use client";
import { useDebouncedCallback } from "use-debounce";
import Styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);
    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else params.delete("q");
    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={Styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={Styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
