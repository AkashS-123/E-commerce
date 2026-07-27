import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

interface StoredAccount extends AuthUser {
  password: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => { ok: true } | { ok: false; message: string };
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => { ok: true } | { ok: false; message: string };
  logout: () => void;
  updateProfile: (updates: Partial<AuthUser>) => void;
  changePassword: (
    currentPassword: string,
    newPassword: string,
  ) => { ok: true } | { ok: false; message: string };
}

const ACCOUNTS_KEY = "swoo-accounts";
const SESSION_KEY = "swoo-session";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function loadAccounts(): StoredAccount[] {
  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY);
    return raw ? (JSON.parse(raw) as StoredAccount[]) : [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts: StoredAccount[]) {
  window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function loadSession(): AuthUser | null {
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => loadSession());

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  function login(email: string, password: string) {
  const accounts = loadAccounts();

  console.log("Accounts:", accounts);
  console.log("Login Email:", email);
  console.log("Login Password:", password);

  const match = accounts.find(
    (a) => a.email.trim().toLowerCase() === email.trim().toLowerCase()
  );

  if (!match) {
    return {
      ok: false as const,
      message: "Account not found. Please register first.",
    };
  }

  if (match.password.trim() !== password.trim()) {
    return {
      ok: false as const,
      message: "Incorrect password.",
    };
  }

  const { password: _pw, ...publicUser } = match;
  setUser(publicUser);

  return { ok: true as const };
}

  function register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    const accounts = loadAccounts();
    const existing = accounts.some(
      (a) => a.email.trim().toLowerCase() === email.trim().toLowerCase(),
    );

    if (existing) {
      return {
        ok: false as const,
        message: "An account with that email already exists.",
      };
    }

    const newAccount: StoredAccount = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      password,
    };
    accounts.push(newAccount);
    saveAccounts(accounts);

    const { password: _pw, ...publicUser } = newAccount;
    setUser(publicUser);

    return { ok: true as const };
  }

  function logout() {
    setUser(null);
  }

  function updateProfile(updates: Partial<AuthUser>) {
    setUser((prev) => {
      if (!prev) return prev;
      const next = { ...prev, ...updates };
      const accounts = loadAccounts();
      const idx = accounts.findIndex((a) => a.email.toLowerCase() === prev.email.toLowerCase());
      if (idx !== -1) {
        accounts[idx] = { ...accounts[idx], ...updates };
        saveAccounts(accounts);
      }
      return next;
    });
  }

  function changePassword(currentPassword: string, newPassword: string) {
    if (!user) {
      return { ok: false as const, message: "You must be logged in to change your password." };
    }
    const accounts = loadAccounts();
    const idx = accounts.findIndex((a) => a.email.toLowerCase() === user.email.toLowerCase());
    if (idx === -1 || accounts[idx].password !== currentPassword) {
      return { ok: false as const, message: "Current password is incorrect." };
    }
    accounts[idx] = { ...accounts[idx], password: newPassword };
    saveAccounts(accounts);
    return { ok: true as const };
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
