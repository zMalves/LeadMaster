interface CTAProps {
  scrollToForm: () => void;
}

export default function CTA({ scrollToForm }: CTAProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-slate-700 text-white">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="mb-8">
          <i className="fas fa-chart-line text-accent text-5xl mb-6"></i>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📈 Quer enxergar melhor os números do seu negócio?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            📩 Fale com um consultor e descubra o que seus dados têm a dizer.
          </p>
        </div>
        <button 
          onClick={scrollToForm} 
          className="btn-cta text-primary font-semibold py-4 px-8 rounded-full text-lg shadow-lg inline-flex items-center gap-3"
        >
          <i className="fas fa-comments text-xl"></i>
          Quero conversar agora
        </button>
      </div>
    </section>
  );
}
