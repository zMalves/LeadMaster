export default function PainPoints() {
  const painPoints = [
    {
      icon: "fas fa-question-circle",
      color: "red",
      title: "Decide com base em achismo?",
      description: "Sem dados claros, as decisões ficam no \"feeling\""
    },
    {
      icon: "fas fa-search",
      color: "orange", 
      title: "Não sabe o que mais vende?",
      description: "Produtos e serviços mais lucrativos ficam ocultos"
    },
    {
      icon: "fas fa-chart-line",
      color: "yellow",
      title: "Não acompanha os números?",
      description: "Performance do negócio fica sem monitoramento"
    },
    {
      icon: "fas fa-eye-slash",
      color: "gray",
      title: "Sente que está no escuro?",
      description: "Falta visibilidade clara sobre o que acontece"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: 'hsl(var(--support))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Você vive isso?</h2>
          <p className="text-xl text-gray-600">Reconhece alguns destes desafios no seu dia a dia?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm card-hover fade-in">
              <div className={`w-16 h-16 bg-${point.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${point.icon} text-${point.color}-500 text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
