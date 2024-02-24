import { useEffect, useState } from 'react';
import { LabeledCheckbox } from '@/components/LabeledCheckbox';
import { useAppState } from '@/context/state';
import { CheckedState } from '@radix-ui/react-checkbox';
import AppState, { SetAppState } from '@/interfaces/AppState';

export function AddonsCardContent() {
  const [{ option }, setState] = useAppState() as [AppState, SetAppState];
  const [checkedServices, setCheckedServices] = useState<string[]>([]);

  useEffect(() => {
    setState((prevState: any) => ({ ...prevState, services: checkedServices }));
  }, [checkedServices]);

  function handleCheck(isChecked: CheckedState, id: string) {
    setCheckedServices((prevServices) =>
      isChecked
        ? [...prevServices, id]
        : prevServices.filter((service) => service !== id)
    );
  }

  return (
    <form className="space-y-4 mt-6 select-none lg:mt-8">
      <LabeledCheckbox
        title="Serviço online"
        description="Acesso a jogos multiplayer"
        option={option}
        handleCheck={handleCheck}
        id="online-service"
        price={1}
      />
      <LabeledCheckbox
        title="Maior armazenamento"
        description="1TB extra na núvem"
        option={option}
        handleCheck={handleCheck}
        id="larger-storage"
        price={2}
      />
      <LabeledCheckbox
        title="Perfil customizável"
        description="Tema customizado no perfil"
        option={option}
        handleCheck={handleCheck}
        id="customizable-profile"
        price={2}
      />
    </form>
  );
}
