export interface ContentCreator {
    _id: string;
    name: string;
    profession?: string;
    avatar?: string;
    socialMedia: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface ContentCreatorListRes {
    contentCreators: ContentCreator[];
}
