import { Batch } from "./batches";

export type StudentProfile = {
    student_id: string;
    student_photo?: string;
    father_name?: string;
    mother_name?: string;
    father_phone_number?: string;
    mother_phone_number?: string;
    siblings_phone_number?: string;
    personal_number?: string;
    age?: number;
    school_name?: string;
    district?: string;
    state?: string;
    address?: string;
    blood_group?: string;
}
export type Student = {
    id: number;
    batch_id: number;
    student_code: string;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: Date;
    gender: string;
    student_profile?: StudentProfile;
    batch?: Batch;
}

export type CreateStudent = Omit<Student, 'id' | 'batch'>;

export type UpdateStudent = Omit<Student, 'id' | 'batch' | 'student_profile'> & {
    student_profile?: Omit<StudentProfile, 'student_photo'>;
};