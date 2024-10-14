import { Injectable } from '@nestjs/common';

type User = any;
@Injectable()
export class UsersService {
    private users: User = [{
        id: "1",
        username: "Mike",
        password: "Oxlong"
    }];

    getUserByUsername(username: string): User {
        const user = this.users.find((user) => user.username === username);
        return user;
    }
}
