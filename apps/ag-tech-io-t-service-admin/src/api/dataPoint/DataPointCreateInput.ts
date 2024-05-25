import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type DataPointCreateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
