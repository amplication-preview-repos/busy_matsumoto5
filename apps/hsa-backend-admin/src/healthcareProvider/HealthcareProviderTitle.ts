import { HealthcareProvider as THealthcareProvider } from "../api/healthcareProvider/HealthcareProvider";

export const HEALTHCAREPROVIDER_TITLE_FIELD = "id";

export const HealthcareProviderTitle = (
  record: THealthcareProvider
): string => {
  return record.id?.toString() || String(record.id);
};
