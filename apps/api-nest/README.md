# CLI
nest g module auth
nest g service auth
nest g controller auth

# Repl
yarn start:repl

.editor           # editor mode
.clear            # clear all context
.save file.js     # save repl session
.load file.js     # load repl session

_ # result of last command

help()
debug()

methods(UsersController)
await get(UsersController).getAllUsers({})
await $(UsersController).getAllUsers({})

await get(UsersService).getUsers({})
await get(UsersController).createUser({ name: 'Test', email: 'zzz@o2.pl', emailVerified: true })

https://wanago.io/2022/07/18/api-nestjs-repl/
