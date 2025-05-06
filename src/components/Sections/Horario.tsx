'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const businessHours: Record<string, string> = {
  lunes: '7:00 a.m. - 5:00 p.m.',
  martes: '7:00 a.m. - 5:00 p.m.',
  miércoles: '7:00 a.m. - 5:00 p.m.',
  jueves: '7:00 a.m. - 5:00 p.m.',
  viernes: '7:00 a.m. - 5:00 p.m.',
  sábado: 'Cerrado',
  domingo: 'Cerrado',
};

const getTodayInfo = () => {
  const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
  ];
  const todayIndex = new Date().getDay();
  const todayName = dias[todayIndex];
  const todayHours = businessHours[todayName];

  return {
    day: todayName,
    status: todayHours === 'Cerrado'
      ? 'Cerrado hoy'
      : `Abre hoy de ${todayHours}`,
  };
};

export function Horario() {
  const today = getTodayInfo();

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="horarios">
        <AccordionTrigger className="text-left">
          {today.status}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-1">
            {Object.entries(businessHours).map(([day, hours]) => (
              <li key={day} className="flex justify-between text-sm">
                <span className="capitalize">{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
