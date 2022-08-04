const mongoose = require("mongoose");

const Nustschema = new mongoose.Schema(
  {
    netmarks: {
        type: String,
        required: true,
   
      },
      preferredcampus: {
        type: String,
        required: true,
      },
     
      hostel: {
        type: String,
        required: true,
      },
      applybefore: {
        type: String,
        required: true,
      },
      curricularactivities: {
        type: String,
        required: true,
      },
      program: {
        type: String,
        required: true,
      },

},
{ timestamps: true }
);

module.exports = mongoose.model("Nust", Nustschema);
