/**
 * Created by mumarm45 on 13/12/2018.
 */
const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('this action: ', action);
    const result = next(action);
    console.log('this is new state: ', store.getState());
    console.groupEnd();
};

export default  logger;