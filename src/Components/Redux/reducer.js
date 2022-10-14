import { initialState } from './store'
import { ADD_JOBS, GET_JOBS, REMOVE_JOBS } from './types'
const reducer = (state=initialState,action) => {
   switch(action.type){
    case GET_JOBS:{
        return state;
    }
    case REMOVE_JOBS:{
        return{
            ...state, jobList: state.jobList.filter(jobItem => jobItem.id!==action.payload)
        }
    }
    case ADD_JOBS:{
        return{
            ...state,jobList:[...state.jobList,action.payload]
        }
    }
   }
  
}

export default reducer;