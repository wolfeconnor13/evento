import Link from "next/link";
import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic text-accent underline">10,000</span>{" "}
        events around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link
            href="/events/austin"
            className="hover:border-b-2 border-accent transition duration-1000"
          >
            Austin
          </Link>
          <Link
            href="/events/seattle"
            className="hover:border-b-2 border-accent transition duration-1000"
          >
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
