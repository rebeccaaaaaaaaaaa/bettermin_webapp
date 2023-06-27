"use client";
import Image from "next/image";
import { useMenu } from "../../hooks/useMenu";
import Link from "next/link";
import { WelcomeBar } from "../WelcomeBar";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { isSidebarOpen, toggleSidebar } = useMenu();
  const { userName } = useAuth();
  return (
    <header className="w-full bg-primary text-white p-4 flex items-center justify-between">
      <Link href="/home">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-8 w-8 inline-block rounded-full bg-white"
          width={32}
          height={32}
        />
        <h1 className="text-lg font-bold inline-block ml-2">Better Mind</h1>
      </Link>
      <WelcomeBar user={userName} />
      <div className="flex items-center gap-5">
        <button className="mr-4 bg-slate-700 text-white rounded-full flex items-center gap-2 p-2">
          <Link href="/home">Adicionar</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <button onClick={toggleSidebar} className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
