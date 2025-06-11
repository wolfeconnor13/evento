import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import Loading from "@/events/[city]/loading";
import { Suspense } from "react";
import { Metadata } from "next";
import { z } from "zod";
import { siteUrl } from "@/lib/constants";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
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
    alternates: {
      canonical: `${siteUrl}/events/${city}`,
    },
  };
}
