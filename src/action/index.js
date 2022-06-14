export const incNum = (payload) => {
    return {
        type: "Increment",
        payload: payload
    }
}

export const decNum = (payload) => {
    return {
        type: "Decrement",
        payload: payload
    }
}
