import Link from "next/link";

interface NavLinkProps {
    href: string;
    linkName: string;
}

export function Navlink({ href, linkName }: NavLinkProps) {
  return (
    <Link href={href} className="block p-4 hover:bg-gray-700">
      {linkName}
    </Link>
  );
}
