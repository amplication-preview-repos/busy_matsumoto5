import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CryptocurrencyResolverBase } from "./base/cryptocurrency.resolver.base";
import { Cryptocurrency } from "./base/Cryptocurrency";
import { CryptocurrencyService } from "./cryptocurrency.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Cryptocurrency)
export class CryptocurrencyResolver extends CryptocurrencyResolverBase {
  constructor(
    protected readonly service: CryptocurrencyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
