'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { Switch } from '@/components/ui/switch';

type ThemeToggleProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
};

export function ThemeToggle({ checked, onCheckedChange }: ThemeToggleProps) {
    return (
        <div className="flex items-center gap-2">
            {checked ? (
                <BsMoonFill className="text-gray-700" size={18} aria-label="Dark mode" />
            ) : (
                <BsSunFill className="text-yellow-500" size={18} aria-label="Light mode" />
            )}
            <Switch
                checked={checked}
                onCheckedChange={onCheckedChange}
                aria-label="Toggle theme"
            />
        </div>
    );
}
