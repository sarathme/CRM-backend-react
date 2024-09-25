import styles from "./TableRow.module.css";

function TableRow({ data }) {
  return (
    <div role="row" className={styles.row}>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
      <p>{data}</p>
    </div>
  );
}

export default TableRow;
