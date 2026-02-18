import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DepositPopupProps {
  isOpen: boolean;
  onClose: () => void;
  pixApiUrl: string;
}

const depositValues = [
  { value: 20, label: 'R$ 20,00' },
  { value: 50, label: 'R$ 50,00' },
  { value: 75, label: 'R$ 75,00' },
  { value: 100, label: 'R$ 100,00' },
  { value: 200, label: 'R$ 200,00' },
  { value: 500, label: 'R$ 500,00' },
];

export function DepositPopup({ isOpen, onClose, pixApiUrl }: DepositPopupProps) {
  const handleDeposit = (value: number) => {
    // Redirecionar para API de PIX com o valor
    const url = `${pixApiUrl}?amount=${value}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-green-500/50 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-green-400">
            💰 Faça seu Depósito
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-300 text-center mb-6">
            Escolha o valor que deseja depositar via PIX:
          </p>
          <div className="grid grid-cols-3 gap-3">
            {depositValues.map((item) => (
              <Button
                key={item.value}
                onClick={() => handleDeposit(item.value)}
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 rounded-xl text-lg transition-all transform hover:scale-105"
              >
                {item.label}
              </Button>
            ))}
          </div>
          <p className="text-gray-400 text-xs text-center mt-4">
            Clique no valor desejado para ser redirecionado ao pagamento PIX
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
