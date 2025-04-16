import StarIcon from "@/assets/icons/star.svg"
import { twMerge } from "tailwind-merge";
export const CardHeader = ({ title, description, className, imageUrl} : {
    title:string; 
    description: string;
    className?: string;
    imageUrl?: string;
}) => {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className='inline-flex items-center gap-2'>
              <StarIcon className="text-emerald-500 size-8" />
              <h1 className='text-xl font-semibold'>{title}</h1>
            </div>
            {imageUrl && (<img src={imageUrl} alt="Card Image" className='w-full sm:h-[276px] h-fit object-contain' />)}
            <p className='grid-subtext text-sm text-white/60 mt-2'>
                {description}
            </p>
        </div>
    )
}