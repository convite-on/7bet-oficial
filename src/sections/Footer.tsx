import { Mail, MessageCircle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f0f1a] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black mb-4">
              <span className="text-yellow-400">776</span>
              <span className="text-white">BET</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A plataforma de cassino online mais confiável do Brasil. Oferecemos uma experiência 
              de jogo segura e divertida com os melhores slots, jogos ao vivo e apostas esportivas.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl">🔞</span>
              <span className="text-gray-500 text-sm">Jogue com responsabilidade</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Jogo Responsável</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Afiliados</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MessageCircle size={16} className="text-green-400" />
                <a href="https://t.me/www776bet" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="text-blue-400" />
                <span>suporte@776bet.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="text-purple-400" />
                <span>24/7 Online</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © 2026 776BET. Todos os direitos reservados. 
              Este site é destinado a maiores de 18 anos.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xs">Pagamentos via:</span>
              <div className="flex items-center gap-2">
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold">PIX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
