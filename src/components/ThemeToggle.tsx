import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from '@phosphor-icons/react';

type Theme = 'light' | 'dark' | 'system';
const KEY = 'vf-theme';

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const dark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  root.classList.toggle('dark', dark);
}

function readStored(): Theme {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
  } catch {
    return 'system';
  }
}

export default function ThemeToggle({ labels }: { labels: { light: string; dark: string; system: string; label: string } }) {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const stored = readStored();
    setTheme(stored);
    applyTheme(stored);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (readStored() === 'system') applyTheme('system');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const pick = (next: Theme) => {
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode */
    }
    applyTheme(next);
  };

  const options: { value: Theme; icon: React.ReactNode; text: string }[] = [
    { value: 'light', icon: <Sun size={18} weight="bold" />, text: labels.light },
    { value: 'system', icon: <Monitor size={18} weight="bold" />, text: labels.system },
    { value: 'dark', icon: <Moon size={18} weight="bold" />, text: labels.dark },
  ];

  return (
    <div
      role="radiogroup"
      aria-label={labels.label}
      className="flex items-center gap-1 rounded-full border border-border bg-surface p-1"
    >
      {options.map((o) => (
        <button
          key={o.value}
          role="radio"
          aria-checked={theme === o.value}
          title={o.text}
          onClick={() => pick(o.value)}
          className={`flex min-h-[40px] min-w-[40px] items-center justify-center gap-1.5 rounded-full px-2 text-sm font-medium transition-colors ${
            theme === o.value
              ? 'bg-accent text-accent-ink shadow'
              : 'text-muted hover:bg-surface-2 hover:text-text'
          }`}
        >
          {o.icon}
          <span className="hidden sm:inline">{o.text}</span>
        </button>
      ))}
    </div>
  );
}
