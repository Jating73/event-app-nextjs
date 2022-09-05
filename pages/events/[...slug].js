import { useRouter } from "next/router";
import Head from "next/head";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ErrorAlert from "../../components/ui/ErrorAlert";
import Button from "../../components/ui/Button";
import { Fragment } from "react";

function FilteredEventPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  let pageHead = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All Events for ${numMonth}/${numYear}`}
      />
    </Head>
  );

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <ErrorAlert>
        {pageHead}
        <p>Invalid Filter! Please Adjust your values</p>{" "}
        <Button link={`/events`}>Back</Button>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth - 1,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {pageHead}
        <ErrorAlert>
          <p>No Events Found for chosen Filter</p>
          <Button link={`/events`}>Show All Events</Button>
        </ErrorAlert>
      </Fragment>
    );
  }

  return (
    <Fragment>
      {pageHead}
      <h2 style={{ textAlign: "center" }}>Events in {numYear}</h2>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventPage;
