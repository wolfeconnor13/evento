import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function getEvents(city: string) {
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
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}
