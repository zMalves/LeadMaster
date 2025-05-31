export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">DataInsights Pro</h3>
          <p className="text-accent font-semibold text-lg">Inteligência de Dados e Negócios</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="#" 
            className="bg-white bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a 
            href="#" 
            className="bg-white bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp text-xl"></i>
          </a>
          <a 
            href="#" 
            className="bg-white bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
            aria-label="E-mail"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
        
        <div className="text-center text-gray-300 text-sm">
          <p>© 2025 DataInsights Pro – Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
