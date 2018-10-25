export class User {
    Id: number;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;

    constructor() {
        this.Id = 0;
        this.IsReviewer = false;
        this.IsAdmin = false;
    }
}
