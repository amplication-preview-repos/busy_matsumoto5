import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthcareProviderModuleBase } from "./base/healthcareProvider.module.base";
import { HealthcareProviderService } from "./healthcareProvider.service";
import { HealthcareProviderController } from "./healthcareProvider.controller";
import { HealthcareProviderResolver } from "./healthcareProvider.resolver";

@Module({
  imports: [HealthcareProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [HealthcareProviderController],
  providers: [HealthcareProviderService, HealthcareProviderResolver],
  exports: [HealthcareProviderService],
})
export class HealthcareProviderModule {}
