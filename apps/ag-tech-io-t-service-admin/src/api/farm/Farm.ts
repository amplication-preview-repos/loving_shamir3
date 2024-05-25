import { Device } from "../device/Device";
import { Sensor } from "../sensor/Sensor";

export type Farm = {
  createdAt: Date;
  device?: Device | null;
  id: string;
  location: string | null;
  name: string | null;
  sensors?: Array<Sensor>;
  size: number | null;
  updatedAt: Date;
};
