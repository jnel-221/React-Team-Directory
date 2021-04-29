import axios from "axios";

//export object containing methods used for accessing  the randomuser.me  API.

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?seed=abc&results=50&nat=us,gb,au,ca&inc=name,email,dob,phone,id,picture,login");
  }
  };

