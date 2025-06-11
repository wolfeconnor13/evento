import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import Loading from "./loading";
import { Suspense } from "react";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: Props) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  if (city === "all") {
    return {
      title: "All Events",
    };
  }

  return {
    title: `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
  };
}
