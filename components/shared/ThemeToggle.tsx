'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';

type ThemeToggleProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
};

export function ThemeToggle({ checked, onCheckedChange }: ThemeToggleProps) {
    return (
        <button
            onClick={() => onCheckedChange(!checked)}
            className="p-2 rounded-full transition-colors hover:bg-purple-200 dark:hover:bg-gray-700 cursor-pointer"
            aria-label="Toggle theme"
        >
            {checked ? (
                <BsMoonFill className="text-gray-700 dark:text-gray-200" size={20} />
            ) : (
                <BsSunFill className="text-yellow-500" size={20} />
            )}
        </button>
    );
}
