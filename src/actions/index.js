import itemCatalog from '../data/items';
import { getItemsApi } from '../utils/api';

const itemsLoaded = (newItems) => {
	return {
		type: 'ITEMS_LOADED',
		payload: newItems
	}
}

const itemsRequested = (payload) => {
	return {
		type: 'ITEMS_REQUESTED',
		payload: payload
	}
}

const itemDeleted = (itemCode) => {
	return {
		type: 'ITEM_DELETED',
		payload: itemCode
	}
}

const fetchItems = () => (dispatch) => {
	dispatch(itemsRequested());

	getItemsApi().then(
		(items) => dispatch(itemsLoaded(items)),
		(error) => dispatch(itemsLoaded(itemCatalog))
	);
}

const smartFetchItems = () => (dispatch, getState) => {
	const { items: { loaded } } = getState();

	if(!loaded) dispatch(fetchItems());
}

export {
	itemsLoaded,

	itemDeleted,

	fetchItems,
	smartFetchItems
};