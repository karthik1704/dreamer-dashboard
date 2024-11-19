export type Batch = {
    id: number;
    batch_name: string;
    batch_code: string;
    mode: string;
    target: string;
    board: string;
}

export type BatchCreate = Omit<Batch, 'id'>;