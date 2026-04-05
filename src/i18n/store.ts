import { atom } from 'nanostores';

export type Lang = 'es' | 'en';

export const langStore = atom<Lang>('es');
