export default function Process() {
  const steps = [
    {
      number: 1,
      icon: "fas fa-handshake",
      title: "Entendimento do seu negócio",
      description: "Conversamos para entender suas necessidades, desafios e objetivos específicos"
    },
    {
      number: 2,
      icon: "fas fa-plug",
      title: "Conexão com os dados que você já usa",
      description: "Integramos com suas planilhas, sistemas e fontes de dados existentes"
    },
    {
      number: 3,
      icon: "fas fa-chart-line",
      title: "Dashboard entregue com insights claros",
      description: "Recebe seu dashboard funcional com treinamento para usar no dia a dia"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: 'hsl(var(--support))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Como funciona</h2>
          <p className="text-xl text-gray-600">Processo simples em 3 etapas</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center fade-in">
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover relative">
                <div className="absolute top-4 left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{step.number}</span>
                </div>
                <div className="pt-4">
                  <i className={`${step.icon} text-primary text-4xl mb-6`}></i>
                  <h3 className="font-bold text-xl text-primary mb-4 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
