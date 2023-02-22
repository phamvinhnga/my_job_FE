export class AuthModel implements IAuthModel {
    userName:string | undefined;
    password:string | undefined;
}

export interface IAuthModel{
    userName:string | undefined;
    password:string | undefined;
}

export class UserSignInOutputModel implements IUserSignInOutputModel {
    accessToken!:string;
    expire!:string;

    init(data?: any) {
        if (data) {
            this.accessToken = data["accessToken"];
            this.expire = data["expire"];
        }
    }
    
    static fromJS(data: object): UserSignInOutputModel {
        data = typeof data === 'object' || data != null ? data : {};
        let result = new UserSignInOutputModel();
        result.init(data);
        return result;
    }
}
export interface IUserSignInOutputModel{
    accessToken:string | undefined;
    expire:string | Date | undefined;
}


export class CurrentUserOutputModel implements ICurrentUserOutputModel {
    id:number | undefined;
    surname:string | undefined;
    name:string | undefined;
    fullName:string | undefined;
    extentionId:string | undefined;

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.surname = data["surname"];
            this.name = data["name"];
            this.fullName = data["fullName"];
            this.extentionId = data["extentionId"];
        }
    }
    
    static fromJS(data: object): CurrentUserOutputModel {
        data = typeof data === 'object' || data != null ? data : {};
        let result = new CurrentUserOutputModel();
        result.init(data);
        return result;
    }
}

export interface ICurrentUserOutputModel{
    id:number | undefined;
    surname:string | undefined;
    name:string | undefined;
    fullName:string | undefined;
    extentionId:string | undefined;
}
