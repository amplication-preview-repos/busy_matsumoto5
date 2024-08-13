import { Injectable } from "@nestjs/common";
import { ActivityLogResponse } from "../userManagement/ActivityLogResponse";
import { RequestPasswordResetInput } from "../userManagement/RequestPasswordResetInput";
import { ResetPasswordInput } from "../userManagement/ResetPasswordInput";
import { Setup2FaResponse } from "../userManagement/Setup2FaResponse";
import { Verify2FaInput } from "../userManagement/Verify2FaInput";

@Injectable()
export class UserManagementService {
  constructor() {}
  async DeleteAccount(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchActivityLogs(args: string): Promise<ActivityLogResponse[]> {
    throw new Error("Not implemented");
  }
  async RequestPasswordReset(args: RequestPasswordResetInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ResetPassword(args: ResetPasswordInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async Setup_2Fa(args: string): Promise<Setup2FaResponse> {
    throw new Error("Not implemented");
  }
  async Verify_2Fa(args: Verify2FaInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
