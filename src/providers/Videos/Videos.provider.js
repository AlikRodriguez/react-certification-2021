import { items } from '../videos.mock.json';

export function getVideos() {
  return Promise.resolve(items);
}
