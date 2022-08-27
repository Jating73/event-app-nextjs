const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming with everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live eventwe are going to learn coding",
    location: "SomeStree 25, 12345 San Jonas",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking with everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live eventwe are going to learn coding",
    location: "SomeStree 25, 12345 San Jonas",
    date: "2022-08-22",
    image: "images/networking.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Introvert with everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live eventwe are going to learn coding",
    location: "SomeStree 25, 12345 San Jonas",
    date: "2021-01-09",
    image: "images/introvert.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Concert with everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live eventwe are going to learn coding",
    location: "SomeStree 25, 12345 San Jonas",
    date: "2021-05-12",
    image: "images/concert.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Gaming with everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live eventwe are going to learn coding",
    location: "SomeStree 25, 12345 San Jonas",
    date: "2022-05-10",
    image: "images/games.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.filter((event) => event.id === id);
}
