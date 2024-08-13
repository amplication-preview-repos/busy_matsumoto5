import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResearcherModuleBase } from "./base/researcher.module.base";
import { ResearcherService } from "./researcher.service";
import { ResearcherController } from "./researcher.controller";
import { ResearcherResolver } from "./researcher.resolver";

@Module({
  imports: [ResearcherModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResearcherController],
  providers: [ResearcherService, ResearcherResolver],
  exports: [ResearcherService],
})
export class ResearcherModule {}
