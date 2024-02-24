const servicePrices = [
  {
    service: 'Serviço online',
    price: 1,
  },
  {
    service: 'Maior armazenamento',
    price: 2,
  },
  {
    service: 'Perfil customizável',
    price: 2,
  },
];

const planPrices = [
  {
    plan: 'arcade',
    price: 9,
  },
  {
    plan: 'advanced',
    price: 12,
  },
  {
    plan: 'pro',
    price: 15,
  },
];

function getPriceForService(
  serviceName: string,
  option: string | string[]
): number {
  const service = servicePrices.find((s) => s.service === serviceName);
  if (service) return option === 'monthly' ? service.price : service.price * 10;

  return 1;
}

function getPriceForPlan(planName: string, option: string | string[]): number {
  const plan = planPrices.find((p) => p.plan === planName);
  if (plan) return option === 'monthly' ? plan.price : plan.price * 10;

  return 9;
}

export { getPriceForService, getPriceForPlan };
