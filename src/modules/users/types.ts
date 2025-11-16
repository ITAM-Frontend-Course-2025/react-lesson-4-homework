export type User = {
    id: string;
    name: string;
    role: 'student' | 'mentor';
    favouriteModule: string;
    info: string;

    // Эти поля было бы уместнее вынести в отдельную сущность (тип)
    homeworkName?: string;
    homeworkDescription?: string;
    homeworkStatus?: 'complete' | 'incomplete';
}

export type UserId = string
