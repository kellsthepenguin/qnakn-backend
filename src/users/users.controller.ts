import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users/hello')
  hello() {
    return this.usersService.getHandsomeGuy()
  }
}