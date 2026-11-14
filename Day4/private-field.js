class User{
    #password;
    constructor(username,pw){
        this.username = username;
        this.#password = pw;
    }
    checkPassword(pw){
        if(this.#password === pw){
            return true;
        }return false;
    }
}

const u1 = new User("csk007","7583jjj9");

if(u1.checkPassword("7583jjj9")){
    console.log(`Login successful`)
}
else{
    console.log(`Invalid Password`);
}

