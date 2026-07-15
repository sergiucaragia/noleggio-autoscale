import { links } from "@/lib/config";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/**
 * Barra CTA fissa in basso, solo mobile (come falanoleggi.it):
 * "Chiama ora" + "WhatsApp" sempre raggiungibili con il pollice.
 * Il padding-bottom del body (globals.css) evita che copra i contenuti.
 */
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
      <a
        href={links.tel}
        className="flex items-center justify-center gap-2 bg-brand-700 py-4 font-bold text-white active:bg-brand-800"
      >
        <PhoneIcon className="h-5 w-5" />
        Chiama ora
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-wa py-4 font-bold text-white active:bg-wa-dark"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
