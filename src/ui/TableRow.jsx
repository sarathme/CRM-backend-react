import { format } from "date-fns";
import styles from "./TableRow.module.css";

function TableRow({ data }) {
  return (
    <div role="row" className={styles.row}>
      <p>{data.productName}</p>
      <p>{data.productMaterial}</p>
      <p>{data.productCatogary}</p>
      <p>{data.stockAvailable}</p>
      <p>{`₹${data.pricePerUnit}`}</p>
      <p>{format(data.createdAt, "dd-MM-yyyy")}</p>
    </div>
  );
}

export default TableRow;
