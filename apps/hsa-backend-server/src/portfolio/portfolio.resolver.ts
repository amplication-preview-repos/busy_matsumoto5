import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PortfolioResolverBase } from "./base/portfolio.resolver.base";
import { Portfolio } from "./base/Portfolio";
import { PortfolioService } from "./portfolio.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Portfolio)
export class PortfolioResolver extends PortfolioResolverBase {
  constructor(
    protected readonly service: PortfolioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
