import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { PopupMessage } from '@/types';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
  popupMessage: PopupMessage;
  onRegister: () => void;
  isAuthenticated: boolean;
}

export function WelcomePopup({ isOpen, onClose, popupMessage, onRegister, isAuthenticated }: WelcomePopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-yellow-500/50 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-yellow-400">
            {popupMessage.title}
          </DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-gray-300 text-center leading-relaxed">
            {popupMessage.message}
          </p>
        </div>
        <div className="flex justify-center gap-3">
          {!isAuthenticated && (
            <Button
              onClick={onRegister}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-8 py-3 rounded-full"
            >
              {popupMessage.buttonText}
            </Button>
          )}
          <Button
            onClick={onClose}
            variant="outline"
            className="border-gray-500 text-gray-300 hover:bg-gray-800"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
