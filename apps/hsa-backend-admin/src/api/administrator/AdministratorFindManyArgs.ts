import { AdministratorWhereInput } from "./AdministratorWhereInput";
import { AdministratorOrderByInput } from "./AdministratorOrderByInput";

export type AdministratorFindManyArgs = {
  where?: AdministratorWhereInput;
  orderBy?: Array<AdministratorOrderByInput>;
  skip?: number;
  take?: number;
};
