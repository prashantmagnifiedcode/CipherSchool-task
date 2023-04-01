const router = require("express").Router();
const { Notes, FetchNotes,Addnotes,updatenotes ,updatePosition, deletenotes, UserRequest,deleteSelectednotes} = require("../controller/TodoController");
//Register

router.post("/Notes", Notes);
router.get("/Notes/FetchNote", FetchNotes);
// router.post("/Note/AddNotes",Addnotes );
router.patch("/Note/UpdateNotes", updatenotes);
router.patch("/Note/UpdatePosition", updatePosition);
router.delete("/Note/DeleteNotes/:id",  deletenotes);
// router.delete("/Note/DeleteSubNotes/:id/:sub_id",  deletenotes);
// router.get("/get_note/processes",   UserRequest);
router.post("/Note/DeleteSelectedNotes/",   deleteSelectednotes);
module.exports=router