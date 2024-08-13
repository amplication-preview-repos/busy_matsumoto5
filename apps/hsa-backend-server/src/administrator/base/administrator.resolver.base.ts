/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Administrator } from "./Administrator";
import { AdministratorCountArgs } from "./AdministratorCountArgs";
import { AdministratorFindManyArgs } from "./AdministratorFindManyArgs";
import { AdministratorFindUniqueArgs } from "./AdministratorFindUniqueArgs";
import { DeleteAdministratorArgs } from "./DeleteAdministratorArgs";
import { AdministratorService } from "../administrator.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Administrator)
export class AdministratorResolverBase {
  constructor(
    protected readonly service: AdministratorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Administrator",
    action: "read",
    possession: "any",
  })
  async _administratorsMeta(
    @graphql.Args() args: AdministratorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Administrator])
  @nestAccessControl.UseRoles({
    resource: "Administrator",
    action: "read",
    possession: "any",
  })
  async administrators(
    @graphql.Args() args: AdministratorFindManyArgs
  ): Promise<Administrator[]> {
    return this.service.administrators(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Administrator, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Administrator",
    action: "read",
    possession: "own",
  })
  async administrator(
    @graphql.Args() args: AdministratorFindUniqueArgs
  ): Promise<Administrator | null> {
    const result = await this.service.administrator(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Administrator)
  @nestAccessControl.UseRoles({
    resource: "Administrator",
    action: "delete",
    possession: "any",
  })
  async deleteAdministrator(
    @graphql.Args() args: DeleteAdministratorArgs
  ): Promise<Administrator | null> {
    try {
      return await this.service.deleteAdministrator(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
