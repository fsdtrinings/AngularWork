import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"mypipe123"})
export class MyPipe implements PipeTransform
{
    transform(value:any)
    {
        return "["+value+"]";
    }
}