import { Sensor } from "../sensor/Sensor";

export type DataPoint = {
  createdAt: Date;
  id: string;
  sensor?: Sensor | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
