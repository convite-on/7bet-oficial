import { useState } from 'react';
import { Header, Hero, GameCategories, GamesSection, WinnersSection, InfoSection, Footer } from '@/sections';
import { 
  WelcomePopup, 
  RegisterPopup, 
  DepositPopup, 
  NeedRegisterPopup, 
  NeedDepositPopup,
  EditPopupMessage 
} from '@/components/popups';
import { useAuth } from '@/hooks/useAuth';
import { usePopup } from '@/hooks/usePopup';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// URL da API de PIX - você pode editar esta variável
const PIX_API_URL = 'https://sua-api-pix.com/pagamento';

function App() {
  const { user, isAuthenticated, register, logout } = useAuth();
  const { popupMessage, isOpen: isWelcomeOpen, updatePopupMessage, closePopup: closeWelcome } = usePopup();
  
  // Estados dos popups
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isNeedRegisterOpen, setIsNeedRegisterOpen] = useState(false);
  const [isNeedDepositOpen, setIsNeedDepositOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  
  // Categoria ativa
  const [activeCategory, setActiveCategory] = useState('hot');

  // Handlers
  const handleRegister = (username: string, email: string, password: string) => {
    const success = register(username, email, password);
    if (success) {
      toast.success('Cadastro realizado com sucesso!', {
        description: 'Bem-vindo à 776BET! Faça seu primeiro depósito para começar a jogar.',
      });
      // Abrir popup de depósito após cadastro
      setTimeout(() => {
        setIsNeedDepositOpen(true);
      }, 500);
      return true;
    }
    return false;
  };

  const handleGameClick = (_gameId: string) => {
    if (!isAuthenticated) {
      setIsNeedRegisterOpen(true);
    } else if (user && user.balance <= 0) {
      setIsNeedDepositOpen(true);
    } else {
      // Aqui você pode integrar o jogo real
      toast.info('Abrindo jogo...', {
        description: 'O jogo será carregado em breve.',
      });
    }
  };

  // Função para processar depósito (usada futuramente)
  // const handleDeposit = (amount: number) => {
  //   addDeposit(amount);
  //   toast.success('Redirecionando para pagamento PIX...', {
  //     description: `Valor: R$ ${amount.toFixed(2)}`,
  //   });
  // };

  const handleSavePopupMessage = (newMessage: { title: string; message: string; buttonText: string }) => {
    updatePopupMessage(newMessage);
    toast.success('Mensagem do popup atualizada!', {
      description: 'As alterações foram salvas com sucesso.',
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] flex flex-col">
      {/* Header */}
      <Header
        isAuthenticated={isAuthenticated}
        username={user?.username || ''}
        balance={user?.balance || 0}
        onLogin={() => setIsRegisterOpen(true)}
        onRegister={() => setIsRegisterOpen(true)}
        onLogout={() => {
          logout();
          toast.info('Você saiu da sua conta');
        }}
        onEditPopup={() => setIsEditPopupOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <GameCategories 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        <GamesSection onGameClick={handleGameClick} />
        <WinnersSection />
        <InfoSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popups */}
      <WelcomePopup
        isOpen={isWelcomeOpen}
        onClose={closeWelcome}
        popupMessage={popupMessage}
        onRegister={() => {
          closeWelcome();
          setIsRegisterOpen(true);
        }}
        isAuthenticated={isAuthenticated}
      />

      <RegisterPopup
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onRegister={handleRegister}
      />

      <DepositPopup
        isOpen={isDepositOpen}
        onClose={() => setIsDepositOpen(false)}
        pixApiUrl={PIX_API_URL}
      />

      <NeedRegisterPopup
        isOpen={isNeedRegisterOpen}
        onClose={() => setIsNeedRegisterOpen(false)}
        onRegister={() => {
          setIsNeedRegisterOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <NeedDepositPopup
        isOpen={isNeedDepositOpen}
        onClose={() => setIsNeedDepositOpen(false)}
        onDeposit={() => {
          setIsNeedDepositOpen(false);
          setIsDepositOpen(true);
        }}
      />

      <EditPopupMessage
        isOpen={isEditPopupOpen}
        onClose={() => setIsEditPopupOpen(false)}
        currentMessage={popupMessage}
        onSave={handleSavePopupMessage}
      />

      {/* Toast notifications */}
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid #333',
          },
        }}
      />
    </div>
  );
}

export default App;
