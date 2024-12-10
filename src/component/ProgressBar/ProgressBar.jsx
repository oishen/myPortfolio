import { useEffect, useRef } from "react";

const ProgressBar = ({ label, percentage }) => {
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.width = `${percentage}%`;
            } else {
                entry.target.style.width = "0"; // Reset when out of view
            }
            });
        },
        { threshold: 0.5 } // Adjust the threshold as needed
        );

        const progressElement = progressRef.current;
        if (progressElement) {
        observer.observe(progressElement);
        }

        return () => {
        if (progressElement) {
            observer.unobserve(progressElement);
        }
        };
    }, [percentage]);

    return (
        <div className="progress-container">
            {/* <span>{label}</span>
            <div className="progress-bar">
            <div className="progress-fill" ref={progressRef} data-percentage={percentage}></div>
            </div>
            <span className="percentage">{percentage}%</span> */}

            <div className="progress-bar">
                <div className="progress-fill bg-warning" ref={progressRef} data-percentage={percentage}></div>
            </div>
            <div className="d-flex justify-content-between">
                <label>{label}</label>
                <p>{percentage}%</p>
            </div>
        </div>
    );
};

export default ProgressBar;
