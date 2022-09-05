import Image from "next/image";
import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import LogisticItem from "./LogisticItem";
import classes from "./EventLogistic.module.css";

function EventLogistic(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
      </div>
      <ul className={classes.list}>
        <LogisticItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticItem>
        <LogisticItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticItem>
      </ul>
    </section>
  );
}

export default EventLogistic;
