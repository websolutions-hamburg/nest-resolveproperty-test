import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Recipe {
  @Field(type => ID)
  id: string;

  @Field({description: 'Description Test 1'})
  title: string;

  @Field({description: 'Description Test 2'})
  title2: string;

  @Field({description: 'Description Test 3'})
  title3: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}
