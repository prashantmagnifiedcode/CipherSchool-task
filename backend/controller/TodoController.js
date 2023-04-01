const todo = require("../models/TodoModal");
module.exports = {
    Notes: async (req, res, next) => {
          console.log(req.body)
        try {
          console.log("created resgiter")
          const ress= new todo({data:req.body,completed:false});
          const done= await ress.save()
         
          if (!done) throw createErrror(404, "Product not exits");
          res.status(200).json({done:"done"});
        
        } catch (error) {
          console.log(error)
        }
      },
    FetchNotes: async (req, res, next) => {
       
        try {
            const ress= await todo.find().sort({position:1})
          if (!ress) throw createErrror(404, "Product not exits");

            res.status(200).send(ress)

        } catch (error) {
          console.log(error)
        }
      },

  //   Addnotes: async (req, res, next) => {
       
  //       try {
  //         const{_id,notes,register_name}=req.body
  //       const note= await Note.updateOne({ _id },{ $push:{
  //         SubRegister:{
  //           $each:[
  //            {NoteName:register_name , Data:notes},
  //           ]
  //         }
  //       }});
  //       if(!note) throw createErrror(404, "Product not exits")
  //       res.status(200).json({done:"done"});
  //       } catch (error) {

  //         console.log(error)
          
  //       }
  //     },
    updatenotes: async (req, res, next) => {
        try {
          const{id}=req.body
          // console.log(content,id,sub_id)
          const Renew_note= await todo.updateOne({_id:id},{$set:{completed:!req.body.completed}});
        console.log("save")
         if(!Renew_note){
          throw createErrror(404, "Product not exits");
         }else{
           res.status(200).send()
         }
        } catch (error) {
          
          
        }
      },
    updatePosition: async (req, res, next) => {
        try {
          const{id,index}=req.body
          // console.log(content,id,sub_id)
          const Renew_note= await todo.updateOne({_id:id},{$set:{position:index}});
        console.log("save")
         if(!Renew_note){
          throw createErrror(404, "Product not exits");
         }else{
           res.status(200).send()
         }
        } catch (error) {
          
          
        }
      },
    deletenotes: async (req, res, next) => {
        try {
          console.log(req.params.id)
    
            const note_d= await todo.deleteOne({_id:req.params.id});
            if (!note_d) throw createErrror(404, "todo items not exits");
            res.status(200).json({done:"done"});
          
        } catch (error) {
          console.log(error)
        }
      },
  //       // view part table
        
  // UserRequest: async (req, res, next) => {
    
  //   const search = req.query.search?.toLowerCase();
   
  //   try {
  //     console.log("search",search)
  //     let regex = new RegExp(search, "i");
  //     let result;     
      
  //     if (search !== "undefined" && search !== "") {
  //       result = await Note.find({
  //         RegisterName: { $regex: regex },
  //       })
  //     }
   
        
  //        if (!result) throw createErrror(404, "Product not exits");
         
  //        res.status(200).send(result)

  //   } catch (error) {
  //     next(error);
  //   }
  // },
    deleteSelectednotes: async (req, res, next) => {
        try {
          const result = req.body;
          console.log(result);
          if(result){

            const ids = result.map(item => item._id);
            if(ids.length){

                const note_d= await todo.deleteMany({_id:{$in:ids}});
                if(note_d){
                  res.status(200).send()
                }
            }
            console.log(ids);
          }
          res.status(404).send()
       
        } catch (error) {
          console.log(error)
        }
      },
}
