export default function Solution() {
  const solutions = [
    {
      icon: "fas fa-database",
      title: "Dashboards criados a partir dos seus dados reais",
      description: "Utilizamos as informações que você já possui para criar visualizações poderosas"
    },
    {
      icon: "fas fa-eye",
      title: "Visual simples, com foco em vendas, lucros e decisões",
      description: "Interface intuitiva que destaca o que realmente importa para o seu negócio"
    },
    {
      icon: "fas fa-magic",
      title: "Sem precisar dominar planilhas ou BI",
      description: "Você foca no seu negócio, nós cuidamos da tecnologia"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como o serviço resolve isso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transformamos seus dados em dashboards claros e acionáveis</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1 space-y-6 fade-in">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${solution.icon} text-primary text-lg`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 fade-in">
            {/* Mock dashboard preview */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <i className="fas fa-chart-line text-accent"></i>
                  Dashboard de Vendas - Exemplo
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600">R$ 45.8K</div>
                    <div className="text-sm text-gray-600">Vendas do Mês</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">127</div>
                    <div className="text-sm text-gray-600">Novos Clientes</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600">23%</div>
                    <div className="text-sm text-gray-600">Crescimento</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-600">R$ 12.3K</div>
                    <div className="text-sm text-gray-600">Lucro Líquido</div>
                  </div>
                </div>
                <div className="text-center text-gray-500 text-sm">
                  <i className="fas fa-chart-area text-2xl mb-2"></i>
                  <br />Gráficos interativos e insights em tempo real
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
