import { FarmUpdateManyWithoutDevicesInput } from "./FarmUpdateManyWithoutDevicesInput";
import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";
import { SensorUpdateManyWithoutDevicesInput } from "./SensorUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  farms?: FarmUpdateManyWithoutDevicesInput;
  model?: string | null;
  name?: string | null;
  sensor?: SensorWhereUniqueInput | null;
  sensors?: SensorUpdateManyWithoutDevicesInput;
  serialNumber?: string | null;
};
