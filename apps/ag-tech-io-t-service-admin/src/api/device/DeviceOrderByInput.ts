import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  name?: SortOrder;
  sensorId?: SortOrder;
  serialNumber?: SortOrder;
  updatedAt?: SortOrder;
};
