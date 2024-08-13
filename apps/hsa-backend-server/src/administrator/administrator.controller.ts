import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdministratorService } from "./administrator.service";
import { AdministratorControllerBase } from "./base/administrator.controller.base";

@swagger.ApiTags("administrators")
@common.Controller("administrators")
export class AdministratorController extends AdministratorControllerBase {
  constructor(
    protected readonly service: AdministratorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
