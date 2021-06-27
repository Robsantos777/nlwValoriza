import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

class ListTagsServices {
  async execute(){
      const tagsRepositories = getCustomRepository(TagsRepositories);

      const tags = await tagsRepositories.find();

      return classToPlain(tags);
  }
}

export {ListTagsServices}