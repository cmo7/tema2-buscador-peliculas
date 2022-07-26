import {apiKey} from './secretos.js';

const urlBase = 'https://api.themoviedb.org/3/';

/**
 *
 * @param {string} url
 * @return {object} Película
 */
async function fetchJSON(url) {
  const tiempoInicial = performance.now();
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  const tiempoFinal = performance.now();
  console.log(`Petición a API completada en: ${tiempoFinal - tiempoInicial}ms`);
  return datos;
}
/**
 * Retorna el objeto que representa a una pelicula con la id proporcionada
 * @param {number} id       Es la ide de la plelicula
 * @param {string} lang     El idioma de la información, es español por defecto
 * @return {object}
 */
export async function obtenerPelicula(id, lang = 'es-ES') {
  const url = `${urlBase}movie/${id}?api_key=${apiKey}&language=${lang}`;
  return await fetchJSON(url);
}
/**
 * Busca películas usando la cadena de búsqueda
 * @param {string} query    Cadena de búsqueda
 * @param {number} page     Página de los resultados, 1 por defecto
 * @param {string} lang     El idioma de la información, es español por defecto
 * @return {object} pelicula
 */
export async function buscarPeliculas(query, page = 1, lang = 'es-ES') {
  const url = `${urlBase}search/movie?api_key=${apiKey}&language=${lang}` +
              `&query=${query}&page=${page}`;
  return await fetchJSON(url);
}

/**
 *
 * @return {object} configuración
 */
export async function obtenerConfiguracion() {
  const url = `${urlBase}configuration?api_key=${apiKey}`;
  return await fetchJSON(url);
}
