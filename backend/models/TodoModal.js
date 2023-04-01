const mongoose = require("mongoose");

const MyTodo = new mongoose.Schema(
	{
		completed:{
			type:Boolean
		},
		position:{
			type:Number,
			default:0
		},
		data:{
			title:{
				type:String,
			},
			Description:{
				type:String,
			},
		}
		
	}
)	

const todo = mongoose.model("MyTodo", MyTodo);

module.exports = todo;