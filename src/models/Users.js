export default class User{
    constructor(
        username,
        password,
        accountid
    ){
        this.username=username;
        this.password=password;
        this.accountid=accountid;
    }
    set username(username){
        this.username=username;
    }
    set password(password){
        this.password = password;
    }
    set accountid(accountid){
        this.accountid=accountid
    }
    get username(){
        return this.username;
    }
    get password(){
        return this.password;
    }
}