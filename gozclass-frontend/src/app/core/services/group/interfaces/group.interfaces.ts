import { User } from "../../user/interfaces/user.interfaces";

export interface Group {
    _id: string;
    banner: string;
    name: string;
    members?: User[];
    tag: { text: string; color: string };
    description?: string;
    created_at?: Date;
    updated_at?: Date;
}
