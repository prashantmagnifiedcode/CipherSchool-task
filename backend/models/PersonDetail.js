const mongoose = require("mongoose");

const cipher = new mongoose.Schema({
  profile: {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    password: {
      type: String,
    },
    image:{
      type: String,
    }
  },
  About: {
    type: String,
  },
  ProfileLinks: {
    LinkedIn: {
      type: String,
	  default:""
    },
    Facebook: {
      type: String,
	  default:""
    },
    Instagram: {
      type: String,
	  default:""
    },
    Twitter: {
      type: String,
	  default:""
    },
    website: {
      type: String,
	  default:""
    },
    GitHub: {
      type: String,
	  default:""
    },
  },
  Prof: {
	Education:{
      type: String,
	  default:""
    },Currently:{
      type: String,
	  default:""
    }
  },
  interest: [],
  follower:[]
});

const Admin = mongoose.model("cipher", cipher);

module.exports = Admin;
