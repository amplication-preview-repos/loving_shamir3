import { Injectable } from "@nestjs/common";

@Injectable()
export class DevicePollingService {
  constructor() {}
  async PollDeviceData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
