import { DataPoint } from "../dataPoint/DataPoint";
import { Device } from "../device/Device";
import { Farm } from "../farm/Farm";

export type Sensor = {
  createdAt: Date;
  dataPoints?: Array<DataPoint>;
  device?: Device | null;
  devices?: Array<Device>;
  farm?: Farm | null;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
