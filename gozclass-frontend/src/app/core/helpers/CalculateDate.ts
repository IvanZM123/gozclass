// Imports modules.
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class CalculateDate {
    calculate(currentTime: number, eventTime: number) {
        const timeLeft: number = eventTime - currentTime;

        let seconds: number = Math.floor(timeLeft / 1000);
        let minutes: number = Math.floor(seconds / 60);
        let hours: number = Math.floor(minutes / 60);
        let days: number = Math.floor(hours / 24);
    
        hours %= 60;
        minutes %= 60;
        seconds %= 60;

        return { days, hours, minutes, seconds };
    }

    addZero(number: number): string {
        return number < 10  ? `0${ number }` : `${ number }`;
    }
}
