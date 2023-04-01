const initialData={
    list:[]
}
const todoReducer=(state=initialData,action)=>{
    switch(action.type){
    
        case 'LIST_ADD_TODO':
            // console.log("payload",action.payload)

            const{DATA}=action.payload;
            return {
                ...state,
                list:[
                    ...DATA,
                    
                ]
            }
        case 'ADD_TODO':
            // console.log("payload",action.payload)

           window.location.reload()
            return state
        case 'UPDATE_TODO':
            const{upid}=action.payload;
            const newProjects = state.list.map(p =>
                p._id === upid
                  ? { ...p, completed: !p.completed }
                  : p
              );

            return {
                ...state,
                list:newProjects
            }
        case 'DELETE_TODO':
         const newlist=   state.list.filter((elem)=>elem._id!=action.id)
            return {
                ...state,
                list:newlist
            }
        // case 'CHECKED_DELETE_TODO':
        //     const{deldata}=action.payload
            
        //  const newlist=   deldata.filter((elem)=>elem.id!=action.id)
        //     return {
        //         ...state,
        //         list:newlist
        //     }
        case 'REMOVE_TODO':
         
            return {
                ...state,
                list:[]
            }
       default: return state;

    }
}
export default todoReducer