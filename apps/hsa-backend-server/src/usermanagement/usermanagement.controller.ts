import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { Verify2FaInput } from "../userManagement/Verify2FaInput";
import { ActivityLogResponse } from "../userManagement/ActivityLogResponse";
import { Setup2FaResponse } from "../userManagement/Setup2FaResponse";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Delete("/api/users/delete-account")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteAccount(
    @common.Body()
    body: Verify2FaInput
  ): Promise<string> {
        return this.service.DeleteAccount(body);
      }

  @common.Get("/api/users/activity-log")
  @swagger.ApiOkResponse({
    type: ActivityLogResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchActivityLogs(
    @common.Body()
    body: Verify2FaInput
  ): Promise<ActivityLogResponse[]> {
        return this.service.FetchActivityLogs(body);
      }

  @common.Post("/api/users/request-password-reset")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RequestPasswordReset(
    @common.Body()
    body: Verify2FaInput
  ): Promise<string> {
        return this.service.RequestPasswordReset(body);
      }

  @common.Post("/api/users/reset-password")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ResetPassword(
    @common.Body()
    body: Verify2FaInput
  ): Promise<string> {
        return this.service.ResetPassword(body);
      }

  @common.Post("/api/users/setup-2fa")
  @swagger.ApiOkResponse({
    type: Setup2FaResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Setup_2Fa(
    @common.Body()
    body: Verify2FaInput
  ): Promise<Setup2FaResponse> {
        return this.service.Setup_2Fa(body);
      }

  @common.Post("/api/users/verify-2fa")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Verify_2Fa(
    @common.Body()
    body: Verify2FaInput
  ): Promise<string> {
        return this.service.Verify_2Fa(body);
      }
}
