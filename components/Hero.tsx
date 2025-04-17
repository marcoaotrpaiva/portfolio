import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0D1B1E] overflow-x-hidden">
      <header className="w-full flex justify-between items-center py-6 px-6">
        <h1 className="text-2xl font-bold text-pink-200">MP</h1>
        <div className="md:hidden pr-6">
          <MobileNav />
        </div>
        <nav className="hidden md:flex gap-4">
          <Link href="#sobre">
            <Button variant="outline" className="rounded-full">
              Sobre
            </Button>
          </Link>
          <Link href="#projetos">
            <Button variant="outline" className="rounded-full">
              Projetos
            </Button>
          </Link>
          <Link href="#contacto">
            <Button variant="default" className="rounded-full bg-pink-200 text-black">
              Contacto
            </Button>
          </Link>
        </nav>
      </header>

      <div className="mt-10">
        <Image
          src="/your-image.png" // substitui pelo caminho certo
          alt="Marco Paiva"
          width={224}
          height={224}
          className="block md:hidden w-56 h-56 mx-auto rounded-full"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-3xl text-gray-300">
          Olá! <span className="inline-block animate-wave">👋</span>
        </h2>
        <h1 className="text-4xl font-extrabold text-pink-200 mt-2">
          Sou o Marco Paiva
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Designer UI/UX & Criador Visual
        </p>
        <Link href="#projetos">
          <Button
            variant="outline"
            className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-pink-300 via-gray-300 to-pink-300 text-black border-none"
          >
            Projetos
          </Button>
        </Link>
      </div>
    </section>
  );
}
