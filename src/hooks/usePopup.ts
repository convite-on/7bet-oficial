import { useState, useEffect, useCallback } from 'react';
import type { PopupMessage } from '@/types';

const POPUP_KEY = '776bet_popup_message';

const defaultPopup: PopupMessage = {
  title: '🎉 Bem-vindo à 776BET!',
  message: 'Cadastre-se agora e receba um bônus especial de boas-vindas! Faça seu primeiro depósito e ganhe até R$ 5.555 em bônus. Não perca essa oportunidade única!',
  buttonText: 'Cadastrar Agora',
};

export function usePopup() {
  const [popupMessage, setPopupMessage] = useState<PopupMessage>(defaultPopup);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(POPUP_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPopupMessage(parsed);
      } catch {
        localStorage.setItem(POPUP_KEY, JSON.stringify(defaultPopup));
      }
    } else {
      localStorage.setItem(POPUP_KEY, JSON.stringify(defaultPopup));
    }
    
    // Abrir popup automaticamente após 1 segundo
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const updatePopupMessage = useCallback((newMessage: PopupMessage) => {
    setPopupMessage(newMessage);
    localStorage.setItem(POPUP_KEY, JSON.stringify(newMessage));
  }, []);

  const openPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    popupMessage,
    isOpen,
    updatePopupMessage,
    openPopup,
    closePopup,
  };
}
