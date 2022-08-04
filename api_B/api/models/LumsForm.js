const mongoose = require("mongoose");

const LUMSFormSchema = new mongoose.Schema(
  {
    sat1: {
      type: String,
      required: true,
 
    },
    program: {
      type: String,
      required: true,
    },
    FathersNIC: {
      type: String,
      required: true,
    },
   
    Nop: {
      type: String,
      required: true,
 
    },
   
   HostelResidence: {
      type:String,
      required: true,
  },
  EducationBg: {
    type: String,
    required: true,

  },
 Appliedbefore: {
    type: String,
    required: true,

  },Coverletter: {
    type: String,
    required: true,

  }
},
  { timestamps: true }
);

module.exports = mongoose.model("LumsForm", LUMSFormSchema);
