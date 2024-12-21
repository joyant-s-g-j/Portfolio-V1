export const SectionHeader = ({
    title,
    description
}: {
    title: string;
    description: string;
}) => {
    return (
        <div>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p className="text-sm text-white/60">{description}</p>
            <hr className="border-t-2 border-gray-500 w-[calc(100%-5rem)] my-3 sm:w-auto" />
        </div>
    );
}
    
