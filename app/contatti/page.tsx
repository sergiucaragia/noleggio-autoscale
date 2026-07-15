import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { business, links } from "@/lib/config";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Contatti e Preventivi | Noleggio Autoscale Torino",
  description:
    "Contatta Noleggio Autoscale: telefono 320 892 1103, WhatsApp e form preventivo. Sede in Via Italia 88, Settimo Torinese. Attivi 7 giorni su 7, 8-20.",
  path: "/contatti",
});

export default function ContattiPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contatti", path: "/contatti/" },
        ]}
      />

      <PageHero
        eyebrow="Contatti"
        title="Contatti e preventivi"
        description="Chiamaci, scrivici su WhatsApp o compila il form: ti rispondiamo in poche ore, 7 giorni su 7."
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Recapiti */}
          <div className="space-y-5 lg:col-span-2">
            <h2 className="text-xl font-bold text-brand-900">I nostri recapiti</h2>

            <a
              href={links.tel}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Telefono</span>
                <span className="block text-lg font-bold text-brand-900">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-wa">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">WhatsApp</span>
                <span className="block text-lg font-bold text-brand-900">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={links.email}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <MailIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Email</span>
                <span className="block break-all font-bold text-brand-900">
                  {business.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <MapPinIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Sede</span>
                <span className="block font-bold text-brand-900">
                  {business.address.street}, {business.address.city} (
                  {business.address.province})
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <ClockIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm text-gray-500">Orari</span>
                <span className="block font-bold text-brand-900">
                  {business.openingHours.days}, {business.openingHours.hours}
                </span>
              </span>
            </div>

            {/* TODO: quando disponibile il Google Business Profile, inserire
                qui l'embed di Google Maps della sede (iframe con loading="lazy") */}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xl font-bold text-brand-900">
              Richiedi un preventivo gratuito
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
