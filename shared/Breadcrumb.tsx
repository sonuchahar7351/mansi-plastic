import Link from "next/link";
import React from "react";

const Breadcrumb = ({ tag }: { tag: string }) => {
  return (
    <nav
      className={
        "flex items-center gap-2 text-md text-gray-300 mb-4 opacity-0 animate-fadeUp"
      }
      aria-label="Breadcrumb"
    >
      <Link
        className="relative transition-all duration-200 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full hover:text-accent "
        href="/"
      >
        Home
      </Link>
      <span className={"text-gray-400 text-base"}>›</span>
      <span className={"text-accent font-semibold"}>{tag}</span>
    </nav>
  );
};

export default Breadcrumb;
