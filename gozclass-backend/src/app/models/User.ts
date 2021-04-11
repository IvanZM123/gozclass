// Imports models.
import { Timestamp } from "./Timestamp";

export class User extends Timestamp {
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

    constructor(user: User) {
        super();
        this._id = user._id;
        this.nickname = user.nickname;
        this.email = user.email;
        this.gender = user.gender;
        this.birthday = user.birthday;
        this.avatar = user.avatar;
        this.banner = user.banner;
        this.country = user.country;
        this.facebookLink = user.facebookLink;
        this.twitterLink = user.twitterLink;
        this.githubLink = user.githubLink;
        this.linkedinLink = user.linkedinLink;
        this.verified_email = user.verified_email;
        this.biography = user.biography;
        this.knowledgeAreas = user.knowledgeAreas;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;
    }
};
