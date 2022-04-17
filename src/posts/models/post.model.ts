import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  // numberはデフォルトではGraphQLのfloatに変換されるので明示的にidを指定している
  @Field(() => ID)
  id: number;
  title: string;
  content: string;
  published: boolean;
}
