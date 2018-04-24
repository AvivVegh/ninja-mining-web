import axios from 'axios'

class UserManager {
    constructor() {
        token = "1";
        console.log(token)
        userName = "";
    }

    login(name, password) {
        console.log(token)
        userName = name;
        token = password;
        console.log(token)

        axios.get('https://api.github.com/users/maecapozzi')
        .then(response => console.log(response))
    }
}

var token = "1";
var userName = ""
const instance = new UserManager();
Object.freeze(instance);

export default instance;