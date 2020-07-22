function topicsReducer(state = [], action) {
    
    switch (action.type) {
        case "ADD_TOPICS":
            console.log("ADD_TOPIC")
            break
        case "UPDATE_TOPIC":
            console.log("UPDATE_TOPIC")
            break
        case "DELETE_TOPIC":
            console.log("DELETE_TOPIC")
            break
            default:
                return state
    }
}

export default topicsReducer