export default function Benefits() {
  const benefits = [
    {
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-500",
      icon: "fas fa-eye",
      title: "Clareza sobre vendas e finanças",
      description: "Veja exatamente onde está ganhando e perdendo dinheiro"
    },
    {
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500",
      icon: "fas fa-clock",
      title: "Menos tempo com planilhas",
      description: "Automatize relatórios e dedique tempo ao que importa"
    },
    {
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500",
      icon: "fas fa-bolt",
      title: "Decisões mais seguras e rápidas",
      description: "Base sólida de dados para escolhas estratégicas"
    },
    {
      gradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-500",
      icon: "fas fa-bullseye",
      title: "Foco no que dá resultado",
      description: "Identifique e potencialize seus melhores resultados"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Benefícios para o seu negócio</h2>
          <p className="text-xl text-gray-600">Os ganhos reais que você terá</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bg-gradient-to-br ${benefit.gradient} rounded-2xl p-6 text-center card-hover fade-in`}>
              <div className={`w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
