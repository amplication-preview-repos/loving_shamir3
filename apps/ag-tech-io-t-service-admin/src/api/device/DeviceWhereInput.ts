import { FarmListRelationFilter } from "../farm/FarmListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";
import { SensorListRelationFilter } from "../sensor/SensorListRelationFilter";

export type DeviceWhereInput = {
  farms?: FarmListRelationFilter;
  id?: StringFilter;
  model?: StringNullableFilter;
  name?: StringNullableFilter;
  sensor?: SensorWhereUniqueInput;
  sensors?: SensorListRelationFilter;
  serialNumber?: StringNullableFilter;
};
