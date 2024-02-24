interface CardHeaderProps {
  heading: string;
  description: string;
}

export function CardHeader({
  heading,
  description,
}: Readonly<CardHeaderProps>) {
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-marine-blue font-bold text-2xl lg:text-3xl">
        {heading}
      </h1>
      <p className="text-cool-gray leading-relaxed lg:text-lg">{description}</p>
    </header>
  );
}
