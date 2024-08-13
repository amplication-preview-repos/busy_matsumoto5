import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdministratorServiceBase } from "./base/administrator.service.base";

@Injectable()
export class AdministratorService extends AdministratorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
