'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export function useToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const option = isChecked ? 'monthly' : 'yearly';
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleToggleSwitch = useCallback(() => {
    setIsChecked(!isChecked);
    const params = new URLSearchParams(searchParams.toString());
    params.set('option', option);

    router.push(`?${params.toString()}`);
  }, [isChecked, option, searchParams, router]);

  return {
    handleToggleSwitch,
    isChecked,
  };
}
