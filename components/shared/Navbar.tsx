'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/constants';
import { usePathname } from 'next/navigation';


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 sm:px-16",
            isScrolled
                ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
                : "bg-transparent py-4"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                        <span className="font-bold text-white text-lg">KO</span>
                    </div>
                    <span className={cn(
                        "font-bold text-xl transition-colors duration-300",
                        isScrolled ? "text-gray-800 dark:text-white" : "text-gray-800 dark:text-white"
                    )}>
                        KOmmunity
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={cn(
                                "font-medium transition-colors duration-300 hover:text-primary relative group",
                                pathname === item.path ? "text-primary" :
                                    isScrolled ? "text-gray-700 dark:text-gray-200" : "text-gray-800 dark:text-white"
                            )}
                        >
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button>Get Involved</Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className={cn(
                        "md:hidden p-2 rounded-full transition-colors",
                        isScrolled
                            ? "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                            : "text-gray-800 hover:bg-white/20 dark:text-white dark:hover:bg-gray-800/20"
                    )}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-white dark:bg-gray-900 py-4 shadow-lg animate-fade-in">
                    <div className="container mx-auto px-4 flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2 px-4">
                            <Button className="w-full">Get Involved</Button>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};
