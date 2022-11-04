import { openDB } from 'idb';
import CONFIG from '../global/config';

const dbPromise = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteMovieIdb = {
  async getMovie(id) {
    return (await dbPromise).get(CONFIG.OBJECT_STORE_NAME, id);
  },
  async getAllMovies() {
    return (await dbPromise).getAll(CONFIG.OBJECT_STORE_NAME);
  },
  async putMovie(movie) {
    return (await dbPromise).put(CONFIG.OBJECT_STORE_NAME, movie);
  },
  async deleteMovie(id) {
    return (await dbPromise).delete(CONFIG.OBJECT_STORE_NAME, id);
  },
};

export default FavoriteMovieIdb;
