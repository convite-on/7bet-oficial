import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { PopupMessage } from '@/types';

interface EditPopupMessageProps {
  isOpen: boolean;
  onClose: () => void;
  currentMessage: PopupMessage;
  onSave: (message: PopupMessage) => void;
}

export function EditPopupMessage({ isOpen, onClose, currentMessage, onSave }: EditPopupMessageProps) {
  const [title, setTitle] = useState(currentMessage.title);
  const [message, setMessage] = useState(currentMessage.message);
  const [buttonText, setButtonText] = useState(currentMessage.buttonText);

  useEffect(() => {
    setTitle(currentMessage.title);
    setMessage(currentMessage.message);
    setButtonText(currentMessage.buttonText);
  }, [currentMessage, isOpen]);

  const handleSave = () => {
    onSave({ title, message, buttonText });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-2 border-purple-500/50 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-purple-400">
            ✏️ Editar Mensagem do Popup
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-300">Título</Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">Mensagem</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-gray-800 border-gray-600 text-white resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="buttonText" className="text-gray-300">Texto do Botão</Label>
            <Input
              id="buttonText"
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white"
            />
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold px-6 py-2 rounded-full"
            >
              Salvar Alterações
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-gray-500 text-gray-300 hover:bg-gray-800"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
