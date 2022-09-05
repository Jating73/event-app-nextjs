import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  function searchHandler(year, month) {
    const exactPath = `/events/${year}/${month}`;
    router.push(exactPath);
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great Events that allow you to evolve..."
        />
      </Head>
      <h1 style={{ textAlign: "center" }}>All Events Page</h1>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
