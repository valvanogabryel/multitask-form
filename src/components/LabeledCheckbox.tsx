import { Checkbox } from '@/components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';
import { useState } from 'react';

interface LabeledCheckboxProps {
  id: string;
  title: string;
  description: string;
  option: string | string[];
  price: number;
  handleCheck: (isChecked: CheckedState, id: string) => void;
}
export function LabeledCheckbox({
  id,
  title,
  description,
  option,
  price,
  handleCheck,
}: Readonly<LabeledCheckboxProps>) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label
      htmlFor={id}
      className={`flex items-center w-full border px-4 py-2 rounded-lg border-light-gray transition-all hover:border-purplish-blue relative lg:px-6 lg:py-4
      ${isChecked && 'border-purplish-blue bg-slate-100/80'}
      `}
    >
      <Checkbox
        className="mr-4 lg:mr-6"
        id={id}
        onCheckedChange={(event: CheckedState) => {
          handleCheck(event, title);
          setIsChecked(true);

          if (!event) setIsChecked(false);
        }}
      />

      <div className="flex flex-col w-full">
        <h3 className="font-semibold text-marine-blue text-left lg:text-lg">
          {title}
        </h3>
        <span className="text-cool-gray text-sm lg:text-base">
          {description}
        </span>
      </div>

      <span className="text-purple-700 text-xs absolute right-4 lg:right-6 lg:text-sm">
        {option === 'monthly' ? `+$${price}/mês` : `+$${price * 10}/an`}
      </span>
    </label>
  );
}
