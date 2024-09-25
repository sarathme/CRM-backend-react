import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";
import Heading from "./Heading";

function Filter({ filter, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filter) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filter, value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <div className={styles.filter}>
      <Heading type="tertiary">{`${filter.toUpperCase()} :`}</Heading>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.btn} ${
            option.value === currentFilter ? styles.active : ""
          }`}
          onClick={() => handleClick(option.value)}
          disabled={options.value === currentFilter}>
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
