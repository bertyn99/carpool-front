export const getTrips = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/trips");
  if (!response.ok) throw new Error("failed to fetch user");
  const trips = await response.json();
  return trips;
};
