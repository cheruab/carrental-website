import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }


  public async deleteCar(id: string): Promise<Car | null> {
    // Find the car by ID
    const carToDelete = await this.carRepository.findOne({
      where: { id },
    });
    if (!carToDelete) {
      // Handle the case where the car is not found
      throw new NotFoundException(`Car with ID ${id} not found`);
    }

    // Delete the car only if it is found
    await this.carRepository.remove(carToDelete);

    return carToDelete; // Return the deleted car
  }
}