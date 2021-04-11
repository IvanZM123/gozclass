// Import module.
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class GeneratePicture {
    avatar(name: string, size: number): string {
        return `https://ui-avatars.com/api/?name=${ name }&size=${ size }rounded=true&background=random`;
    }
}
