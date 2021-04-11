export class Event {
    _id: string;
    name: string;
    members?: string[];
    banned?: string[];
    banner: string;
    description: string;
    created_at?: Date;
    updated_at?: Date;
}
