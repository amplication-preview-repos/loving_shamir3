import { SensorWhereUniqueInput } from "../sensor/SensorWhereUniqueInput";

export type DataPointUpdateInput = {
  sensor?: SensorWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
