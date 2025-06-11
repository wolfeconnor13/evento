import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";

type EventListProps = {
  city: string;
};

export default async function EventsList({ city }: EventListProps) {
  const events = await getEvents(city);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event: EventoEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
