import * as graphql from "@nestjs/graphql";
import { ErrorHandlingService } from "./errorhandling.service";

export class ErrorHandlingResolver {
  constructor(protected readonly service: ErrorHandlingService) {}
}
