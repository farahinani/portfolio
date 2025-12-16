import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const OverlayHover = ({ href }: {
    href: string;
}) => {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <a
                href={href}
                target="_blank"
                className="bg-white text-gray-950 px-6 h-12 rounded-xl font-semibold inline-flex items-center gap-2"
            >
                Visit Live Site
                <ArrowUpRightIcon className="size-4" />
            </a>
        </div>
    )
}