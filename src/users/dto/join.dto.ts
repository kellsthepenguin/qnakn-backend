import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateUserInput {
  @IsNotEmpty()
  id: string

  @IsEmail()
  email: string

  @IsNotEmpty()
  pw: string
}

export class CreateUserOutput {
  ok: boolean
}
