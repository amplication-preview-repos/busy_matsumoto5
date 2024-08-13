import { Module } from "@nestjs/common";
import { AccessControlService } from "./accesscontrol.service";
import { AccessControlController } from "./accesscontrol.controller";
import { AccessControlResolver } from "./accesscontrol.resolver";

@Module({
  controllers: [AccessControlController],
  providers: [AccessControlService, AccessControlResolver],
  exports: [AccessControlService],
})
export class AccessControlModule {}
