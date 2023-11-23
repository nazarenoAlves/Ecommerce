import { prismaClient } from "@/lib/prisma";
import CategoryItems from "./category-item";

const Categories = async () => {
    const categories = await prismaClient.category.findMany({});
    return ( 
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
        </div>
     );
}
 
export default Categories;