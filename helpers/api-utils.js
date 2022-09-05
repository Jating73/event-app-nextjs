export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
  const response = await fetch("");
  const data = await response.json();
  return data;
}
