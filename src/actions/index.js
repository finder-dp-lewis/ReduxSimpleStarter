import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblox.herokuapp/api';
const API_KEY = '?key=fdjklfdjlkfdjk';

export function fetchPosts() {

  const requet = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
