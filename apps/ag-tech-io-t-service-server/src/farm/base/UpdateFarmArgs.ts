/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FarmWhereUniqueInput } from "./FarmWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FarmUpdateInput } from "./FarmUpdateInput";

@ArgsType()
class UpdateFarmArgs {
  @ApiProperty({
    required: true,
    type: () => FarmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FarmWhereUniqueInput)
  @Field(() => FarmWhereUniqueInput, { nullable: false })
  where!: FarmWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FarmUpdateInput,
  })
  @ValidateNested()
  @Type(() => FarmUpdateInput)
  @Field(() => FarmUpdateInput, { nullable: false })
  data!: FarmUpdateInput;
}

export { UpdateFarmArgs as UpdateFarmArgs };
