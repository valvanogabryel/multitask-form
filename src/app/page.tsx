import { CardHeader } from '@/components/Card/CardHeader';
import { Container } from '@/components/Container';
import { Sidebar } from '@/components/Sidebar';
import { Form } from '@/components/Form';

export default function PersonalInfo() {
  return (
    <Container className="lg:gap-40">
      <Sidebar.Mobile currentStep={1} />
      <Sidebar.Desktop currentStep={1} />

      <section className="md:py-8 md:w-full md:relative lg:col-span-2 xl:w-[90%]">
        <CardHeader
          heading="Informação pessoal"
          description="Por favor, forneça seu nome, email e número de telefone."
        />

        <Form />
      </section>
    </Container>
  );
}
