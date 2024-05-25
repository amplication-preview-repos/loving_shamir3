import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DataPointTitle } from "../dataPoint/DataPointTitle";
import { DeviceTitle } from "../device/DeviceTitle";
import { FarmTitle } from "../farm/FarmTitle";

export const SensorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="dataPoints"
          reference="DataPoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataPointTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="device.id" reference="Device" label="Device">
          <SelectInput optionText={DeviceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="devices"
          reference="Device"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeviceTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="farm.id" reference="Farm" label="Farm">
          <SelectInput optionText={FarmTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
