import { type IOptionLoader, type RecursivePartial, SizeMode } from "tsparticles-engine";
import type { IEmitterSize } from "../Interfaces/IEmitterSize";

/**
 */
export class EmitterSize implements IEmitterSize, IOptionLoader<IEmitterSize> {
    height;
    mode: SizeMode | keyof typeof SizeMode;
    width;

    constructor() {
        this.mode = SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }

    load(data?: RecursivePartial<IEmitterSize>): void {
        if (data === undefined) {
            return;
        }

        if (data.mode !== undefined) {
            this.mode = data.mode;
        }

        if (data.height !== undefined) {
            this.height = data.height;
        }

        if (data.width !== undefined) {
            this.width = data.width;
        }
    }
}
