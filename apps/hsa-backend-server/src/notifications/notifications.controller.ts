import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationsService } from "./notifications.service";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationsController {
  constructor(protected readonly service: NotificationsService) {}
}
