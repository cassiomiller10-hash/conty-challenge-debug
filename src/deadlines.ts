const saoPauloDay = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo" });

export function approvedCivilDay(approvedAt: string): string {
  return saoPauloDay.format(new Date(approvedAt));
}

export function isPastDeadline(approvedAt: string, deadlineDate: string): boolean {
  return approvedCivilDay(approvedAt) > deadlineDate;
}
