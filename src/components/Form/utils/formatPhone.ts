import { UseFormSetValue } from 'react-hook-form';

export function formatPhone(
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<{ name: string; email: string; phone: string }>
) {
  const inputValue = e.target.value;

  // Remove todos os caracteres não numéricos
  const numericValue = inputValue.replace(/\D/g, '');

  // Formata o número de telefone
  let formattedPhone = '';
  if (numericValue.length >= 2) {
    formattedPhone = `(${numericValue.slice(0, 2)})`;
  }
  if (numericValue.length > 2) {
    formattedPhone += ` ${numericValue.slice(2, 7)}`;
  }
  if (numericValue.length > 7) {
    formattedPhone += `-${numericValue.slice(7, 11)}`;
  }

  if (formattedPhone) {
    setValue('phone', formattedPhone);
  }
}
