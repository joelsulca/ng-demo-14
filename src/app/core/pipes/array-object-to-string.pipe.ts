import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'arrayObjectToString'
})
export class ArrayObjectToStringPipe implements PipeTransform {

  transform(data: [], propertyName: string) {
    return data.map((value: any) => value[propertyName]);
  }
}