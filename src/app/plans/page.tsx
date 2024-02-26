'use client';

import { useAppState } from '@/context/state';
import { Container } from '@/components/Container';
import { Sidebar } from '@/components/Sidebar';
import { CardWrapper } from '@/components/Card/ui/card-wrapper';
import { CardHeader } from '@/components/Card/CardHeader';
import { CardContent } from '@/components/Card/CardContent';
import { useRouter } from 'next/navigation';
import AppState, { SetAppState } from '@/interfaces/AppState';
import { StepNavigation } from '@/components/StepNavigation';

export default function Plans({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  const [state, setState] = useAppState() as [AppState, SetAppState];
  const router = useRouter();
  const plan = searchParams.plan ?? 'arcade';
  const option = searchParams.option ?? 'montlhy';

  const handleSubmit = () => {
    setState({ ...state, plan, option });
    router.push(`/addons`);
  };

  return (
    <Container className="">
      <Sidebar.Mobile currentStep={2} />
      <Sidebar.Desktop currentStep={2} />

      <CardWrapper>
        <CardHeader
          heading="Selecione seu plano"
          description="Você tem a opção de pagamento mensal ou anual."
        />

        <CardContent.Plans />

        <StepNavigation
          onSubmit={handleSubmit}
          toPath={`/?plan=${plan}&option=${option}`}
          step={2}
        />
      </CardWrapper>
    </Container>
  );
}
