


export default function(state=[],action){

    switch(action.type){
        case 'SEARCH-CARS':
            return action.payload
            default:
                return state
    }
    
}