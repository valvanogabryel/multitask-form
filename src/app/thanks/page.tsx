'use client';

import { Container } from '@/components/Container';
import { Sidebar } from '@/components/Sidebar';
import { CardWrapper } from '@/components/Card/ui/card-wrapper';
import AppState, { SetAppState } from '@/interfaces/AppState';
import Image from 'next/image';
import { useAppState } from '@/context/state';
import { useEffect } from 'react';
import { toast } from 'sonner';
import thanksBadge from '/public/assets/images/icon-thank-you.svg';

export default function Thanks() {
  const [state] = useAppState() as [AppState, SetAppState];

  useEffect(() => {
    toast('Informações do usuário:', {
      description: (
        <pre className="mt-2 w-auto rounded-md bg-slate-950">
          <code className="text-white">{JSON.stringify(state, null, 2)}</code>
        </pre>
      ),
    });
  }, []);

  return (
    <Container>
      <Sidebar.Mobile currentStep={4} />
      <Sidebar.Desktop currentStep={4} />

      <CardWrapper>
        <div className="flex flex-col gap-2 justify-center items-center h-96">
          <header className="flex flex-col gap-4 items-center">
            <Image
              src={thanksBadge}
              alt="Símbolo de coração como agradecimento"
              className="size-14 select-none pointer-events-none"
            />
            <h1 className="text-2xl font-bold text-marine-blue">Obrigado!</h1>
          </header>
          <p className="text-center text-cool-gray">
            Obrigado por confirmar sua inscrição! Esperamos que você goste de
            usar nossa plataforma. Se alguma vez precisar de suporte, por favor
            sinta-se livre para nos enviar um email em support@loremgaming.com
          </p>
        </div>
      </CardWrapper>
    </Container>

    // {/*
    // TODO: botão de dashboard que envia para uma página simples que mostre os usuários cadastrados. Talvez usar json-server para mockar a API (não fazer back-end)
    // <Button className="flex gap-2">
    //   <LayoutDashboard className="size-4" /> Dashboard
    // </Button> */}
  );
}
