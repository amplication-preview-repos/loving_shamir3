import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SENSOR_TITLE_FIELD } from "../sensor/SensorTitle";

export const DeviceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Devices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="model" source="model" />
        <TextField label="name" source="name" />
        <ReferenceField label="Sensor" source="sensor.id" reference="Sensor">
          <TextField source={SENSOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="serialNumber" source="serialNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
