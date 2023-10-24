import { ICategory } from '@/types/category.interface';

export const getAllChildCategories = (category: ICategory): ICategory[] => {
  const categories: ICategory[] = [];

  function addCategoryAndDescendants(category: ICategory) {
    categories.push(category);

    if (category.childrens && category.childrens.length > 0) {
      category.childrens.forEach(childCategory => {
        addCategoryAndDescendants(childCategory);
      });
    }
  }

  if (category.childrens && category.childrens.length > 0) {
    category.childrens.forEach(childCategory => {
      addCategoryAndDescendants(childCategory);
    });
  }

  return categories;
};
