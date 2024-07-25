import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    name: string;

    @IsString()
    @IsOptional() //!Propiedad opcional
    description?: string;

    @IsNumber()
    @Type(()=> Number) //!Transformamos lo que este llegando a number
    price: number;

}
