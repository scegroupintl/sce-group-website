import { Button } from "@/lib/components/Button";
import { NavBar } from "@/lib/components/NavBar";
import Link from "next/link";
import { Roboto , Kaisei_Opti} from "next/font/google";
import { Services } from "@/lib/components/Services";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const headerFont = Kaisei_Opti({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const inputClassNames =
    "w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-200 border-opacity-30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400";
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
              <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${headerFont.className}`}>
                Soluciones integrales para cada necesidad
              </h1>
              <p className="text-xl text-blue-100">
                En SCE Group, integramos diferentes áreas de especialización
                para ofrecer respuestas completas a cada desafío
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                src="/negocios.jpg"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600">
              
            </p>

            <Services />
          </div>
        </div>
      </section>

      {/*<!-- Contact Section --> */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contacto</h2>
            <p className="text-xl text-blue-100">
              Nuestro equipo de soporte se encuentra completamente operativo
              para brindarle la mejor atención, rellene el formulario y nos
              pondremos en contacto con usted.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Información de Contacto
              </h3>
              <div className={"space-y-4 " + roboto.className}>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-secondary mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-secondary mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@internationalsce.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-secondary mr-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Calle Bolivar C/C Cedeño Edificio San Cristobal - Piso 1,
                    Oficina #2
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">
                  Horario de Atención
                </h4>
                <div className="space-y-2 text-blue-50 tracking-wide">
                  <div className={roboto.className}>
                    <span className="font-semibold">Lunes - Viernes:</span> 7:00
                    AM - 6:00 PM
                  </div>
                  <div className={roboto.className}>
                    <span className="font-semibold">Sábado y Domingo:</span>{" "}
                    CERRADO
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-white text-slate-950 bg-opacity-10 rounded-lg p-6 backdrop-blur-sm ${roboto.className}`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center border-b border-gray-200 pb-6">
                Formulario de Contacto
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="mb-1 text-sm font-medium"
                    >
                      Nombre
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Nombre"
                      className={inputClassNames}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="mb-1 text-sm font-medium"
                    >
                      Apellido
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Apellido"
                      className={inputClassNames}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-sm font-medium">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Correo Electrónico"
                    className={inputClassNames}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="mb-1 text-sm font-medium">
                    Número de Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Número de Teléfono"
                    className={inputClassNames}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="service" className="mb-1 text-sm font-medium">
                    Servicio
                  </label>
                  <select id="service" className={inputClassNames}>
                    <option value="">Seleccionar Servicio</option>
                    <option value="landscaping">Jardinería</option>
                    <option value="hvac">HVAC</option>
                    <option value="painting">Pintura</option>
                    <option value="plumbing">Fontanería</option>
                    <option value="construction">Construcción General</option>
                    <option value="maintenance">Mantenimiento</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className="mb-1 text-sm font-medium"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="description"
                    placeholder="Mensaje"
                    rows={4}
                    className={inputClassNames}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary px-6 py-3 rounded-lg font-semibold border border-slate-900 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
