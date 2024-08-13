import * as graphql from "@nestjs/graphql";
import { NotificationsService } from "./notifications.service";

export class NotificationsResolver {
  constructor(protected readonly service: NotificationsService) {}
}
