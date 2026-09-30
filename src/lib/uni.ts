import { getCollection, type CollectionEntry } from 'astro:content';

export type Nota = CollectionEntry<'uni'>;

export const TIPI: Record<string, string> = {
  teoria: 'teoria',
  cheatsheet: 'formulario',
  riferimento: 'materiale',
  esercizi: 'esercizi',
};

export async function materie() {
  const all = await getCollection('uni');
  const hubs = all.filter((e) => e.data.hub);
  return hubs.map((hub) => {
    const note = all
      .filter((e) => !e.data.hub && e.data.materia === hub.data.materia)
      .sort((a, b) => a.data.ordine - b.data.ordine || a.data.title.localeCompare(b.data.title, 'it'));
    return { hub, note, lezioni: note.filter((n) => n.data.ordine < 999), materiale: note.filter((n) => n.data.ordine >= 999) };
  });
}

export function slugOf(e: Nota) {
  return e.id.split('/').pop() as string;
}

export function urlOf(e: Nota) {
  return e.data.hub ? `/uni/${e.data.materia}/` : `/uni/${e.data.materia}/${slugOf(e)}/`;
}

export function giorni(lezioni: string[]) {
  return lezioni.join(', ');
}
