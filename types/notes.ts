export type Note = {
    id: number;
    note: string;
    note_link: string;
    category_id: number;
    note_description: string;
    batch_id: number;
};

export type CreateNote = Omit<Note, 'id'>;


export type NoteCategory = {
    id: number;
    category_name: string;
    parent_id: number | null;
    batch_id: number ;
    parent: NoteCategory;
    children: NoteCategory[];
};

export type CreateNoteCategory = Omit<NoteCategory, 'id' | 'parent'|'children'>;