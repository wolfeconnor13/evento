import "server-only";

import { unstable_cache } from "next/cache";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city:
        city === "all"
          ? undefined
          : city.charAt(0).toUpperCase() + city.slice(1), //make city uppercase on the first letter,
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });
  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    const totalCount = await prisma.eventoEvent.count({
      where: {
        city: city.charAt(0).toUpperCase() + city.slice(1),
      },
    });
  }
  if (!totalCount) {
    totalCount = 0;
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
