"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { footerLinks, contactDetails, socialLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const socialIcons = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
};

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F1F2F4] border-t border-borderc">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <p className="text-xl font-bold text-primary">
            <Image
              src="/images/mplogopng.png"
              alt="Mansi Plastic Logo"
              width={60}
              height={40}
            />
          </p>
          <p className="mt-4 text-sm text-body/80 leading-relaxed max-w-sm">
            {t("footer.description")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-borderc text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-primary">
            {t("footer.quickLinks")}
          </p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-body/80 hover:text-primary"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-primary">
            {t("footer.getInTouch")}
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-body/80">
              <Mail size={16} className="mt-0.5 shrink-0 text-secondary" />
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-primary"
              >
                {contactDetails.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-body/80">
              <Phone size={16} className="mt-0.5 shrink-0 text-secondary" />
              <a
                href={`tel:${contactDetails.phone}`}
                className="hover:text-primary"
              >
                {contactDetails.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-body/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>{t("footer.address")}</span>
            </li>
          </ul>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
            loading="lazy"
            width="100%"
            height="200"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-borderc">
        <div className="container-page py-5 text-center text-xs text-body/70">
          © {new Date().getFullYear()} Mansi Plastic. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
