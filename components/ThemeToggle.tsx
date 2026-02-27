import { useEffect, useState } from 'react';

const THEME_KEY = 'vista-theme';

const darkVars: Record<string, string> = {
    '--bg-primary': '#0f0d1a',
    '--bg-secondary': '#1a1625',
    '--bg-card': '#1e1830',
    '--text-primary': '#f1eeff',
    '--text-secondary': '#c4b5fd',
    '--text-muted': '#6b5fa0',
    '--border': 'rgba(167, 139, 250, 0.12)',
    '--surface': 'rgba(167, 139, 250, 0.05)',
};

const lightVars: Record<string, string> = {
    '--bg-primary': '#f8f7f4',
    '--bg-secondary': '#f0eef9',
    '--bg-card': '#ffffff',
    '--text-primary': '#1a1625',
    '--text-secondary': '#4a4360',
    '--text-muted': '#7c6f9a',
    '--border': 'rgba(100, 80, 160, 0.15)',
    '--surface': 'rgba(100, 80, 160, 0.05)',
};

const applyTheme = (isDark: boolean) => {
    const vars = isDark ? darkVars : lightVars;
    Object.entries(vars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });
};

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === 'undefined') return true;
        const saved = localStorage.getItem(THEME_KEY);
        return saved !== 'light';
    });

    useEffect(() => {
        applyTheme(isDark);
        localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark((prev) => !prev)}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
                background: 'rgba(167, 139, 250, 0.1)',
                border: '1px solid rgba(167, 139, 250, 0.25)',
                borderRadius: '20px',
                padding: '3px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                width: '52px',
                height: '28px',
                position: 'relative',
                flexShrink: 0,
            }}
        >
            <span
                style={{
                    position: 'absolute',
                    left: isDark ? '3px' : '25px',
                    transition: 'left 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: isDark ? '#1e1830' : '#ffffff',
                    boxShadow: isDark
                        ? '0 0 8px rgba(167, 139, 250, 0.5)'
                        : '0 1px 3px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    lineHeight: 1,
                }}
            >
                {isDark ? '🌙' : '☀️'}
            </span>
        </button>
    );
};

export default ThemeToggle;
