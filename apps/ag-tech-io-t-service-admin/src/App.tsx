import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { SensorList } from "./sensor/SensorList";
import { SensorCreate } from "./sensor/SensorCreate";
import { SensorEdit } from "./sensor/SensorEdit";
import { SensorShow } from "./sensor/SensorShow";
import { FarmList } from "./farm/FarmList";
import { FarmCreate } from "./farm/FarmCreate";
import { FarmEdit } from "./farm/FarmEdit";
import { FarmShow } from "./farm/FarmShow";
import { DataPointList } from "./dataPoint/DataPointList";
import { DataPointCreate } from "./dataPoint/DataPointCreate";
import { DataPointEdit } from "./dataPoint/DataPointEdit";
import { DataPointShow } from "./dataPoint/DataPointShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AgTechIoTService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="Sensor"
          list={SensorList}
          edit={SensorEdit}
          create={SensorCreate}
          show={SensorShow}
        />
        <Resource
          name="Farm"
          list={FarmList}
          edit={FarmEdit}
          create={FarmCreate}
          show={FarmShow}
        />
        <Resource
          name="DataPoint"
          list={DataPointList}
          edit={DataPointEdit}
          create={DataPointCreate}
          show={DataPointShow}
        />
      </Admin>
    </div>
  );
};

export default App;
