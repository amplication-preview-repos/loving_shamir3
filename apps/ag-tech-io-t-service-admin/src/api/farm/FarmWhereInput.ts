import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SensorListRelationFilter } from "../sensor/SensorListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FarmWhereInput = {
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  sensors?: SensorListRelationFilter;
  size?: FloatNullableFilter;
};
