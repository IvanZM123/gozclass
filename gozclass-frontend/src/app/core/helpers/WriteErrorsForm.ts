import { rules } from "../config/rules";

export class WriteErrorsForm {
    validate(inputs: HTMLInputElement[]): void {
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                const { type } = input.dataset;
                if (!type) return;

                const result: string | boolean = rules[type](input.value);
                this.writeError(input, result);
            });

            input.addEventListener("blur", () => {
                const { type } = input.dataset;
                if (!type) return;

                const result: string | boolean = rules[type](input.value);
                this.writeError(input, result);
            });
        });
    }

    writeError(input: HTMLInputElement, result: string | boolean): void {
        const { parentElement } = input;
        const small = parentElement.nextSibling as HTMLElement;
        small.classList.remove("text-muted");
        
        if (typeof result !== "string") {
            parentElement.classList.remove("error");
            small.classList.remove("text-danger");

            parentElement.classList.add("success");
            small.classList.add("text-success");
            small.textContent = "Campo completado";
            return;
        }
        
        small.classList.remove("text-success");
        parentElement.classList.remove("success");

        parentElement.classList.add("error");
        small.textContent = result;
        small.classList.add("text-danger");
    }
}
