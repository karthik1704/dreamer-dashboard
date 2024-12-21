import { Batch } from "./batches";


export  type LiveClassType = {
    id: number;
    class_name: string;
    batch_id: number;
    class_link: string;
    start_time: string;
    end_time: string;
    batch: Batch;
} 

export type LiveClassCreate = Omit<LiveClassType, 'id' | 'batch'>;