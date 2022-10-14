import {createStore} from "redux";
import reducer from "./reducer";
export const initialState = {
    jobList:[
        {
            id:1,
            title:"Frontend developer",
            companyName: "Spark+",
            salary:"20K",
            joiningDate:"01/10/2022",
            description:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem"
        },
          {
            id:2,
            title:"Frontend developer",
            companyName: "Wipro",
            salary:"20K",
            joiningDate:"01/10/2022",
            description:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem"
        },
         {
            id:3,
            title:"Backend developer",
            companyName: "Wipro",
            salary:"20K",
            joiningDate:"01/10/2022",
            description:"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem LoremLorem"
        }
    ]
}
const store = createStore(reducer,initialState);
export default store;