import {get} from '../data/crud'

class UserService {
    constructor(){
        this.baseUrl = "http://localhost:5000/auth";
        this.allUsersUrl = `${this.baseUrl}/allUsers`;
    }


    getAllUsers(){
       return  get(this.allUsersUrl);
    }
}

export default UserService;

