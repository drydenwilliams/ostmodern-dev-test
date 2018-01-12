const initialState = {
  homeSet: null,
  homeSetItems: null,
  selectedEpisode: null
}

function setsReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SETS_SUCCESS':
      return {
        ...state,
        homeSet: action.payload.homeSet,
        homeSetItems: action.payload.homeSetItems
      }
    case 'FETCH_CONTENT_SUCCESS':
      // TODO: make into a utility function
      const insertItem = (array, action) => {
        let newArray = array.slice()
        newArray.splice(action.payload.itemIndex, 1, action.payload.episode)
        return newArray
      }
      const updatedItemsArray = insertItem(state.homeSetItems, action)
      return {
        ...state,
        homeSetItems: updatedItemsArray
      }
    case 'SELECTED_EPISODE':
      return {
        ...state,
        selectedEpisode: action.payload.selectedEpisode
      }
    default:
      return state
  }
}

export default setsReducer
