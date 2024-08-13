import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthcareProviderService } from "./healthcareProvider.service";
import { HealthcareProviderControllerBase } from "./base/healthcareProvider.controller.base";

@swagger.ApiTags("healthcareProviders")
@common.Controller("healthcareProviders")
export class HealthcareProviderController extends HealthcareProviderControllerBase {
  constructor(
    protected readonly service: HealthcareProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
