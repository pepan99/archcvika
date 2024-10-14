import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from './jwtConstants';

@Module({
    imports: [UsersModule, JwtModule.register({
        global: true,
        secret: jwtConstants,
        signOptions: { expiresIn: '60m' }, 
    })]
})
export class AuthModule {}
