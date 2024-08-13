import { Module } from "@nestjs/common";
import { DataAnalyticsService } from "./dataanalytics.service";
import { DataAnalyticsController } from "./dataanalytics.controller";
import { DataAnalyticsResolver } from "./dataanalytics.resolver";

@Module({
  controllers: [DataAnalyticsController],
  providers: [DataAnalyticsService, DataAnalyticsResolver],
  exports: [DataAnalyticsService],
})
export class DataAnalyticsModule {}
