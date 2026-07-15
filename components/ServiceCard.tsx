import Link from "next/link";
import { ServiceIcon } from "./icons";

/**
 * Card servizio riutilizzabile (home, pagine correlate).
 */
export default function ServiceCard({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: "autoscala" | "autogru" | "piattaforma" | "transenne" | "pratiche";
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-brand-100 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-lg hover:shadow-brand-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
    >
      <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-200 group-hover:bg-accent-600 group-hover:text-white">
        <ServiceIcon name={icon} className="h-8 w-8" />
      </span>
      <h3 className="mb-2 text-lg font-semibold text-brand-900">{title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-600">
        {description}
      </p>
      <span className="text-sm font-semibold text-accent-700 group-hover:underline">
        Scopri di più →
      </span>
    </Link>
  );
}
