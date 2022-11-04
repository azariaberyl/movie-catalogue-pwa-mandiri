import API_ENDPOINT from '../global/api-endpoint';

export default class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}
