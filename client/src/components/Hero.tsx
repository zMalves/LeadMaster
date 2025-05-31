interface HeroProps {
  scrollToForm: () => void;
}

export default function Hero({ scrollToForm }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-slate-700 text-white py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme dados em<br />
            <span className="text-accent">decisões inteligentes</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dashboards personalizados em Power BI para seu negócio ter mais clareza e resultado.
          </p>
          <button 
            onClick={scrollToForm} 
            className="btn-cta text-primary font-semibold py-4 px-8 rounded-full text-lg shadow-lg inline-flex items-center gap-3"
          >
            <i className="fas fa-comments text-xl"></i>
            Fale com um consultor
          </button>
        </div>
        
        {/* Hero Visual */}
        <div className="mt-16 fade-in">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <i className="fas fa-chart-line text-accent text-3xl mb-3"></i>
                <h3 className="font-semibold text-lg">Vendas em Tempo Real</h3>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <i className="fas fa-chart-pie text-accent text-3xl mb-3"></i>
                <h3 className="font-semibold text-lg">Análise de Lucros</h3>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <i className="fas fa-chart-bar text-accent text-3xl mb-3"></i>
                <h3 className="font-semibold text-lg">Insights Estratégicos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
