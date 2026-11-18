export const LEAD_STATUSES = ["new", "in_progress", "done"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const STATUS_FILTERS = ["all", ...LEAD_STATUSES] as const;
export type StatusFilter = (typeof STATUS_FILTERS)[number];

export const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  in_progress: "In progress",
  done: "Done",
};

export type Lead = {
  id: string;
  companyName: string;
  contactName: string;
  requestText: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
};
