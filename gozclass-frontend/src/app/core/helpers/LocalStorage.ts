// Imports modules.
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LocalStorage<Tval> {
    readonly TEAMANGULAR15_ACCESS_TOKEN: string = "TEAMANGULAR15_TOKENS_KEY";
    readonly TEAMANGULAR15_USER: string = "TEAMANGULAR15_USER_KEY";

    insert(key: string, val: Tval): void {
        localStorage.setItem(key, JSON.stringify(val));
    }

    get(key: string): Tval {
        const data: string = localStorage.getItem(key);
        return JSON.parse(data);
    }

    clear(): void {
        localStorage.clear();
    }
}
