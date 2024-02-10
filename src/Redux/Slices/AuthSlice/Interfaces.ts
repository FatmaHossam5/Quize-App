export interface AuthState {
    userData:UserData|null;
    isAuthed:boolean
}

export interface UserData{
    accessToken:string;
    refreshToken:string;
    profile:{
        _id:string,
        status:string,
        role:string,
        last_name:string,
        first_name:string,
        email:string,
    }
}