import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PortfolioService } from "./portfolio.service";
import { PortfolioControllerBase } from "./base/portfolio.controller.base";

@swagger.ApiTags("portfolios")
@common.Controller("portfolios")
export class PortfolioController extends PortfolioControllerBase {
  constructor(
    protected readonly service: PortfolioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
