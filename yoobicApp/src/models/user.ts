export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    gender: string;
    avatar: string;

    constructor(
        id: number,
        username: string,
        password: string,
        email: string,
        gender: string,
        avatar: string
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.avatar = avatar;

    }
}