export type Video={
    id: number;
    video_title: string;
    video_link: string;
    video_description: string;
    video_type: string;
    batch_id: number;
}

export type videoCreate = Omit<Video, 'id'>;