import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ErrorHandlingService } from "./errorhandling.service";

@swagger.ApiTags("errorHandlings")
@common.Controller("errorHandlings")
export class ErrorHandlingController {
  constructor(protected readonly service: ErrorHandlingService) {}
}
