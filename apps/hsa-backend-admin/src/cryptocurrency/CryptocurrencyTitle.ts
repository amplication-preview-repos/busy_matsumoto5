import { Cryptocurrency as TCryptocurrency } from "../api/cryptocurrency/Cryptocurrency";

export const CRYPTOCURRENCY_TITLE_FIELD = "id";

export const CryptocurrencyTitle = (record: TCryptocurrency): string => {
  return record.id?.toString() || String(record.id);
};
