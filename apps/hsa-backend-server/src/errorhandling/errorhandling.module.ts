import { Module } from "@nestjs/common";
import { ErrorHandlingService } from "./errorhandling.service";
import { ErrorHandlingController } from "./errorhandling.controller";
import { ErrorHandlingResolver } from "./errorhandling.resolver";

@Module({
  controllers: [ErrorHandlingController],
  providers: [ErrorHandlingService, ErrorHandlingResolver],
  exports: [ErrorHandlingService],
})
export class ErrorHandlingModule {}
