import { StringFilter } from "../../util/StringFilter";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DataPointWhereInput = {
  id?: StringFilter;
  sensor?: SensorWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
