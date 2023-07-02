const express=require("express");
const router=express.Router();
const studentscontroller=require("../controllers/studentscontroller");
router.get("/",studentscontroller.view);



module.exports=router;