import * as graphql from "@nestjs/graphql";
import { DataAnalyticsService } from "./dataanalytics.service";

export class DataAnalyticsResolver {
  constructor(protected readonly service: DataAnalyticsService) {}
}
