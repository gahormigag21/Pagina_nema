import { Fingerprint, ScrollText } from "lucide-react";

export const featuresProps = {
  badge: "Certificaciones",
  heading: "Comprometidos con la calidad y la mejora continua",
  description: "Contamos con certificaciones que garantizan la calidad y seguridad de nuestros procesos.",
  tabs: [
    {
      value: "tab-1",
      icon: <ScrollText className="h-auto w-4 shrink-0" />,
      label: "Certificado SGS",
      content: {
        badge: "certificaión ID: CO11/4112",
        title: "ISO 9001:2015 Quality Management System Certification",
        description:
          "Construcción de obras civiles asociadas con la rehabilitación, mantenimiento y construción de redes de acueducto, alcantarillado y obras de infraestructura vial. Fabricación de accesorios para tuberias de acero utilizadas en el transporte de fluidos a presión con recubrimientos internos y externos en pintura epóxica o mortero de cemento",
        buttonText: "Ver Certificado",
        imageSrc: "/images/SGS.png",
        imageAlt: "placeholder",
        url: "https://www.sgs.com/en-co/certified-clients-and-products/certified-client-directory",
      },
    },
    {
      value: "tab-2",
      icon: <Fingerprint className="h-auto w-4 shrink-0" />,
      label: "Certifcado Icontec",
      content: {
        badge: "Certificado CSR -CER787161",
        title: "Resolución 0501 del 4 de agosto de 2017 del Ministerio de Vivienda, Ciudad y Territorio",
        description:
          "Requisitos técnicos relacionados con la composición química e información, que deben cumplir los tubos, ductos y accesorios de acueducto y alcantarillado, los de uso sanitario y los de aguas lluvias, que adquieran las personas prestadoras de los servicios de acueducto y alcantarillado, así como las instalaciones hidrosanitarias al interior de las viviendas.",
        buttonText: "Ver Certificado",
        imageSrc: "/images/icontec.png",
        imageAlt: "placeholder",
        url: "https://www.huelladeconfianza.org/#/Consultar",
      },
    },
  ],
};
