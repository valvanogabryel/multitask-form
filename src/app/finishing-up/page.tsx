'use client';

import { Container } from '@/components/Container';
import { Sidebar } from '@/components/Sidebar';
import { CardWrapper } from '@/components/Card/ui/card-wrapper';
import { CardHeader } from '@/components/Card/CardHeader';
import { CardContent } from '@/components/Card/CardContent';
import { StepNavigation } from '@/components/StepNavigation';
import { useRouter } from 'next/navigation';

export default function Finishing() {
  const router = useRouter();

  return (
    <Container>
      <Sidebar.Mobile currentStep={4} />
      <Sidebar.Desktop currentStep={4} />

      <CardWrapper>
        <CardHeader
          heading="Quase lá"
          description="Verifique se as informações estão corretas antes de confirmar."
        />

        <CardContent.FinishingUp />
        <StepNavigation toPath="/addons" step={4} confirm router={router} />
      </CardWrapper>
    </Container>
  );
}
