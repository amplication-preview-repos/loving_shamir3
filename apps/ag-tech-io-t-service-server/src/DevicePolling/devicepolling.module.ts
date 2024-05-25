import { Module } from "@nestjs/common";
import { DevicePollingService } from "./devicepolling.service";
import { DevicePollingController } from "./devicepolling.controller";
import { DevicePollingResolver } from "./devicepolling.resolver";

@Module({
  controllers: [DevicePollingController],
  providers: [DevicePollingService, DevicePollingResolver],
  exports: [DevicePollingService],
})
export class DevicePollingModule {}
