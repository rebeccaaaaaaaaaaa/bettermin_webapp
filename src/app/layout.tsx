import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MenuProvider } from "../contexts/menu";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ModalProvider } from "@/contexts/modal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Better Mind - Editor de pensamentos",
  description: "Editor de pensamentos. Organize sua mente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <MenuProvider>
          <ModalProvider>{children}</ModalProvider>
        </MenuProvider>
      </body>
    </html>
  );
}