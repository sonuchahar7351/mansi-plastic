import Link from "next/link";
import {
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { footerLinks, contactDetails, socialLinks } from "@/lib/data";

const socialIcons = {
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="bg-[#F1F2F4] border-t border-borderc">
      <div className="container-page py-14 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-2">
          <p className="text-xl font-bold text-primary">Mansi Plastic</p>
          <p className="mt-4 text-sm text-body/80 leading-relaxed max-w-sm">
            Mansi Plastic&apos;s efforts over the decades have made its products
            among the most sought after in the domain, including
            high-application shrink bundling for paperboard, reams, glass
            bottles, and collation shrink packaging.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon =
                socialIcons[social.label as keyof typeof socialIcons];
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
          <p className="text-sm font-semibold text-primary">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-body/80 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-primary">Get in Touch</p>
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
              <span>{contactDetails.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="border-t border-borderc">
        <div className="container-page py-5 text-center text-xs text-body/70">
          © {new Date().getFullYear()} Mansi Plastic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
