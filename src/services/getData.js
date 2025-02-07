import { api } from './api';

export async function getPopular(type) {
  const {
    data: { results },
  } = await api.get(`/${type}/popular`);

  return results;
}

export async function getLatest(type) {
  const { data } = await api.get(`/${type}/latest`);

  return data;
}

export async function getTopRated(type) {
  const {
    data: { results },
  } = await api.get(`/${type}/top_rated`);

  return results;
}

export async function getVideos(type, id) {
  const {
    data: { results },
  } = await api.get(`/${type}/${id}/videos`);

  return results;
}

export async function getDetails(type, id) {
  const { data } = await api.get(`/${type}/${id}`);

  return data;
}

export async function getSimilar(type, id) {
  const {
    data: { results },
  } = await api.get(`/${type}/${id}/similar`);

  return results;
}

export async function getCredits(type, id) {
  const {
    data: { cast },
  } = await api.get(`/${type}/${id}/credits`);

  return cast;
}

export async function getNowPlaying(type) {
  const {
    data: { results },
  } = await api.get(`/${type}/now_playing`);

  return results;
}
export async function getReleasedSoon(type) {
  const {
    data: { results },
  } = await api.get(`/${type}/upcoming`);

  return results;
}

export async function getAiringToday(type) {
  const {
    data: { results },
  } = await api.get(`/${type}/airing_today`);

  return results;
}

export async function getOntheAir(type) {
  const {
    data: { results },
  } = await api.get(`/${type}/on_the_air`);

  return results;
}

export async function getMovieCredits(type, id) {
  const {
    data: { cast },
  } = await api.get(`/${type}/${id}/movie_credits`);

  return cast;
}

export async function getTvCredits(type, id) {
  const {
    data: { cast },
  } = await api.get(`/${type}/${id}/tv_credits`);

  return cast;
}

export async function getActorImages(type, id) {
  const {
    data: { profiles },
  } = await api.get(`/${type}/${id}/images`);

  return profiles;
}
