import { NavBar } from "@/lib/components/NavBar";

export default function Page() {
  return (
    <main className="min-h-screen pt-16">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1667922578520-61558e79aa7e?auto=format&fit=crop&w=1600&q=80"
          alt="Teamwork Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-neutral-900/40 p-12">
            <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
              Sobre Nosotros
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center bg-gray-50 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="md:text-lg text-gray-700 mb-4 text-justify">
              Hemos decidido comenzar un proyecto en diferentes estados del
              país, este proyecto encierra un grupo de ideas que estimulan el
              crecimiento laboral como el desarrollo espiritual de las personas
              con las que trabajamos.
              <br />
              <br />
              Principalmente en los edificios donde llevamos acabo servicios
              laborales, contratamos miembros del barrio con llamamiento en el
              Sacerdocio para que puedan tener un compromiso laboral al igual
              como un deseo de cuidado y mantenimiento en el edificio donde
              asiste.
            </p>
            <video
              width="400"
              muted
              autoPlay
              className="fade-in bg-turquoise-lightest rounded-md shadow-lg mb-6 md:mb-0"
            >
              <source src={`${process.env.PAGES_BASE_PATH}/sce-logo-video.mp4`} type="video/mp4" />
            </video>
          </div>
          <div>
            <p className="md:text-lg text-gray-700 my-4 text-justify">
              La visión principal es que los miembros puedan tener una
              estabilidad económica y por ende un enfoque espiritual en sus
              responsabilidades eclesiásticas como también una seguridad
              constante de necesidades básicas cubiertas en casa. Contamos con
              otras empresas aliadas que han decidido que nosotros seamos
              agentes autorizados de su marca en Venezuela para vender, instalar
              y proveer el servicio que sea necesario para un mantenimiento
              constante y una garantía certificada por su fabricante.
            </p>
            <p className="md:text-lg text-gray-700 my-4 text-justify">
              Como empresa, nuestro compromiso es hacer un trabajo profesional y
              de alta calidad para así cumplir y/o lograr los estándares
              requeridos, nos sentimos capaces de responder ante cualquier
              servicio que se nos requiera dentro de lo que hemos ofrecido
              previamente. Vale acotar que el equipo de trabajo gerencial como
              obrero son miembros de la Iglesia de Jesucristo de los Santos de
              los Últimos Días, estrictamente seleccionados con diferente
              conocimiento en las áreas que ofrecemos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
