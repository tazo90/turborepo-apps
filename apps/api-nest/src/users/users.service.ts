import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User, Prisma } from '@prisma/client';

import { PrismaService } from '@/database/prisma/prisma.service';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    @InjectConnection() private readonly knex: Knex,
  ) {}

  // async findAll(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.UserWhereUniqueInput;
  //   where?: Prisma.UserWhereInput;
  //   orderBy?: Prisma.UserOrderByWithRelationInput;
  // }): Promise<any[]> {
  //   const { skip, take, cursor, where, orderBy } = params;

  //   return this.prisma.user.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }

  async findAll() {
    const users = await this.knex.table('user');
    return users;
  }

  // async create(data: Prisma.UserCreateInput): Promise<User> {
  //   return this.prisma.user.create({ data });
  // }

  async create(createUserDto: CreateUserDto) {
    try {
      const users = await this.knex.table('user').insert(
        {
          name: createUserDto.name,
          email: createUserDto.email,
        },
        ['id'],
      );

      return users;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    if (!id) {
      throw new NotFoundException('User ID does not exists');
    }
    return await this.knex.table('user').where('id', id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.knex.table('user').where('id', id).update(
        {
          name: updateUserDto.name,
          email: updateUserDto.email,
        },
        ['id'],
      );
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: number) {
    if (!id) {
      throw new NotFoundException('User ID does not exists');
    }
    return await this.knex.table('user').where('id', id).del();
  }
}
