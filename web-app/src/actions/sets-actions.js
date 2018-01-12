import * as types from '../constants/action-types'
import { API_URL } from '../constants/config'

export const fetchSets = () => (dispatch) => {
  dispatch({ type: types.FETCH_SETS_REQUEST })
  // TODO: Make fetch into a utility function in ../utils/fetch
  fetch(`${API_URL}/sets`)
    .then(response => response.json())
    .then(sets => {
      const homeSet = sets.objects.filter((set) => set.title === 'Home')[0]
      dispatch({
        type: types.FETCH_SETS_SUCCESS,
        payload: {
          homeSet,
          homeSetItems: homeSet.items
        }
      })
    })
    .catch((error) => console.error(error))
}

export const fetchEpisodesContent = (itemIndex, itemUid) => (dispatch) => {
  dispatch({ type: types.FETCH_CONTENT_REQUEST })
  return fetch(`${API_URL}/episodes/${itemUid}`)
    .then(response => response.json())
    .then(episode => dispatch({ type: types.FETCH_CONTENT_SUCCESS, payload: { itemIndex, episode }}))
    .catch((error) => console.error(error))
}

export const fetchDevidersContent = (itemIndex, itemUid) => (dispatch) => {
  dispatch({ type: types.FETCH_CONTENT_REQUEST })
  return fetch(`${API_URL}/dividers/${itemUid}`)
    .then(response => response.json())
    .then(episode => dispatch({ type: types.FETCH_CONTENT_SUCCESS, payload: { itemIndex, episode }}))
    .catch((error) => console.error(error))
}

export const selectEpisode = (selectedEpisode) => ({
  type: types.SELECTED_EPISODE,
  payload: { selectedEpisode }
})