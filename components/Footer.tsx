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
          <div className="">Sonu plastic</div>
          <p className="mt-4 text-sm text-body/80 leading-relaxed max-w-sm">
            Manufacturers and suppliers of plastic toys.
            <br />
            Reliable toy. Durable quality. Trusted performance.
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
              <span>{contactDetails.officeAddress}</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-body/80">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>{contactDetails.ManufacturingUnit}</span>
            </li>
          </ul>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14216.873012716693!2d77.83831629186062!3d27.02326852529875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39738b52a4a871e9%3A0x503bf3ee28f2a722!2sKagarol%2C%20Uttar%20Pradesh%20283119!5e0!3m2!1sen!2sin!4v1786720241781!5m2!1sen!2sin"
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
          © {new Date().getFullYear()} Sonu Plastic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
