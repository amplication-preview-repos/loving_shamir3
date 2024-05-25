/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataPointListRelationFilter } from "../../dataPoint/base/DataPointListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { DeviceListRelationFilter } from "../../device/base/DeviceListRelationFilter";
import { FarmWhereUniqueInput } from "../../farm/base/FarmWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumSensorTypeField } from "./EnumSensorTypeField";

@InputType()
class SensorWhereInput {
  @ApiProperty({
    required: false,
    type: () => DataPointListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DataPointListRelationFilter)
  @IsOptional()
  @Field(() => DataPointListRelationFilter, {
    nullable: true,
  })
  dataPoints?: DataPointListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DeviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereUniqueInput)
  @IsOptional()
  @Field(() => DeviceWhereUniqueInput, {
    nullable: true,
  })
  device?: DeviceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DeviceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DeviceListRelationFilter)
  @IsOptional()
  @Field(() => DeviceListRelationFilter, {
    nullable: true,
  })
  devices?: DeviceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FarmWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FarmWhereUniqueInput)
  @IsOptional()
  @Field(() => FarmWhereUniqueInput, {
    nullable: true,
  })
  farm?: FarmWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumSensorTypeField,
  })
  @IsEnum(EnumSensorTypeField)
  @IsOptional()
  @Field(() => EnumSensorTypeField, {
    nullable: true,
  })
  typeField?: "Option1";
}

export { SensorWhereInput as SensorWhereInput };