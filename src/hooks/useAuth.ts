import { useState, useEffect, useCallback } from 'react';
import type { User } from '@/types';

const STORAGE_KEY = '776bet_user';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored);
        setUser(parsedUser);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const register = useCallback((username: string, email: string, _password: string): boolean => {
    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      balance: 0,
      isLoggedIn: true,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
    return true;
  }, []);

  const login = useCallback((email: string, _password: string): boolean => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored);
        if (parsedUser.email === email) {
          parsedUser.isLoggedIn = true;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedUser));
          setUser(parsedUser);
          return true;
        }
      } catch {
        return false;
      }
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const updateBalance = useCallback((amount: number) => {
    if (user) {
      const updatedUser = { ...user, balance: user.balance + amount };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  }, [user]);

  const addDeposit = useCallback((amount: number) => {
    if (user) {
      const updatedUser = { ...user, balance: user.balance + amount };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  }, [user]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user?.isLoggedIn,
    register,
    login,
    logout,
    updateBalance,
    addDeposit,
  };
}
