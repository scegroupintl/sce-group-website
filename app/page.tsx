import { Button } from "@/lib/components/Button";
import { NavBar } from "@/lib/components/NavBar";
import Link from "next/link";
import { Roboto, Kaisei_Opti } from "next/font/google";
import { Services } from "@/lib/components/Services";
import Contact from "@/lib/components/Contact";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const headerFont = Kaisei_Opti({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />

      {/*<!-- Hero Section --> */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-b from-blue-800 via-blue-900 to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1
                className={`text-4xl md:text-5xl font-bold leading-tight ${headerFont.className}`}
              >
                Soluciones integrales para cada necesidad
              </h1>
              <p className="text-xl text-blue-100">
                En SCE International Group, integramos diferentes áreas de especialización
                para ofrecer respuestas completas a cada desafío
              </p>
              <div className="flex flex-col-reverse md:flex-col sm:flex-row gap-4">
                <Link href="#contact">
                  <div className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 text-center">
                    Contacto
                  </div>
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300 text-center"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={`${process.env.PAGES_BASE_PATH}/negocios.jpg`}
                alt="SCE Group"
                className="rounded-lg backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600"></p>

            <Services />
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
