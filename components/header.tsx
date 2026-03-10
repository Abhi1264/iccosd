"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { SearchModal } from "@/components/search-modal";
import { IntentLink } from "@/components/intent-link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/call-for-papers", label: "Call for Papers" },
];

const COMMITTEES_LINKS = [
  {
    href: "/committee/organizing",
    label: "Organizing Committee",
    className: "",
  },
  {
    href: "/committee/technical",
    label: "Technical Program Committee",
    className: "border-t border-gray-200",
  },
  {
    href: "/committee/advisory",
    label: "Advisory Committee",
    className: "border-t border-gray-200",
  },
];

const MORE_LINKS = [
  {
    href: "/student-volunteers",
    label: "Student Volunteers",
    className: "",
  },
  {
    href: "/directions",
    label: "Directions",
    className: "border-t border-gray-200",
  },
  {
    href: "/contact",
    label: "Contact",
    className: "border-t border-gray-200",
  },
];

const EXTRA_LINKS = [
  {
    href: "/registration",
    label: "Registration",
  },
  {
    href: "/keynote-speakers",
    label: "Keynote Speakers",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="icon.jpeg"
              alt="ICCSoD Logo"
              height={48}
              width={48}
              draggable={false}
            />
            <span className="text-xl font-bold text-primary">ICCoSD-26</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline px-3 py-2 text-sm font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}

            {/* Committees Dropdown */}
            <div className="relative group">
              <button className="link-underline px-3 py-2 text-sm font-medium text-foreground flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                Committees
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {COMMITTEES_LINKS.map((link) => (
                  <IntentLink
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-sm text-foreground hover:hover:text-primary transition-colors duration-200 ${link.className}`}
                  >
                    {link.label}
                  </IntentLink>
                ))}
              </div>
            </div>

            {EXTRA_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline px-3 py-2 text-sm font-medium text-foreground"
              >
                {link.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="link-underline px-3 py-2 text-sm font-medium text-foreground flex items-center gap-1 group-hover:text-primary transition-colors duration-300">
                More
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {MORE_LINKS.map((link) => (
                  <IntentLink
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 text-sm text-foreground hover:hover:text-primary transition-colors duration-200 ${link.className}`}
                  >
                    {link.label}
                  </IntentLink>
                ))}
              </div>
            </div>
          </nav>

          {/* Right Side - Logo Badges & Search (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="icon-hover text-foreground"
              aria-label="Search"
            >
              <Search className="w-5 h-5 cursor-pointer" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              {/* <Link href="https://www.ieee.org/" target="_blank">
                <Image
                  src="/ieee.avif"
                  alt="IEEE"
                  width={56}
                  height={24}
                  className="h-6 w-auto object-contain"
                  draggable={false}
                />
              </Link> */}
              <Link href="https://www.bitmesra.ac.in/" target="_blank">
                <Image
                  src="/bit-mesra.png"
                  alt="BIT Mesra"
                  width={72}
                  height={28}
                  className="h-10 w-auto object-contain"
                  draggable={false}
                />
              </Link>
            </div>
          </div>

          {/* Mobile: logos + hamburger grouped on the right */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* <Image
              src="/ieee.avif"
              alt="IEEE"
              width={64}
              height={28}
              className="h-12 w-auto object-contain"
              draggable={false}
            /> */}
            <Image
              src="/bit-mesra.png"
              alt="BIT Mesra"
              width={88}
              height={36}
              className="h-12 w-auto object-contain"
              draggable={false}
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 space-y-1">
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:rounded-md transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Committees */}
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "committees" ? null : "committees",
                )
              }
              className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:rounded-md transition-colors flex items-center justify-between"
            >
              Committees
              <ChevronDown
                className={`w-4 h-4 transition-transform ${openDropdown === "committees" ? "rotate-180" : ""}`}
              />
            </button>
            {openDropdown === "committees" && (
              <div className="pl-4 space-y-1">
                {COMMITTEES_LINKS.map((link) => (
                  <IntentLink
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:rounded-md transition-colors"
                  >
                    {link.label}
                  </IntentLink>
                ))}
              </div>
            )}

            {EXTRA_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile More */}
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "more" ? null : "more")
              }
              className="w-full text-left px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:rounded-md transition-colors flex items-center justify-between"
            >
              More
              <ChevronDown
                className={`w-4 h-4 transition-transform ${openDropdown === "more" ? "rotate-180" : ""}`}
              />
            </button>
            {openDropdown === "more" && (
              <div className="pl-4 space-y-1">
                {MORE_LINKS.map((link) => (
                  <IntentLink
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:rounded-md transition-colors"
                  >
                    {link.label}
                  </IntentLink>
                ))}
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
