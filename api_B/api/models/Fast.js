const mongoose = require("mongoose");

const Fastschema = new mongoose.Schema(
  {
       siblings: {
        type: String,
        required: true,
   
      },
      fscmarks: {
        type: String,
        required: true,
      },
      preferredcampus: {
        type: String,
        required: true,
      },
     
      overseas: {
        type: String,
        required: true,
      },
      applyingfor: {
        type: String,
        required: true,
      },
      program: {
        type: String,
        required: true,
      },
      repeater: {
        type: String,
        required: true,
      },
      achievements: {
        type: String,
        required: true,
      },
      choosef:{
        type: String,
        required: true,
      },



      
},
{ timestamps: true }
);

module.exports = mongoose.model("Fast", Fastschema);
