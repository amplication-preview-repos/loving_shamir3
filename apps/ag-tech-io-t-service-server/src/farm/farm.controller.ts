import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FarmService } from "./farm.service";
import { FarmControllerBase } from "./base/farm.controller.base";

@swagger.ApiTags("farms")
@common.Controller("farms")
export class FarmController extends FarmControllerBase {
  constructor(protected readonly service: FarmService) {
    super(service);
  }
}
