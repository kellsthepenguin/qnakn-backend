import { Body, Controller, Param, Post } from '@nestjs/common'
import { CreateUserInput, CreateUserOutput } from './dto/join.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('join')
  async join(@Body() createDto: CreateUserInput): Promise<CreateUserOutput> {
    console.log(createDto)
    return this.usersService.join(createDto)
  }
}
