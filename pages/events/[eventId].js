import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

import EventContent from "../../components/event-detail/EventContent";
import EventLogistic from "../../components/event-detail/EventLogistic";
import EventSummary from "../../components/event-detail/EventSummary";

import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  var event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found!</p>;
  }

  event = event[0];

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
