
import { useRef } from "react";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero scrollToForm={scrollToForm} />
      <PainPoints />
      <Solution />
      <Benefits />
      <Process />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <CTA scrollToForm={scrollToForm} />
      <Footer />
    </div>
  );
}
