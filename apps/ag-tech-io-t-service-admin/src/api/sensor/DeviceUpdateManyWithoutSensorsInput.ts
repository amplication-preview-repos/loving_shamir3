import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";

export type DeviceUpdateManyWithoutSensorsInput = {
  connect?: Array<DeviceWhereUniqueInput>;
  disconnect?: Array<DeviceWhereUniqueInput>;
  set?: Array<DeviceWhereUniqueInput>;
};
