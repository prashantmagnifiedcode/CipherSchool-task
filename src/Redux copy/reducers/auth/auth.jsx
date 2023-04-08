const auth = (state,action) => {
	switch(action.type){
		case "LOGOUT":
			return{
			 	...state,
			 	user:null,
			 	loading:false,
			 	isAuthenticated:false,
			}
		case "LOGIN":
			return{
				...state,
			
				loading:false,
				isAuthenticated:true,
				userfirstname:action.payload.profile.firstname,
				userlastname:action.payload.profile.lastname,
				useremail:action.payload.profile.email,
				AllDetail:action.payload,
				WhichUser:action.payload.isFullAdmin,
				UserID:action.payload._id,

			}
		case "ERROR":
			return{
				...state,
				error:action.error,
				loading:false
			}
		default:
			return state
	}	
}

export default auth;