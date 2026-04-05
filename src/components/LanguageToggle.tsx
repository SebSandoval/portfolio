import { useStore } from '@nanostores/react';
import { langStore, type Lang } from '../i18n/store';

export default function LanguageToggle() {
  const lang = useStore(langStore);

  function toggle() {
    langStore.set(lang === 'es' ? 'en' : 'es');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        letterSpacing: '0.08em',
        fontWeight: 500,
        color: 'var(--color-muted)',
        background: 'none',
        border: '1px solid rgba(107, 100, 96, 0.3)',
        borderRadius: '2px',
        padding: '4px 10px',
        cursor: 'pointer',
        transition: 'color 0.2s, border-color 0.2s',
        textTransform: 'uppercase',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-accent)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-accent)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-muted)';
        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(107, 100, 96, 0.3)';
      }}
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
