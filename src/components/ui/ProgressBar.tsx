import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ProgressBarProps {
    progress: number; // 0 to 100
    className?: string;
    color?: string;
}

export const ProgressBar = ({ progress, className, color = "bg-primary" }: ProgressBarProps) => {
    return (
        <div className={cn("h-2 w-full bg-white/10 rounded-full overflow-hidden", className)}>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={cn("h-full rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]", color)}
            />
        </div>
    );
};
