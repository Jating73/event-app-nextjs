import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ErrorAlert from "../../components/ui/ErrorAlert";
import Button from "../../components/ui/Button";

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
      <ErrorAlert>
        <p>No Events Found</p> <Button link={`/events`}>Back</Button>
      </ErrorAlert>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Filtered Event Page</h1>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventPage;
