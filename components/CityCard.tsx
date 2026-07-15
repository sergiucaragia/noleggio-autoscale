import Link from "next/link";
import type { City } from "@/lib/cities";
import { MapPinIcon } from "./icons";

/**
 * Card città per la pagina "Dove operiamo" e la sezione zone in home.
 */
export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/${city.slug}/`}
      className="group flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-md"
    >
      <span className="mt-0.5 text-accent-600">
        <MapPinIcon className="h-5 w-5" />
      </span>
      <span>
        <span className="block font-bold text-brand-900 group-hover:text-brand-600">
          {city.name}
        </span>
        <span className="block text-sm text-gray-500">
          Noleggio autoscale a {city.name} ({city.province})
        </span>
      </span>
    </Link>
  );
}
