export type HistoryEntry = {
  id: number;
  url: string;
  title: string;
  lastVisitedAt: string;
};

export type Tab = {
  windowId: number;
  tabId: number;
  url: string;
  title: string;
  location: TabLocation;
};

export type TabLocation = "topApp" | "pinned" | "unpinned";

export type Space = {
  id: string;
  title?: string;
};

export type BookmarkTab = Record<string, string>; // { "url": "title"}
export type UpdateBookmarks = (savedBookmarks: BookmarkTab, tab: Tab) => Promise<void>;
