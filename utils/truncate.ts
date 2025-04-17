// utils/truncate.ts

export function truncate(title: string, maxLength: number = 45): string {
    return title.length > maxLength ? title.slice(0, maxLength - 1) + "…" : title;
  }
  