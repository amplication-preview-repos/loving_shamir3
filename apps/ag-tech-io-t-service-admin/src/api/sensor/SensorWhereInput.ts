import { DataPointListRelationFilter } from "../dataPoint/DataPointListRelationFilter";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { DeviceListRelationFilter } from "../device/DeviceListRelationFilter";
import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SensorWhereInput = {
  dataPoints?: DataPointListRelationFilter;
  device?: DeviceWhereUniqueInput;
  devices?: DeviceListRelationFilter;
  farm?: FarmWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
