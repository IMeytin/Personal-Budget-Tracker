import { useState } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const max = 100;

    const increaseProgress = () => {
        setProgress(prev => (prev < max ? prev+1 : max))
    }
    return ( 
        <div>
            <div className="progress-container">
                <div className="progress-bar" style={{width: `${(progress / max)* 100}%`}}></div>
            </div>
            <button onClick={increaseProgress}>CLick</button>
        </div>
     );
}

export default ProgressBar;