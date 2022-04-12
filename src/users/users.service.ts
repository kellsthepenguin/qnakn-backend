import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  getHandsomeGuy() {
    return 'kells'
  }
}
