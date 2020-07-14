import Customer from '@modules/customers/infra/typeorm/entities/Customer';

export default interface ICreateProductDTO {
  name: string;
  price: number;
  quantity: number;
}
