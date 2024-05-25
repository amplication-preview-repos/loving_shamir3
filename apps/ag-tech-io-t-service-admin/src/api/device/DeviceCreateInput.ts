import { FarmCreateNestedManyWithoutDevicesInput } from "./FarmCreateNestedManyWithoutDevicesInput";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";
import { SensorCreateNestedManyWithoutDevicesInput } from "./SensorCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  farms?: FarmCreateNestedManyWithoutDevicesInput;
  model?: string | null;
  name?: string | null;
  sensor?: SensorWhereUniqueInput | null;
  sensors?: SensorCreateNestedManyWithoutDevicesInput;
  serialNumber?: string | null;
};
