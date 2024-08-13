import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PortfolioModuleBase } from "./base/portfolio.module.base";
import { PortfolioService } from "./portfolio.service";
import { PortfolioController } from "./portfolio.controller";
import { PortfolioResolver } from "./portfolio.resolver";

@Module({
  imports: [PortfolioModuleBase, forwardRef(() => AuthModule)],
  controllers: [PortfolioController],
  providers: [PortfolioService, PortfolioResolver],
  exports: [PortfolioService],
})
export class PortfolioModule {}
