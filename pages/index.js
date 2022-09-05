import Head from "next/head";
// import { getFeaturedEvents } from "../helpers/api-utils";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function Home(props) {
  const featuredEvents = getFeaturedEvents();

  const { events } = props;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great Events that allow you to evolve..."
        />
      </Head>
      <h1 style={{ textAlign: "center" }}>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default Home;
