
const Student=require("../models/Student")
const { v4: uuidv4 } = require('uuid');
const entryStudent = async (req, res) => {
    console.log("akshay");
    
    const { name, age, grade } = req.body; 
    
    try {
      const newStudent = new Student({
        id: uuidv4(),
        name,
        age,
        grade,
      });
  
      await newStudent.save();
      res.json({ success: true, message: "entry success" });
    } catch (e) {
      console.error(e);
      res.json({ success: false, message: "entry failed" });
    }
  };
  const getStudents=async(req,res)=>{
      try{
        const list=await Student.find();
        res.status(200).send(list)
      }catch(err)
      {
        res.send("unables to get the list")
      }
  }

const deleteStudents=async(req,res)=>{
     try{
         const {id}=req.body
         console.log(req.body)
         const deletedStudent=await  Student.findOneAndDelete({id:id});
         console.log(deletedStudent)
         if(!deletedStudent)
         return  res.status(404).json({success:false,message:"there is no student"})

        return res.status(200).json({success:true,message:"deleted successfully"})
     }catch(err)
     {
     return  res.status(400).send("error in deleting student")
     }
}
module.exports={entryStudent,getStudents,deleteStudents}