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
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 fade-in">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-6 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${solution.icon} text-primary text-2xl`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-primary mb-3 leading-tight">{solution.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
