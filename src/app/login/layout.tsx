import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Login - Better Mind - Editor de pensamentos",
  description: "Editor de pensamentos. Organize sua mente.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={nunito.className}>
      <div className="bg-cover bg-center bg-no-repeat bg-[url('/modelo-bg-waves-02.jpg')]">
        <div className="flex h-[100vh] items-center justify-end pr-96">
          {children}
        </div>
      </div>
    </section>
  );
}
