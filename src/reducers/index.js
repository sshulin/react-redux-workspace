import updateItems from './items';

const reducer = (state, action) => {
  return {
    items: updateItems(state, action)
  }
};

export default reducer;