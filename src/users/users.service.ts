import { Injectable } from '@nestjs/common'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { sha256 } from 'js-sha256'
import { nanoid } from 'nanoid'
import prisma from 'src/utils/prisma'
import { CreateUserInput, CreateUserOutput } from './dto/join.dto'

@Injectable()
export class UsersService {
  async join(dto: CreateUserInput): Promise<CreateUserOutput> {
    const salt = nanoid(100)
    const hashedPw = sha256(salt + dto.pw)

    try {
      await prisma.user.create({
        data: {
          ...dto,
          pw: hashedPw,
          nickname: dto.nickname,
          salt,
        },
      })
      return { ok: true }
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        return { ok: false, error: 'that id or mail already exists' }
      }
      return { ok: false }
    }
  }
}
