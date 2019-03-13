class AuthenticationServi{
    
        constructor(){
            this.baserUrl ='http://localhost:5000/auth';
        this.loginUrl=`${this.baseUrl}`;
        }
    
    login() {
        return this.loginUrl;
    }
}

const authe = new AuthenticationServi();
console.log(authe.login());