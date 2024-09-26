import { useSearchParams } from "react-router-dom";
import styles from "./SortBy.module.css";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get("sort") || options[0].value;

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <label htmlFor="sort" className={styles.label}>
        Sort By
      </label>
      <select
        id="sort"
        className={styles.select}
        value={value}
        onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SortBy;
