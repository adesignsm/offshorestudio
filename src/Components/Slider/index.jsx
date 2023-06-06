import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "./index.css";

export const SliderItem = ({ children, width}) => {
    return (
        <div className="slider-item" style={{ width: width }}>
            {children}
        </div>
    )
}

const Slider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children);
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <>
            <div {...handlers} className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: "100%"});
                    })}
                </div>
            </div>
        </>
    )
}

export default Slider;