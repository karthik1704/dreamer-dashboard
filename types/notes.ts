export type Note = {
    id: number;
    note: string;
    note_link: string;
    note_description: string;
    batch_id: number;
};

export type CreateNote = Omit<Note, 'id'>;
