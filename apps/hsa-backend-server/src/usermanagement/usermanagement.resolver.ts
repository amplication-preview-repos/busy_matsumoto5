import * as graphql from "@nestjs/graphql";
import { ActivityLogResponse } from "../userManagement/ActivityLogResponse";
import { RequestPasswordResetInput } from "../userManagement/RequestPasswordResetInput";
import { ResetPasswordInput } from "../userManagement/ResetPasswordInput";
import { Setup2FaResponse } from "../userManagement/Setup2FaResponse";
import { Verify2FaInput } from "../userManagement/Verify2FaInput";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Mutation(() => String)
  async DeleteAccount(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.DeleteAccount(args);
  }

  @graphql.Query(() => [ActivityLogResponse])
  async FetchActivityLogs(
    @graphql.Args("args")
    args: string
  ): Promise<ActivityLogResponse[]> {
    return this.service.FetchActivityLogs(args);
  }

  @graphql.Mutation(() => String)
  async RequestPasswordReset(
    @graphql.Args()
    args: RequestPasswordResetInput
  ): Promise<string> {
    return this.service.RequestPasswordReset(args);
  }

  @graphql.Mutation(() => String)
  async ResetPassword(
    @graphql.Args()
    args: ResetPasswordInput
  ): Promise<string> {
    return this.service.ResetPassword(args);
  }

  @graphql.Mutation(() => Setup2FaResponse)
  async Setup_2Fa(
    @graphql.Args("args")
    args: string
  ): Promise<Setup2FaResponse> {
    return this.service.Setup_2Fa(args);
  }

  @graphql.Mutation(() => String)
  async Verify_2Fa(
    @graphql.Args()
    args: Verify2FaInput
  ): Promise<string> {
    return this.service.Verify_2Fa(args);
  }
}
