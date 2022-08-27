import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Featured Events</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default Home;
