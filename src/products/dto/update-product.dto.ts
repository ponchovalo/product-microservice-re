import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsString, IsUUID, isUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {


    @IsString()
    @IsUUID()
    @IsOptional()
    id?: string;
}
