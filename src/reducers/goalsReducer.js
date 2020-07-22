function goalsReducer(state = [], action) {
    
    switch (action.type) {
        case "ADD_GOAL":
            console.log("ADD_GOAL")
            break;
        case "UPDATE_GOAL":
            console.log("UPDATE_GOAL")
            break;
        case "DELETE_GOAL":
            console.log("DELETE_GOAL")
            break;
            default:
                return state
    }
}

export default goalsReducer