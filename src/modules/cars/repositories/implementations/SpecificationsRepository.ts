import { Specification } from "../../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }
  findByName(name: string): Specification {
    const findName = this.specification.find(
      (specification) => specification.name === name
    );
    return findName;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }
}
export default SpecificationsRepository;
