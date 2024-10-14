import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){};

    async signIn(username: string, password: string): Promise<{ access_token: string }> {
        const user = this.usersService.getUserByUsername(username);

        if (user?.password !== password) {
            throw new UnauthorizedException(`Unsuccessful login`);
        }

        const payload = { username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
