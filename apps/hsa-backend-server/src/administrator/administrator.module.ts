import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdministratorModuleBase } from "./base/administrator.module.base";
import { AdministratorService } from "./administrator.service";
import { AdministratorController } from "./administrator.controller";
import { AdministratorResolver } from "./administrator.resolver";

@Module({
  imports: [AdministratorModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdministratorController],
  providers: [AdministratorService, AdministratorResolver],
  exports: [AdministratorService],
})
export class AdministratorModule {}
