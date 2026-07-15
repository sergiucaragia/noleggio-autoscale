import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { ChevronRightIcon } from "./icons";

/**
 * Breadcrumb visivo + schema BreadcrumbList.
 * Passare la catena completa a partire da Home.
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Percorso di navigazione" className="mx-auto max-w-7xl px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRightIcon className="h-3.5 w-3.5 text-gray-400" />}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-gray-800">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="hover:text-brand-600 hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
