export interface IUSerPost {
    user: {
        username: string;
        email: string;
        password: string;
    }
}
export interface IUSer {
    user: {
        username: string;
        email: string;
        token: string;
        bio: string;
        image: string;
    }
}
export interface IUserLogin {
    user: {
        email: string;
        password: string;
    }
}