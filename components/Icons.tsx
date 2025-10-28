
import React from 'react';

type IconProps = {
  className?: string;
};

export const BrainCircuitIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.993 1.004"/>
        <path d="M12 5a3 3 0 1 0 5.993 1.004"/>
        <path d="M12 5a3 3 0 1 1-1.004 5.993"/>
        <path d="M12 5a3 3 0 1 1 1.004 5.993"/>
        <path d="M12 19a3 3 0 1 0-5.993-1.004"/>
        <path d="M12 19a3 3 0 1 0 5.993-1.004"/>
        <path d="M12 19a3 3 0 1 1-1.004-5.993"/>
        <path d="M12 19a3 3 0 1 1 1.004-5.993"/>
        <path d="M6 12a3 3 0 1 0-1.004-5.993"/>
        <path d="M6 12a3 3 0 1 0 1.004-5.993"/>
        <path d="M18 12a3 3 0 1 0-1.004-5.993"/>
        <path d="M18 12a3 3 0 1 0 1.004-5.993"/>
        <path d="M6 12a3 3 0 1 0-1.004 5.993"/>
        <path d="M6 12a3 3 0 1 0 1.004 5.993"/>
        <path d="M18 12a3 3 0 1 0-1.004 5.993"/>
        <path d="M18 12a3 3 0 1 0 1.004 5.993"/>
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);
