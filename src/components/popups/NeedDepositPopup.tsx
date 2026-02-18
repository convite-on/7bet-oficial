import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

interface NeedDepositPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDeposit: () => void;
}

export function NeedDepositPopup({ isOpen, onClose, onDeposit }: NeedDepositPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-orange-500/50 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-orange-400">
            💳 Saldo Insuficiente
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 text-center">
          <div className="text-6xl mb-4">💰</div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Para jogar e ter a chance de ganhar prêmios incríveis, você precisa fazer um depósito na plataforma.
          </p>
          <p className="text-green-400 text-sm font-semibold">
            Depósitos via PIX são processados instantaneamente!
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Button
            onClick={onDeposit}
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2"
          >
            <Wallet size={18} />
            Fazer Depósito
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
