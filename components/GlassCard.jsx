import { cn } from "@/lib/utils";

const GlassCard = ({ children, className, hoverEffect = true }) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
                "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                hoverEffect && "transition-all duration-300 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)] hover:-translate-y-1",
                className
            )}
        >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default GlassCard;
