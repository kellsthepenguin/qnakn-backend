import { IsEmail, IsString } from 'class-validator'

export class CreateUserInput {
  @IsString()
  id: string

  @IsString()
  nickname: string

  @IsEmail()
  email: string

  @IsString()
  pw: string
}

export class CreateUserOutput {
  ok: boolean
  error?: string
}
