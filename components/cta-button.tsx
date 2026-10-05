import Link from "next/link";
import { ReactNode } from "react";

export function CTAButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-8 py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-white bg-yellow-500 text-white hover:bg-yellow-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </Link>
  );
}
