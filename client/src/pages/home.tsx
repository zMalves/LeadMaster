import { useEffect } from "react";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero scrollToForm={scrollToForm} />
      <PainPoints />
      <Solution />
      <Process />
      <Benefits />
      <CTA scrollToForm={scrollToForm} />
      <ContactForm />
      <Footer />
    </div>
  );
}
