import iconArcade from '/public/assets/images/icon-arcade.svg';
import iconAdvanced from '/public/assets/images/icon-advanced.svg';
import iconPro from '/public/assets/images/icon-pro.svg';
import { Plan } from './Plan';
import { IPlans } from '@/interfaces/IPLans';

const plans: IPlans[] = [
  {
    icon: iconArcade,
    receivedPlan: 'arcade',
    title: 'Arcade',
    price: 9,
  },
  {
    icon: iconAdvanced,
    receivedPlan: 'advanced',
    title: 'Advanced',
    price: 12,
  },
  {
    icon: iconPro,
    receivedPlan: 'pro',
    title: 'Pro',
    price: 15,
  },
];

export function PlanList() {
  return (
    <ul className="space-y-3 w-full mt-4 xl:grid xl:grid-cols-3 xl:mt-8 xl:items-end xl:gap-5">
      {plans.map((plan) => (
        <li key={plan.title}>
          <Plan
            icon={plan.icon}
            title={plan.title}
            price={plan.price}
            receivedPlan={plan.receivedPlan}
          />
        </li>
      ))}
    </ul>
  );
}
