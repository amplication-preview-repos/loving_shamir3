import { Farm } from "../farm/Farm";
import { Sensor } from "../sensor/Sensor";

export type Device = {
  createdAt: Date;
  farms?: Array<Farm>;
  id: string;
  model: string | null;
  name: string | null;
  sensor?: Sensor | null;
  sensors?: Array<Sensor>;
  serialNumber: string | null;
  updatedAt: Date;
};
