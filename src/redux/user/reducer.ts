const initialState ={
    currentUser: null,
}
const userReducer=(state = initialState, action:any)=>{
    if(action){
        return{...state, currentUser: 10}
    }
return state
}
export default userReducer