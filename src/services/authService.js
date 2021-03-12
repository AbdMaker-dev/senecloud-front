import axios from "axios";

const API_URL = "http://localhost:3000/api/";

class AuthService{

    login(username, password) {
        return axios
          .post("https://localhost:3000/api/login", {
            username,
            password
          })
          .then(response => {
            if (response.data.accessToken) {
                console.log(response.data);
                // localStorage.setItem("user", JSON.stringify(response.data));
            }
    
            return response.data;
          });
    }

    logout() {
        // localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthService();