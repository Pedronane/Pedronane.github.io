import { getCollection, type CollectionEntry } from 'astro:content';

export type Nota = CollectionEntry<'uni'>;

export const TIPI: Record<string, string> = {
  teoria: 'teoria',
  cheatsheet: 'formulario',
  riferimento: 'materiale',
  esercizi: 'esercizi',
  simulazione: 'simulazione',
};

export async function materie() {
  const all = await getCollection('uni');
  const hubs = all.filter((e) => e.data.hub);
  return hubs.map((hub) => {
    const note = all
      .filter((e) => !e.data.hub && e.data.tipo !== 'simulazione' && e.data.materia === hub.data.materia)
      .sort((a, b) => a.data.ordine - b.data.ordine || a.data.title.localeCompare(b.data.title, 'it'));
    const esercizi = note.filter((n) => n.data.tipo === 'esercizi');
    const resto = note.filter((n) => n.data.tipo !== 'esercizi');
    return {
      hub,
      note,
      lezioni: resto.filter((n) => n.data.ordine < 999),
      esercizi,
      materiale: resto.filter((n) => n.data.ordine >= 999),
    };
  });
}

export async function simulazioni() {
  const all = await getCollection('uni');
  return all
    .filter((e) => e.data.hub)
    .map((hub) => ({
      hub,
      prove: all
        .filter((e) => e.data.tipo === 'simulazione' && e.data.materia === hub.data.materia)
        .sort((a, b) => a.data.title.localeCompare(b.data.title, 'it', { numeric: true })),
    }))
    .filter((m) => m.prove.length > 0);
}

export function slugOf(e: Nota) {
  return e.id.split('/').pop() as string;
}

export function urlOf(e: Nota) {
  if (e.data.hub) return `/uni/${e.data.materia}/`;
  if (e.data.tipo === 'simulazione') return `/uni/simulazioni/${e.data.materia}/${slugOf(e)}/`;
  return `/uni/${e.data.materia}/${slugOf(e)}/`;
}

export function compagna(nota: Nota, note: Nota[]) {
  const slug = slugOf(nota);
  const altra = slug.endsWith('-esercizi') ? slug.slice(0, -'-esercizi'.length) : `${slug}-esercizi`;
  return note.find((n) => slugOf(n) === altra);
}

export function senzaSuffisso(title: string) {
  return title.replace(/ \(esercizi\)$/, '');
}

export function giorni(lezioni: string[]) {
  return lezioni.join(', ');
}
