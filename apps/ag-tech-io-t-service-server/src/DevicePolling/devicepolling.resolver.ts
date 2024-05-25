import * as graphql from "@nestjs/graphql";
import { DevicePollingService } from "./devicepolling.service";

export class DevicePollingResolver {
  constructor(protected readonly service: DevicePollingService) {}

  @graphql.Query(() => String)
  async PollDeviceData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PollDeviceData(args);
  }
}
