export interface Experience {
  title: string;
  description?: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  listItems?: string[];
  isListing: boolean;
}
