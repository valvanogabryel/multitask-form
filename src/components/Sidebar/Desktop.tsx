import Image from 'next/image';
import desktopSidebar from '/public/assets/images/bg-sidebar-desktop.svg';

const steps = [
  {
    number: 1,
    name: 'Informação',
  },
  {
    number: 2,
    name: 'Plano',
  },
  {
    number: 3,
    name: 'Complementos',
  },
  {
    number: 4,
    name: 'Sumário',
  },
];

interface StepSectionProps {
  currentStep: number;
}

export function DesktopSidebar({ currentStep }: Readonly<StepSectionProps>) {
  return (
    <section className="relative pointer-events-none select-none hidden h-full min-w-max max-w-fit w-full md:block ">
      <ul className="flex flex-col justify-center items-start p-8 text-white absolute font-medium gap-8">
        {steps.map((step) => (
          <li key={step.number} className="flex items-center gap-4">
            <span
              className={`border rounded-full px-2.5 py-0.5 ${
                step.number === currentStep && 'bg-magnolia text-marine-blue'
              }`}
            >
              {step.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs font-light text-cool-gray">
                PASSO {step.number}
              </span>
              <h4 className="font-bold -mt-0.5 tracking-wider text-muted">
                {step.name.toLocaleUpperCase()}
              </h4>
            </div>
          </li>
        ))}
      </ul>
      <Image src={desktopSidebar} alt="" aria-hidden className="h-fit" />
    </section>
  );
}
