import { SortOrder } from "../../util/SortOrder";

export type SensorOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  farmId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
