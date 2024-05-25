import { DataPointUpdateManyWithoutSensorsInput } from "./DataPointUpdateManyWithoutSensorsInput";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { DeviceUpdateManyWithoutSensorsInput } from "./DeviceUpdateManyWithoutSensorsInput";
import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";

export type SensorUpdateInput = {
  dataPoints?: DataPointUpdateManyWithoutSensorsInput;
  device?: DeviceWhereUniqueInput | null;
  devices?: DeviceUpdateManyWithoutSensorsInput;
  farm?: FarmWhereUniqueInput | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
