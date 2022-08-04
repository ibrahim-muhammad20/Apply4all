const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      immutable:true,
      required: true,
      
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength:10,
    },
    phone: {
      type: String,
      required: true,
    },
   
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    token: {
      type:String,
      default:''
  },
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
