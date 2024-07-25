import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as Uuidv4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  public products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    //!Hacemos la desestructuracion de las propiedades del dto para asignarlas al nuevo producto
    const {name, description, price} = createProductDto
    const newProduct: Product = new Product(
      Uuidv4(),
      name,
      description,
      price
    )
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const product = this.products.find(product => product.id === id)
    if(!product) throw new NotFoundException(`The product with id ${id} not found`)
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const {id:_, name, description, price } = updateProductDto;
    const product = this.findOne(id);
    product.updateWith({name, description, price})
    return product;
  }

  remove(id: string) {
    const product = this.findOne(id);
    this.products = this.products.filter(product => product.id != id);
    return product;
  }
}
