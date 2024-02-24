'use client';

import { Switch } from '@/components/ui/switch';
import { useToggleSwitch } from './hooks/useToggleSwitch';
import { useSearchParams } from 'next/navigation';

export function SwitchSection() {
  const { handleToggleSwitch } = useToggleSwitch();
  const searchParams = useSearchParams();
  const option = searchParams.get('option') ?? 'monthly';

  return (
    <div className="flex items-center justify-center gap-8 w-full bg-light-blue/20 rounded p-4 mt-8">
      <span
        className={`${
          option === 'monthly' && ' text-marine-blue'
        } font-medium text-cool-gray transition-all`}
      >
        Mensal
      </span>
      <Switch
        className="!bg-marine-blue"
        onCheckedChange={handleToggleSwitch}
        checked={option === 'yearly'}
      />
      <span
        className={`${
          option === 'yearly' && 'text-marine-blue'
        } font-medium text-cool-gray transition-all`}
      >
        Anual
      </span>
    </div>
  );
}
