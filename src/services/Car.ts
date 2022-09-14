import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const result = CarZodSchema.safeParse(obj);
    if (!result.success) {
      throw result.error;
    }
    return this._car.create(obj);
  }

  public async read(obj: ICar):Promise<ICar[]> {
    const result = await this._car.read(obj);
    return result;
  }

  public async readOne(_id: string): Promise<ICar> {
    const result = await this._car.readOne(_id);
    if (!result) throw new Error(ErrorTypes.InvalidMongoId);
    return result;
  }

  public async update(_id: string, obj: ICar): 
  Promise<ICar & { _id: string; }> {
    const parsed = CarZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._car.update(_id, parsed.data);

    if (!updated) {
      throw new Error(ErrorTypes.EntityNotFound);
    }

    return updated as ICar & { _id: string };
  }

  public async delete(_id:string):Promise<ICar> {
    const result = await this._car.delete(_id);
    if (!result) throw new Error(ErrorTypes.EntityNotFound);
    return result;
  }
}

export default CarService;