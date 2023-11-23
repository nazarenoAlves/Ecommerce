import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category
}

const CategoryItems = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        headphones: <HeadphonesIcon size={16}/>,
        monitors: <MonitorIcon size={16}/>,
        keyboards: <KeyboardIcon size={16}/>,
        mousepads: <SquareIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>,
        mouses: <MouseIcon size={16}/>,
    }
    return (  
        <Badge variant="outline" className="flex justify-center py-3 items-center gap-2">
           {categoryIcon[category.slug as keyof typeof categoryIcon]}
           <span className="text-cs font-bold">{category.name}</span>
        </Badge>
    );
}
 
export default CategoryItems;