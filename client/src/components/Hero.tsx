
interface HeroProps {
  scrollToForm: () => void;
}

export default function Hero({ scrollToForm }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-slate-700 text-white py-20 px-4 min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <i className="fas fa-chart-line text-accent"></i>
            <span className="text-sm font-medium">Dashboards Profissionais em Power BI</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme dados em<br />
            <span className="text-accent bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              decisões inteligentes
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Dashboards personalizados em Power BI para seu negócio ter mais 
            <span className="text-accent font-semibold"> clareza e resultado</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={scrollToForm} 
              className="btn-cta text-primary font-semibold py-4 px-8 rounded-full text-lg shadow-lg inline-flex items-center gap-3 group"
            >
              <i className="fas fa-comments text-xl group-hover:scale-110 transition-transform"></i>
              Fale com um consultor
            </button>
            
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <i className="fas fa-clock text-accent"></i>
              <span>Resposta em até 2 horas</span>
            </div>
          </div>
          
          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <i className="fas fa-star text-accent"></i>
              <span>+50 empresas atendidas</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-accent"></i>
              <span>100% personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-rocket text-accent"></i>
              <span>Resultados em 15 dias</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Hero Visual */}
        <div className="mt-16 fade-in relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-5xl mx-auto border border-white/20 shadow-2xl">
            {/* Dashboard preview */}
            <div className="bg-white/5 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-300">Dashboard Executivo</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6 text-center border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-line text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Vendas em Tempo Real</h3>
                  <div className="text-2xl font-bold text-accent mb-1">R$ 125.400</div>
                  <div className="text-xs text-green-300">↗ +12% vs. mês anterior</div>
                </div>
                
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6 text-center border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-pie text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Margem de Lucro</h3>
                  <div className="text-2xl font-bold text-accent mb-1">34.2%</div>
                  <div className="text-xs text-blue-300">↗ +5.4% vs. trimestre</div>
                </div>
                
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6 text-center border border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-bar text-white text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Insights Acionáveis</h3>
                  <div className="text-2xl font-bold text-accent mb-1">8</div>
                  <div className="text-xs text-purple-300">Oportunidades identificadas</div>
                </div>
              </div>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <i className="fas fa-mobile-alt text-accent text-lg"></i>
                <span className="text-xs text-gray-300">Mobile-First</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <i className="fas fa-sync-alt text-accent text-lg"></i>
                <span className="text-xs text-gray-300">Tempo Real</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <i className="fas fa-palette text-accent text-lg"></i>
                <span className="text-xs text-gray-300">Personalizado</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <i className="fas fa-cloud text-accent text-lg"></i>
                <span className="text-xs text-gray-300">Na Nuvem</span>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
