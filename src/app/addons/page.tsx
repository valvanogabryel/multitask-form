'use client';

import { Container } from '@/components/Container';
import { Sidebar } from '@/components/Sidebar';
import { CardWrapper } from '@/components/Card/ui/card-wrapper';
import { CardHeader } from '@/components/Card/CardHeader';
import { CardContent } from '@/components/Card/CardContent';
import { StepNavigation } from '@/components/StepNavigation';
import { useAppState } from '@/context/state';
import AppState, { SetAppState } from '@/interfaces/AppState';
import { useRouter } from 'next/navigation';

export default function Addons() {
  const router = useRouter();
  const [state] = useAppState() as [AppState, SetAppState];

  const handleSubmit = () => {
    router.replace(`/finishing-up`);
  };

  return (
    <Container>
      <Sidebar.Mobile currentStep={3} />
      <Sidebar.Desktop currentStep={3} />

      <CardWrapper>
        <CardHeader
          heading="Escolha complementos"
          description="Complementos ajudam a melhorar sua experiência de jogo."
        />

        <CardContent.Addons />

        <StepNavigation
          onSubmit={handleSubmit}
          router={router}
          toPath={`/plans?plan=${state.plan}&option=${state.option}`}
          step={3}
        />
      </CardWrapper>
    </Container>
  );
}
