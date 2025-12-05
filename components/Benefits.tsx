import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  list: string[];
  brief: string;
}

const Card = ({ title, description, brief, imageSrc, reverse, list }: CardProps) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center p-8 mt-24`}>
      <Image src={imageSrc} alt={title} width={600} height={400} />
      <div className="md:ml-8 md:mr-8 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="inline-block bg-gray-200 text-gray-800 font-medium rounded-lg px-4 py-2 hover:bg-gray-300">{title}</h2>
        <p className="text-gray-800 text-2xl mt-4">
          <span className="font-bold font-2xl">{description} </span>
          {brief}
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-800">
          {list.map((item, index) => (
            <li key={index} className="flex items-center mt-2">
              <img src='/Check.png' alt='checkicon' className="mr-2 w-4 h-4" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="container mx-auto  px-4 py-16 transform scale-105 mt-5">
      <div className="flex flex-col items-center mb-8">
        <img className="mb-4 w-24 h-24" src="/love.png" alt="icon" />
        <h1 className="text-4xl font-bold text-center flex items-center">
          ¿Por qué elegir DalmFoods?
          <img className="ml-4 w-12 h-12" src="/logo_dalm.png" alt="dalmfoods-icon" />
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 ">
        <Card
          title="Dashboard Empresarial"
          description="Controla membresías, empleados y consumos "
          brief="desde un solo lugar"
          list={[
            "Gestión de empleados y membresías",
            "Reportes de consumo en tiempo real",
            "Configura subsidio (50%, 100% o personalizado)",
            "Control de presupuesto mensual"
          ]}
          imageSrc="/discovery.png"
        />
        <Card
          title="App Móvil"
          description="Pide tu comida favorita y paga "
          brief="con tu membresía empresarial"
          list={[
            "Explora restaurantes cercanos",
            "Solicita tu comida en segundos",
            "Genera QR para canjear",
            "Consulta tu saldo disponible"
          ]}
          imageSrc="/library.png"
          reverse
        />
        <Card
          title="Dashboard Restaurantes"
          description="Recibe pedidos y gestiona canjes "
          brief='de forma sencilla'
          list={[
            "Escanea QR de empleados",
            "Recibe pagos automáticos",
            "Estadísticas de ventas",
            "Apoyo al comercio local"
          ]}
          imageSrc="/Matchmaking.png"
        />
        <Card
          title="Ecosistema Completo"
          description="Una plataforma que conecta "
          brief='empresas, empleados y restaurantes'
          list={[
            "Flexibilidad para elegir dónde comer",
            "Apoyo a negocios locales (fondas, restaurantes)",
            "Proceso de pago simplificado",
            "Beneficio real para empleados"
          ]}
          imageSrc="/Tools.png"
          reverse
        />
      </div>
    </div>
  );
};

export default Benefits;
