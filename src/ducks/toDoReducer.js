import { GET_TODO } from './actionTypes'

let initialState = {
    toDo : []
}

export const getTodo = () => {
}

export default function(state = initialState, action) {
    let { type, payload } = action;
    switch(type) {
        case GET_TODO + '_FULFILLED':
            return { ...state }
        default: 
            return state
    }
}