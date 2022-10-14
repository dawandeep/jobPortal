import { ADD_JOBS, GET_JOBS, REMOVE_JOBS } from "./types";
export function getJobs(){
    return{
        type:GET_JOBS
    }
}
export function deleteJobs(id){
    return{
        type:REMOVE_JOBS,
        payload:id
    }
}
export function addJobs(item){
    return {
        type:ADD_JOBS,
        payload:item
    }
}