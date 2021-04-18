const redux = require('redux');

// console.log(redux);

// State
const initState = {
    num: 0
}

// Reducer

// const rootReducer = (state, action) => {
//     return state;
// }

const rootReducer = (state = initState, action) => {

    if (action.type === 'INC_NUM') {
        return {
            // spread operator
            ...state,
            num: state.num + 2
        }
    }

    if (action.type === 'ADD_NUM') {
        return {
            ...state,
            num: state.num + action.a
        }
    }

    if (action.type === 'DEC_NUM') {
        return {
            ...state,
            num: state.num - 1
        }
    }
    return state;
}

// Store

// const store = redux.createStore();
const store = redux.createStore(rootReducer);

console.log(store.getState());

// Subscribe
// after dispatch subscribe will be called
// if dispatch is not called, subscribe will not called
store.subscribe(() => {
    console.log("[Subscribe]", store.getState());
})

// Dispatching Action
// if we change the sequence of actions, subscribe will be called according to that sequence

store.dispatch({
    type: 'ADD_NUM',
    a: 34
})

store.dispatch({
    type: 'DEC_NUM'
})

store.dispatch({
    // type is a built-in object
    type: 'INC_NUM'
});

// console.log(store);
// console.log(store.getState());
