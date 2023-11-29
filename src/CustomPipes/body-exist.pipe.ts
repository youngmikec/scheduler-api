import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class BodyExistsPipe implements PipeTransform {
    transform(value: any){
        if(!value){
            throw new BadRequestException('Body is missing')
        }
        return value;
    }
}