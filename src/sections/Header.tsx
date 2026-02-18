import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  User, 
  LogIn, 
  UserPlus, 
  Headphones, 
  Share2, 
  Percent, 
  Crown, 
  Gift, 
  Ticket,
  Menu,
  X,
  Wallet,
  LogOut,
  Edit
} from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  username: string;
  balance: number;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
  onEditPopup: () => void;
}

const navItems = [
  { icon: Headphones, label: 'Atendimento' },
  { icon: Share2, label: 'Compartilhar' },
  { icon: Percent, label: 'Desconto' },
  { icon: Crown, label: 'VIP' },
  { icon: Gift, label: 'Atividade' },
  { icon: Ticket, label: 'Código' },
];

export function Header({ 
  isAuthenticated, 
  username, 
  balance, 
  onLogin, 
  onRegister, 
  onLogout,
  onEditPopup 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0f0f1a] border-b border-gray-800 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-orange-500/20 py-1">
        <div className="container mx-auto px-4 text-center">
          <p className="text-yellow-400 text-xs sm:text-sm font-medium">
            🎁 Bônus de primeiro depósito de até R$ 5.555 | Pagamentos via PIX instantâneos
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl sm:text-3xl font-black">
              <span className="text-yellow-400">776</span>
              <span className="text-white">BET</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-1 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Auth Buttons / User Info */}
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {/* Balance */}
                <div className="hidden sm:flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                  <Wallet size={18} className="text-green-400" />
                  <span className="text-green-400 font-bold">
                    R$ {balance.toFixed(2)}
                  </span>
                </div>
                
                {/* User */}
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                  <User size={18} className="text-yellow-400" />
                  <span className="text-white font-medium hidden sm:inline">{username}</span>
                </div>

                {/* Edit Popup Button */}
                <button
                  onClick={onEditPopup}
                  className="hidden md:flex p-2 text-gray-400 hover:text-purple-400 transition-colors"
                  title="Editar Popup"
                >
                  <Edit size={18} />
                </button>

                {/* Logout */}
                <button
                  onClick={onLogout}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  title="Sair"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  onClick={onLogin}
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  <LogIn size={18} className="sm:mr-2" />
                  <span className="hidden sm:inline">Conectar</span>
                </Button>
                <Button
                  onClick={onRegister}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold"
                >
                  <UserPlus size={18} className="sm:mr-2" />
                  <span className="hidden sm:inline">Registro</span>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a1a2e] border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
              {isAuthenticated && (
                <button
                  onClick={onEditPopup}
                  className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-purple-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Edit size={20} />
                  <span>Editar Popup</span>
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
