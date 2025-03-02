import { readFile } from 'node:fs/promises';

export const csr = false;
export const prerender = true;

export async function load() {
    return {
        navigation: JSON.parse(await readFile('./docs/navigation.json', { encoding: 'utf8' })),
    };
}
