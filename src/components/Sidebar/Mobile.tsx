import Image from 'next/image';
import sidebarMobile from '/public/assets/images/bg-sidebar-mobile.svg';

const steps = [1, 2, 3, 4];

interface StepSectionProps {
  currentStep: number;
}

export function MobileSidebar({ currentStep }: Readonly<StepSectionProps>) {
  return (
    <section className="absolute top-0 left-0 -z-50 w-full h-fit md:hidden">
      <ul className="flex absolute p-8 left-1/2 -translate-x-1/2  text-white font-medium gap-4">
        {steps.map((step) => (
          <li
            key={step}
            className={`border rounded-full px-2.5 py-0.5 ${
              step === currentStep && 'bg-white text-marine-blue'
            }`}
          >
            {step}
          </li>
        ))}
      </ul>
      <Image src={sidebarMobile} alt="" aria-hidden className="w-full h-fit" />
    </section>
  );
}
