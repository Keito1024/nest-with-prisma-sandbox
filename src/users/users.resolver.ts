import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { User } from './models/users.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users() {
    return this.prisma.users.findMany();
  }

  @Mutation(() => User)
  async createUser(@Args('name') name: string, @Args('age') age: number) {
    return this.prisma.users.create({ data: { name, age } });
  }
}
