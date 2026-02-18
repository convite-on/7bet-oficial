import { MessageCircle, Gift, Shield, Zap } from 'lucide-react';

export function InfoSection() {
  return (
    <section className="bg-[#0a0a12] py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Telegram Banner */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✈️</span>
            <div>
              <p className="text-white">
                Clique no <a href="https://t.me/www776bet" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-bold">TELEGRAM</a> para entrar no canal oficial e receber códigos de resgate gratuitos todos os dias
              </p>
            </div>
          </div>
        </div>

        {/* Promoções */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              <div>
                <p className="text-white font-bold">Indique e Ganhe</p>
                <p className="text-gray-400 text-sm">R$ 15 para cada amigo com depósito {'>'} R$ 30</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎁</span>
              <div>
                <p className="text-white font-bold">Bônus de Primeiro Depósito</p>
                <p className="text-gray-400 text-sm">Até R$ 5.555 em bônus</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏅</span>
              <div>
                <p className="text-white font-bold">Programa VIP</p>
                <p className="text-gray-400 text-sm">Bônus semanal R$ 20.000, mensal R$ 100.000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 text-gray-400">
            <Shield className="text-green-400" size={24} />
            <span className="text-sm">100% Seguro</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Zap className="text-yellow-400" size={24} />
            <span className="text-sm">PIX Instantâneo</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Gift className="text-pink-400" size={24} />
            <span className="text-sm">Bônus Diários</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <MessageCircle className="text-blue-400" size={24} />
            <span className="text-sm">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
