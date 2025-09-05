"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { BarLoader } from "react-spinners";
import toast from "react-hot-toast";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  // Local State
  const [loading, setLoading] = React.useState(false);

  // Constants
  const inputClassNames =
    "w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-200 border-opacity-30 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400";

  // Methods
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formInputs = e.target as HTMLFormElement;
    const customerName = formInputs.customerName.value;
    const email = formInputs.email.value;
    const phone = formInputs.phone.value;
    const service = formInputs.service.value;
    const message = formInputs.description.value;

    const formData = new FormData();
    formData.append("Nombre", customerName);
    formData.append("Correo Electrónico", email);
    formData.append("Teléfono", phone);
    formData.append("Servicio", service);
    formData.append("Mensaje", message);
    formData.append("access_key", "d4d2ab83-9ae1-4db5-b9ac-b33e89562cab");

    const promise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    toast.promise(
      promise.then((res) => {
        setLoading(false);

        if (!res.ok) {
          return Promise.reject(new Error("Failed to send message"));
        }
      }),
      {
        loading: "Enviando mensaje...",
        success: "Mensaje enviado con éxito!",
        error: "Error al enviar el mensaje.",
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-blue-100">
            Nuestro equipo de soporte se encuentra completamente operativo para
            brindarle la mejor atención, rellene el formulario y nos pondremos
            en contacto con usted.
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
            className={`bg-white text-slate-950 bg-opacity-10 rounded-lg overflow-hidden shadow-xl/30 ${roboto.className}`}
          >
            <BarLoader loading={loading} width={"100%"} color="#3d7beb" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center border-b border-gray-200 pb-6">
                Formulario de Contacto
              </h3>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="customerName"
                    className="mb-1 text-sm font-medium"
                  >
                    Nombre y Apellido
                  </label>
                  <input
                    id="customerName"
                    type="text"
                    placeholder="Nombre y Apellido"
                    className={inputClassNames}
                    required
                  />
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
                    required
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
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="service" className="mb-1 text-sm font-medium">
                    Servicio
                  </label>
                  <select id="service" className={inputClassNames} required>
                    <option value="">Seleccionar Servicio</option>
                    <option value="Jardinería">Jardinería</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Albañilería">Albañilería</option>
                    <option value="Mantenimiento">Mantenimiento</option>
                    <option value="Contabilidad">Contabilidad</option>
                    <option value="Producción Audiovisual">Producción Audiovisual</option>
                    <option value="Otro">Otro</option>
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
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary px-6 py-3 rounded-lg font-semibold border text-blue-800 border-blue-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition-colors duration-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
