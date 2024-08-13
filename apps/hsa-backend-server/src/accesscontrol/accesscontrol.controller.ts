import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AccessControlService } from "./accesscontrol.service";

@swagger.ApiTags("accessControls")
@common.Controller("accessControls")
export class AccessControlController {
  constructor(protected readonly service: AccessControlService) {}
}
