const Moviemodal = require("../model/movieM")

const Movies=async(req,res)=>{
    await Moviemodal.create(req.body)
    res.redirect("/movii")
}
const movieget=async(req,res)=>{
   const data= await Moviemodal.find({})
    res.render("movie",{data})
}
const movieedit=async(req,res)=>{
    const id=req.query.id
    const edited=await Moviemodal.findById(id)
    res.render("editmovie",{edited})
}
const movieupdate=async(req,res)=>{
    const id=req.body.id
     await Moviemodal.findByIdAndUpdate(id,req.body)
    res.redirect("/movii")
}
const movieDelete = async (req, res) => {
    const id = req.query.id;
    await Moviemodal.findByIdAndDelete(id);
    res.redirect("/movii");
};

module.exports={Movies,movieget,movieedit,movieupdate,movieDelete}