import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { jwtConstants } from './jwtConstants';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();

      const token = this.getTokenFromHeaders(request);
      if (!token) {
        throw new UnauthorizedException("Token not valid");
      }
      
      try {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: jwtConstants
          }
        );
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }

    getTokenFromHeaders(request: Request) {
      if (!request.headers.authorization) {
        return undefined;
      }
      const [type, token] = request.headers.authorization?.split(" ");
      return type === "Bearer" ? token : undefined;
    }
} 