const initialstate = 0;
const IncDec = (state = initialstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case "Increment": return state + parseInt(payload);
        case "Decrement": return state - parseInt(payload);
        default: return state;
    }

}
export default IncDec;