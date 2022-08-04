const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
 
    },
    middlename: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
   
    gender: {
      type: String,
      required: true,
 
    },
   
    dateofBirth: {
      type:String,
      default:''
  },
  matricolevel: {
    type: String,
    required: true,

  },
  idcard: {
    type: String,
    required: true,

  },passportNo: {
    type: String,
    required: true,

  },martialStatus: {
    type: String,
    required: true,

  },phone: {
    type: String,
    required: true,

  },nationality: {
    type:String,
    required: false,

  },dualNationality: {
    type: String,
    required: true,

  },
},
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);
