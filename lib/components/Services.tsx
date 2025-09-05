import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const Services = () => {
  const companies = [
    {
      logo: `${process.env.PAGES_BASE_PATH}/sce_intl_square.jpg`,
      name: "SCE International",
      description:
        "Servicios de Landscaping, Pintura, Plomería, Albañilería, Mantenimiento y más",
      expandedContent:
        "Ofrecemos servicios de jardinería, mantenimiento de aires acondicionados, plomería, pintura y remodelación, con soluciones confiables y de calidad para renovar, mantener y mejorar cualquier espacio.",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop&crop=center",
      colors: "from-blue-700/10 to-sky-600/10",
      borderColor: "border-blue-600/20",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      shadowColor: "hover:shadow-blue-700/25",
      hoverTextColor: "",
      bgGradient: "bg-gradient-to-r",
    },
    {
      logo: `${process.env.PAGES_BASE_PATH}/sce-accounting.jpg`,
      name: "SCE Accounting Services",
      description: "Servicios de contabilidad y preparación de impuestos",
      expandedContent:
        "Proporcionamos servicios contables integrales que abarcan desde la gestión de impuestos y cumplimiento fiscal hasta la organización financiera y asesoría personalizada, ayudando a tu empresa o proyecto a mantener estabilidad y crecer con confianza.",
      image:
        "https://images.unsplash.com/photo-1530971013997-e06bb52a2372?w=400&h=300&fit=crop&crop=center",
      colors: "from-emerald-200/10 to-cyan-500/10",
      borderColor: "border-teal-600/20",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      shadowColor: "hover:shadow-teal-700/25",
      hoverTextColor: "",
      bgGradient: "bg-gradient-to-r",
    },
    {
      logo: `${process.env.PAGES_BASE_PATH}/sce-cinematic.jpg`,
      name: "SCE Cinematic Group",
      description: "Grabación y producción de videos profesionales.",
      expandedContent:
        "Nos especializamos en registrar eventos y producir videos profesionales, desde la grabación y edición hasta entrevistas y otros formatos audiovisuales que destacan y dan vida a cada ocasión.",
      image:
        "https://images.unsplash.com/photo-1575411602736-5e9f24e277d0?w=400&h=300&fit=crop&crop=center",
      colors: "hover:from-slate-900/70 hover:to-neutral-900",
      borderColor: "border-indigo-600/20",
      buttonColor: "bg-blue-700 hover:bg-blue-600",
      shadowColor: "hover:shadow-slate-700/25",
      hoverTextColor: "group-hover:text-white",
      bgGradient: "bg-radial",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
      {companies.map((company, index) => (
        <div
          key={index}
          className={`group bg-white/10 rounded-xl border ${company.borderColor} overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${company.shadowColor} ${company.hoverTextColor}`}
        >
          {/* Main card content - always visible */}
          <div
            className={`p-5 h-[176px] flex items-center bg-none hover:${company.bgGradient} ${company.colors} group-hover:items-start space-x- text-left gap-6 hover:h-[450px] transition-all duration-500 ease-out`}
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="w-32 h-32 rounded group-hover:align-top"
            />
            <div className="flex-1">
              <div className="h-32 flex justify-center flex-col">
                <h3
                  className={`text-xl font-semibold text-slate-900 mb-1 ${company.hoverTextColor}`}
                >
                  {company.name}
                </h3>
                <p
                  className={`text-slate-800 text-lg ${company.hoverTextColor}`}
                >
                  {company.description}
                </p>
              </div>

              {/* Expanded content - shown on hover */}
              <div
                className={`${roboto.className} hidden group-hover:block opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out`}
              >
                <div className="">
                  <img
                    src={company.image}
                    alt={`${company.name} visual`}
                    className="w-full h-32 object-cover rounded-lg shadow-lg my-4"
                  />
                  <p
                    className={`text-slate-800 text-sm leading-relaxed ${company.hoverTextColor}`}
                  >
                    {company.expandedContent}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button
                      className={`px-6 py-2 ${company.buttonColor} ml-auto text-white text-sm rounded transition-colors duration-200 cursor-pointer`}
                    >
                      Ver Más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
