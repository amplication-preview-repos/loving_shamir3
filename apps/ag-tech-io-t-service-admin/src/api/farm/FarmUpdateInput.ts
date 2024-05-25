import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { SensorUpdateManyWithoutFarmsInput } from "./SensorUpdateManyWithoutFarmsInput";

export type FarmUpdateInput = {
  device?: DeviceWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
  sensors?: SensorUpdateManyWithoutFarmsInput;
  size?: number | null;
};
