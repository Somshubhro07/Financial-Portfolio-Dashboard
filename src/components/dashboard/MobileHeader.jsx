import React from 'react';
import { HiMenuAlt2 } from "react-icons/hi"; 
import somgLogo from '../../assets/images/logo.png'; 

function MobileHeader({ onMenuClick }) {
    return (
        <div className="sticky top-0 z-20 flex lg:hidden items-center justify-between px-4 py-3 bg-content-bg border-b border-border-color">
            <button
                onClick={onMenuClick}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Open sidebar"
            >
                <HiMenuAlt2 size={24} />
            </button>
             <img src={somgLogo} alt="Somg Logo" className="h-6 w-auto" />

             <div className="w-6"></div>

        </div>
    );
}

export default MobileHeader;