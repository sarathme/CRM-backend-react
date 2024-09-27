import { format } from "date-fns";
import styles from "./CustomerCard.module.css";
import Heading from "../ui/Heading";
import Badge from "../ui/Badge";

function CustomerCard({ customer }) {
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <Heading type="secondary">{`${customer.firstName} ${customer.lastName}`}</Heading>
        <p>
          Email: <span>{customer.email}</span>
        </p>
        <p>
          Joined On: <span>{format(customer.joinedAt, "dd-MM-yyyy")}</span>
        </p>
      </div>
      <Badge
        value={customer.status.toUpperCase()}
        type={
          customer.status === "active"
            ? "primary"
            : customer.status === "new"
            ? "primary"
            : "secondary"
        }
      />

      <Badge value={customer.source.toUpperCase()} type="tertiary" />
    </div>
  );
}

export default CustomerCard;
