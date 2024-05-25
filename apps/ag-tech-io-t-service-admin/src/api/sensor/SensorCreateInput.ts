import { DataPointCreateNestedManyWithoutSensorsInput } from "./DataPointCreateNestedManyWithoutSensorsInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { DeviceCreateNestedManyWithoutSensorsInput } from "./DeviceCreateNestedManyWithoutSensorsInput";
import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";

export type SensorCreateInput = {
  dataPoints?: DataPointCreateNestedManyWithoutSensorsInput;
  device?: DeviceWhereUniqueInput | null;
  devices?: DeviceCreateNestedManyWithoutSensorsInput;
  farm?: FarmWhereUniqueInput | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
