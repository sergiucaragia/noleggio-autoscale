import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/services";
import { ChevronDownIcon } from "./icons";

/**
 * Accordion FAQ accessibile basato su <details>/<summary> (zero JavaScript)
 * + schema FAQPage per i featured snippet di Google.
 */
export default function FAQAccordion({
  items,
  title = "Domande frequenti",
  withSchema = true,
}: {
  items: FaqItem[];
  title?: string;
  withSchema?: boolean;
}) {
  return (
    <section className="mx-auto max-w-3xl">
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <h2 className="mb-6 text-2xl font-bold text-brand-900 sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-brand-100 bg-white open:border-accent-200"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-semibold text-brand-900 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDownIcon className="h-5 w-5 shrink-0 text-accent-600 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-brand-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
