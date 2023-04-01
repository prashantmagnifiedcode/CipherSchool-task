
export const listtodo=(DATA)=>{
    console.log("dat",DATA)
    return {
        type:"LIST_ADD_TODO",
        payload:{
            DATA
        }
    }
}
export const addtodo=(data)=>{
    console.log("dat",data)
    return {
        type:"ADD_TODO",
        payload:{
            data
        }
    }
}
export const deletetodo=(id)=>{
    console.log("dlete",id)
    return {
        type:"DELETE_TODO",
        id
    }
}
export const Checkeddeletetodo=(deldata)=>{
    // console.log("dlete",id)
    return {
        type:"CHECKED_DELETE_TODO",
        payload:{deldata}
    }
}
export const updatedtodo=(upid)=>{
    return {
        type:"UPDATE_TODO",
        payload:{upid}
    }
}
export const removetodo=()=>{
    return {
        type:"REMOVE_TODO"
    }
}