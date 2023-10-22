import { MenuProvider } from "../contexts/menu";
import "./globals.css";
import { Nunito } from "next/font/google";
import { ModalProvider } from "@/contexts/modal";
import { EditorProvider } from "@/contexts/editor";
import { AuthProvider } from "@/contexts/auth";
import { ItemsProvider } from "@/contexts/items";

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
          <ModalProvider>
            <EditorProvider>
              <ItemsProvider>
                <AuthProvider>{children}</AuthProvider>
              </ItemsProvider>
            </EditorProvider>
          </ModalProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
