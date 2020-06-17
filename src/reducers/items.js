import { saveItemsApi } from '../utils/api';

const updateItems = (state, action) => {

  if(state === undefined) {
    return {
      loaded: false,
      data: []
    }
  }

  switch (action.type) {
    case 'ITEMS_LOADED': {
      return {
        ...state.items,
        data: action.payload,
        loaded: true
      }
    }

    case 'ITEM_DELETED': {
      const data = state.items.data.filter((item) => item.id !== action.payload);
      saveItemsApi(data).then();

      console.log(data, action.payload);

      return {
        ...state.items,
        data
      }
    }

    default: {
      return state.items;
    }
  }
}

export default updateItems;