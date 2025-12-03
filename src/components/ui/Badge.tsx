import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'gold';
}

export const Badge = ({ className, variant = 'default', ...props }: BadgeProps) => {
    const variants = {
        default: "bg-white/10 text-text-secondary",
        success: "bg-success/20 text-success border border-success/20",
        warning: "bg-yellow-500/20 text-yellow-500 border border-yellow-500/20",
        gold: "bg-primary/20 text-primary border border-primary/20"
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};
