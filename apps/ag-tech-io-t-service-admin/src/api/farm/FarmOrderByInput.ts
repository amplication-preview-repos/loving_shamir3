import { SortOrder } from "../../util/SortOrder";

export type FarmOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
