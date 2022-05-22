export class User {

    m_user_id:number = 0;
    m_username:string = "";
    m_email:string = "";
    m_password:string = "";

    constructor(username:string="", email:string="", password:string="") {

        this.m_username = username;
        this.m_email = email;
        this.m_password = password;
    }

}