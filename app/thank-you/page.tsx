// "use client";

// import Link from "next/link";
// import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";

// export default function ThankYouPage() {
//   return (
//     <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-xl text-center">
//         {/* Success Icon */}
//         <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
//           <CheckCircle
//             size={44}
//             className="text-green-600 dark:text-green-400"
//           />
//         </div>

//         {/* Content */}
//         <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
//           Thank You!
//         </h1>

//         <p className="mt-4 text-lg text-muted-foreground">
//           Your enquiry has been successfully submitted.
//         </p>

//         <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
//           Thank you for reaching out to us. We’ve received your enquiry and our
//           team will review your query. We’ll get in touch with you soon.
//         </p>

//         {/* Info Card */}
//         <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-left shadow-sm">
//           <div className="flex gap-4">
//             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
//               <MessageCircle size={20} className="text-primary" />
//             </div>

//             <div>
//               <h2 className="font-semibold text-foreground">
//                 What happens next?
//               </h2>

//               <p className="mt-1 text-sm leading-6 text-muted-foreground">
//                 Our team will review your enquiry and contact you shortly to
//                 discuss your query and understand how we can help.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Button */}
//         <Link
//           href="/"
//           className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
//         >
//           <ArrowLeft size={18} />
//           Back to Home
//         </Link>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-page text-center max-w-xl mx-auto">
        <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Thank You!
        </h1>
        <p className="mt-4 text-sm text-body/80">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
