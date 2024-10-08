import { useSearchParams } from "react-router-dom";
import styles from "./Paginate.module.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PAGE_SIZE } from "../utils/constants";

function Paginate({ page, totalPages, totalDocs }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function nextPage() {
    const next = page === totalPages ? page : page + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = page === 1 ? page : page - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  return (
    <>
      <p>
        Showing <span>{(page - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>{page === totalPages ? totalDocs : PAGE_SIZE * page}</span> of{" "}
        <span>{totalDocs}</span> Results
      </p>
      <div className={styles.paginate}>
        <button onClick={prevPage} disabled={page === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button onClick={nextPage} disabled={page >= totalPages}>
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </>
  );
}

export default Paginate;
