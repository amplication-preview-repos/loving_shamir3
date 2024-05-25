import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { DeviceTitle } from "../device/DeviceTitle";
import { SensorTitle } from "../sensor/SensorTitle";

export const FarmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="device.id" reference="Device" label="Device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="sensors"
          reference="Sensor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SensorTitle} />
        </ReferenceArrayInput>
        <NumberInput label="size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
