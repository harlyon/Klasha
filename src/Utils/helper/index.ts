import moment from "moment";

export const today=()=>{
    return moment().format("MMM Do, YYYY"); 
}