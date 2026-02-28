import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });

  
  }

  
  @Mutation(() => Car, { nullable: true })
  async deleteCar(@Args('id') id: string): Promise<Car | null> {
    try {
      const deletedCar = await this.carsService.deleteCar(id);
      return deletedCar;
    } catch (error) {
      // Handle errors or return null if needed
      return null;
    }
  }}