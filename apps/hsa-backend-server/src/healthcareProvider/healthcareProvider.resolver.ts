import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HealthcareProviderResolverBase } from "./base/healthcareProvider.resolver.base";
import { HealthcareProvider } from "./base/HealthcareProvider";
import { HealthcareProviderService } from "./healthcareProvider.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthcareProvider)
export class HealthcareProviderResolver extends HealthcareProviderResolverBase {
  constructor(
    protected readonly service: HealthcareProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
