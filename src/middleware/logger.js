const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.log('The Action:', action);
	const returnValue = next(action);
	console.log('The New Estate: ', store.getState());
	console.groupEnd();
	return returnValue;
};
export default logger;
