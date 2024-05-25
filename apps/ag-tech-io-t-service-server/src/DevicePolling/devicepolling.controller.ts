import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DevicePollingService } from "./devicepolling.service";

@swagger.ApiTags("devicePollings")
@common.Controller("devicePollings")
export class DevicePollingController {
  constructor(protected readonly service: DevicePollingService) {}

  @common.Get("/poll/:deviceId")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PollDeviceData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PollDeviceData(body);
      }
}
