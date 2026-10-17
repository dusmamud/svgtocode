import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MonitorIcon } from '@phosphor-icons/react';

type Theme = 'light' | 'dark' | 'system';
const KEY = 'vf-theme';

const ORDER: Theme[] = ['light', 'dark', 'system'];

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

const ICONS: Record<Theme, React.ReactNode> = {
  light: <SunIcon size={20} weight="bold" />,
  dark: <MoonIcon size={20} weight="bold" />,
  system: <MonitorIcon size={20} weight="bold" />,
};

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

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode */
    }
    applyTheme(next);
  };

  const currentLabel = labels[theme];
  const hint = `${labels.label}: ${currentLabel}`;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={hint}
      title={hint}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-surface text-text transition-colors hover:bg-surface-2 active:scale-90 lg:h-10 lg:w-10"
    >
      <span
        key={theme}
        className="grid place-items-center transition-all duration-150 starting:scale-90 starting:opacity-0"
        aria-hidden="true"
      >
        {ICONS[theme]}
      </span>
    </button>
  );
}
