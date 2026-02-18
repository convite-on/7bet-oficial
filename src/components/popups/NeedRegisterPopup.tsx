import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

interface NeedRegisterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
}

export function NeedRegisterPopup({ isOpen, onClose, onRegister }: NeedRegisterPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-red-500/50 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-red-400">
            ⚠️ Acesso Restrito
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 text-center">
          <div className="text-6xl mb-4">🔒</div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para acessar este jogo, você precisa criar uma conta primeiro.
          </p>
          <p className="text-yellow-400 text-sm">
            Cadastre-se agora e receba bônus exclusivos!
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Button
            onClick={onRegister}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2"
          >
            <LogIn size={18} />
            Cadastrar Agora
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="border-gray-500 text-gray-300 hover:bg-gray-800"
          >
            Voltar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
