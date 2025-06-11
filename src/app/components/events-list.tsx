import { EventoEvent } from "@/generated/prisma";
import EventCard from "@/components/event-card";
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "@/components/pagination-controls";

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventsList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event: EventoEvent) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
