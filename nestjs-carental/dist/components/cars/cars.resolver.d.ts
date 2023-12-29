import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
    deleteCar(id: string): Promise<Car | null>;
}
