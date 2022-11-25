import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "increment"
})
export default class IncrementPipe implements PipeTransform {
    transform(inputData: number, incrementRatio: number, otherBonus: number): number {
        return (1 + incrementRatio + otherBonus) * inputData;
    }
}