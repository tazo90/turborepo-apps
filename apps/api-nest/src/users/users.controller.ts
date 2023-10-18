import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @ApiParam({
  //   name: 'id',
  //   required: true,
  //   description: 'Should be an id of a post that exists in the database',
  //   type: Number,
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'A post has been successfully fetched',
  //   type: String,
  // })
  // @ApiResponse({
  //   status: 404,
  //   description: 'A post with given id does not exist.',
  // })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  getAllUsers(@Query() query) {
    return this.usersService.getUsers(query);
  }
}
