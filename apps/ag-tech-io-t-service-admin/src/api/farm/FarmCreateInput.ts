import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { SensorCreateNestedManyWithoutFarmsInput } from "./SensorCreateNestedManyWithoutFarmsInput";

export type FarmCreateInput = {
  device?: DeviceWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
  sensors?: SensorCreateNestedManyWithoutFarmsInput;
  size?: number | null;
};
