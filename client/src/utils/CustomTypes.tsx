export type Shelf = {
  id: string;
  name: string;
  noteCount: number;
  isLocked?: boolean;
  createdAt: Date;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  shelfId: string;
  wordCount: number;
  tags: string[];
  isPinned: boolean;
  formatting?: {
    font?: string;
    color?: string;
    highlight?: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
