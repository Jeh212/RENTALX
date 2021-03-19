import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExistSpecification = this.specificationRepository.findByName(
      name
    );

    if (alreadyExistSpecification) {
      throw new Error("Specification already exists");
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
