import LinkedIn from "~/assets/svg/linkedin.svg";
import Discord from "~/assets/svg/discord.svg";
import Github from "~/assets/svg/github.svg";

import { Logo } from "@/components/atoms/Logo";
import Link from "next/link";
import { links } from "@/constants/navLinks";
import { NavLink } from "@/components/atoms/NavLink";

const CommonFooter = () => {
  return (
    <footer className="bg-dark">
      <div className="max-w-screen-xl mx-auto pt-16">
        <div className="flex justify-between items-center  py-8 mb-8 border-y border-y-gray-800">
          <Link href="/">
            <Logo
              className="rounded w-16 h-16 bg-main"
              pathClassName="fill-white"
            />
          </Link>
          <div className="flex gap-8 text-white">
            {links.map((link, idx) => (
              <NavLink key={idx} href={link.path} variant="white">
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <p className="text-white">
            &copy; 2023 <Link href="/">Nexium</Link>. All rights reserved.{" "}
            <span className="text-gray-600">
              {" "}
              Created by{" "}
              <Link
                className="underline"
                target="_blank"
                href="https://samoudianas.dev"
              >
                Anas Samoudi
              </Link>
            </span>
          </p>
          <div className="flex gap-8 text-white">
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Visit our linkedin page</span>
              <LinkedIn />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Visit our discord server</span>
              <Discord />
            </a>
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Visit our linkedin page</span>
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CommonFooter };
