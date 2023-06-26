import Link from "next/link";

export function LoggedWarning() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/modelo-bg-waves-02.jpg')]">
      <div className="flex h-[100vh] items-center justify-end pr-96">
        <form className="flex flex-col bg-[#ffffff6e] p-8 rounded-lg shadow-lg w-96">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-primary">
              Você não está logado
            </h1>
            <p className="text-center">
              Para acessar essa página você precisa estar logado
            </p>
            <Link href="/" className="text-blue-500">
              Ir para a página de login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
