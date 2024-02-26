'use client';

import { Separator } from '@/components/ui/separator';
import { useAppState } from '@/context/state';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getPriceForPlan, getPriceForService } from '@/utils/getPriceFor';
import _ from 'lodash';
import AppState, { SetAppState } from '@/interfaces/AppState';

export function FinishingUpCardContent() {
  const router = useRouter();
  const [state] = useAppState() as [AppState, SetAppState];

  const billingCycleLabel = state.option === 'monthly' ? 'mês' : 'ano';

  if (_.isEmpty(state)) {
    if (typeof window !== 'undefined') router.replace('/');
    return;
  }

  

  const getTotalCost = (): number => {
    const planCost = getPriceForPlan(state.plan as string, state.option);
    const servicesCost = state.services.reduce(
      (total: number, service: string) =>
        total + getPriceForService(service, state.option),
      0
    );

    return planCost + servicesCost;
  };

  return (
    <>
      <section className="bg-slate-100/70 rounded-xl p-4 mt-4 lg:mt-8 lg:p-6">
        <div className="flex items-center justify-between pb-4">
          <div className="flex flex-col">
            <h4 className="font-bold lg:text-lg">
              {capitalizeFirstLetter(state.plan as string)} (
              {state.option === 'monthly' ? 'Mensal' : 'Anual'})
            </h4>
            <Link
              href={'/plans'}
              className="text-sm underline text-slate-400 transition-colors hover:text-purplish-blue lg:text-base"
            >
              Alterar
            </Link>
          </div>

          <span className="font-semibold text-sm lg:text-base">
            R${getPriceForPlan(state.plan as string, state.option)}/
            {billingCycleLabel}
          </span>
        </div>

        <Separator />

        <ul className="flex flex-col gap-2 pt-4">
          {state.services.length === 0 ? (
            <span className="text-sm text-slate-400 lg:text-base">
              Nenhum complemento adicionado
            </span>
          ) : (
            state.services.map((service: string) => (
              <li className="flex items-center justify-between" key={service}>
                <span className="text-sm text-slate-400 lg:text-base">
                  {service}
                </span>
                <span className="text-sm lg:text-base">
                  +R${getPriceForService(service, state.option)}/
                  {billingCycleLabel}
                </span>
              </li>
            ))
          )}
        </ul>
      </section>
      <section className="flex items-center justify-between w-11/12 m-auto pt-8">
        <span className="text-slate-400">Total (por {billingCycleLabel})</span>
        <span className="font-bold text-purplish-blue/90">
          +R${getTotalCost()}/{billingCycleLabel}
        </span>
      </section>
    </>
  );
}
