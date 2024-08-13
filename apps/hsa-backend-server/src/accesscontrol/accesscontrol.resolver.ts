import * as graphql from "@nestjs/graphql";
import { AccessControlService } from "./accesscontrol.service";

export class AccessControlResolver {
  constructor(protected readonly service: AccessControlService) {}
}
