export interface User {
    _id: string;
    nickname: string;
    email: string;
    verified_email?: boolean;
    avatar?: string;
    banner?: string;
    gender?: string;
    birthday?: Date;
    country?: string;
    biography?: string;
    knowledgeAreas?: string[];
    facebookLink?: string;
    twitterLink?: string;
    githubLink?: string;
    linkedinLink?: string;
};

export interface UserResponse {
    message: string;
    user: User
};

export interface ImageEditReponse {
    message: string;
    picture: {
        url: string;
        size: number;
        created_at: Date;
        mimeType: string;
    }
};
