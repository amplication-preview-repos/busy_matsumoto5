import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataAnalyticsService } from "./dataanalytics.service";

@swagger.ApiTags("dataAnalytics")
@common.Controller("dataAnalytics")
export class DataAnalyticsController {
  constructor(protected readonly service: DataAnalyticsService) {}
}
