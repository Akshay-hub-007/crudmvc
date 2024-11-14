const express=require("express");
const {entryStudent ,getStudents, deleteStudents}= require("../Controllers/StudentDetails");

const router=express.Router();
router.post("/entry",entryStudent)
router.get("/list",getStudents)
router.delete("/delete",deleteStudents)
module.exports=router  

