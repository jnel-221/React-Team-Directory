import axios from "axios";


export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?seed=abc&results=175&nat=us,ca,gb,au&inc=name,email,dob,phone,id,picture,login");
  }
  };

