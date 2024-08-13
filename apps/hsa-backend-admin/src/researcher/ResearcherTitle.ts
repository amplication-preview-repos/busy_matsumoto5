import { Researcher as TResearcher } from "../api/researcher/Researcher";

export const RESEARCHER_TITLE_FIELD = "id";

export const ResearcherTitle = (record: TResearcher): string => {
  return record.id?.toString() || String(record.id);
};
