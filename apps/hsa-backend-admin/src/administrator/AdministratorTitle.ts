import { Administrator as TAdministrator } from "../api/administrator/Administrator";

export const ADMINISTRATOR_TITLE_FIELD = "id";

export const AdministratorTitle = (record: TAdministrator): string => {
  return record.id?.toString() || String(record.id);
};
