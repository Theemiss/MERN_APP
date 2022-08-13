const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const ObjectId = Schema.ObjectId;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin : {
      type : Boolean,
      default : false

    },
    owner : {
      type : Boolean,
      default : false

    },
    phoneNumber : {
      type : String
    },
    name :{
      firstName: { type: String },
      lastName: { type: String }
    }

    
  },
  { collection: "users" }
);
User = mongoose.model("User", UserSchema);

module.exports = { User };

