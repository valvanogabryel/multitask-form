'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useSearchParams } from 'next/navigation';

interface PlanProps {
  icon: any;
  receivedPlan: 'arcade' | 'advanced' | 'pro';
  title: string;
  price: number;
}

export function Plan({
  icon,
  receivedPlan,
  title,
  price,
}: Readonly<PlanProps>) {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') as 'arcade' | 'advanced' | 'pro';
  const option = searchParams.get('option') ?? 'montlhy';

  return (
    <Link
      className={`flex w-full gap-4 border p-4 rounded-lg border-light-gray transition-all hover:border-purplish-blue xl:flex-col xl:justify-between xl:min-h-44 ${
        plan === receivedPlan &&
        'bg-pastel-blue bg-opacity-10 border-purplish-blue'
      }`}
      href={`?${new URLSearchParams({
        plan: receivedPlan,
        option,
      })}`}
    >
      <Image src={icon} alt="" aria-hidden />
      <div className="flex flex-col gap-0.5">
        <h3 className="font-semibold text-marine-blue text-left">{title}</h3>
        <span className="text-cool-gray text-sm">
          R${option === 'monthly' ? price : price * 10}/
          {option === 'monthly' ? 'mês' : 'ano'}
        </span>
        {option === 'yearly' && (
          <span className="text-sm animate-fade-up">2 meses de graça</span>
        )}
      </div>
    </Link>
  );
}
