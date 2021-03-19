import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  public execute({ name, description }: IRequest): void {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error("Already exist");
    }

    const createCategory = this.categoriesRepository.create({
      name,
      description,
    });
    return createCategory;
  }
}

export { CreateCategoryUseCase };
