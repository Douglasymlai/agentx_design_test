'use client'; // Correctly formatted directive

import './Widget.css'; // Assuming you have a separate CSS file for styles
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

const FloatingWidget: React.FC = () => {
    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-8">
            <div className="icon">🔔</div>
            <div className="icon">⚙️</div>
            <div className="icon">💬</div>
            <Button variant="default" className='transition-all' onClick={() => alert('Full Transition Clicked!')}>Full Transition</Button>
            <Button variant="default" className='transition-none' onClick={() => alert('No Transition Clicked!')}>No Transition</Button>
            <Button variant="default" className='duration-200 ease-in' onClick={() => alert('No Transition Clicked!')}>No Transition</Button>
        </div>
        
    );
};

export default FloatingWidget;
