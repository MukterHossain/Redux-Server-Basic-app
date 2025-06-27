
const logger = (state) => (next) => (action) =>{
    // console.log(state.getState())
    console.group(action.type)
    console.info("First State",state.getState())
    const result = next(action)
    console.info("Next State", state.getState())
    console.groupEnd()
    return result
}



export default logger