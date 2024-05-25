import { SortOrder } from "../../util/SortOrder";

export type DataPointOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  sensorId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
