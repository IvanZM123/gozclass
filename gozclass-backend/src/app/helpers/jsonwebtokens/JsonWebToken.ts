// Imports interfaces.
import { User } from "../../models/User";
import { IGenerateToken, IVerifyToken, PayloadJWT } from "./interfaces/jwt.interfaces";

export class JsonWebToken {
    generate(payload: PayloadJWT<User>, feature: IGenerateToken<User>) {
        return feature.generate(payload);
    }

    verify(token: string, feature: IVerifyToken<User>) {
        return feature.verify(token);
    }
};
