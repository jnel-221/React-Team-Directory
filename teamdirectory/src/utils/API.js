import axios from "axios";

//export object containing methods used for accessing  the randomuser.me  API.

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?seed=abc&results=250&nat=us,ca,gb,au&inc=name,email,dob,phone,id,picture,login");
  }
  };

