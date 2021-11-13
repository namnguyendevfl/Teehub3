import React, { useState} from "react";

export function GetHeight(elementHeight, top) {
    const [viewHeight, setViewHeight] = useState(window.innerHeight);
    const handleResize = () => {
        setViewHeight(() => window.innerHeight)
    }
    window.addEventListener('resize', handleResize);
    //centralizing an element
    const topHeight = (viewHeight > (elementHeight + 2*top)) ? (viewHeight - elementHeight)/2 : top;
    const offsetElementHeight = elementHeight + 2*topHeight;
    const results = {
        viewHeight: viewHeight,
        centralizeElement: {
            top: topHeight,
            offsetElementHeight: offsetElementHeight,
        }
    }  
    return results
}

export function GetWidth(elementWidth, left) {
    const initialWidth = window.innerWidth
    const [viewWidth, setViewWidth] = useState(initialWidth);
    const handleResize = () => {
        setViewWidth(() => window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    //centralizing an element
    const leftWidth = (viewWidth > (elementWidth + 2*left)) ? (viewWidth - elementWidth)/2 : left
    const offsetElementWidth = elementWidth + 2*leftWidth 
    const results = {
        viewWidth: viewWidth,
        centralizeElement: {
            left: leftWidth,
            offsetElementWidth: offsetElementWidth
        }
    }  
    return results
}

export function CentralizeElement(height, top, width, left) {
    const h = GetHeight(height, top);
    const w = GetWidth(width, left);
    //centralizing an element
    const bgStyle = {   
        position: "fixed",
        height: `${h.viewHeight}px`,
        width: `${w.viewWidth}px`,
        overflow: "auto"
    };
    const elementStyle = {
        position:"absolute",
        top:`${h.centralizeElement.top}px`,
        left: `${w.centralizeElement.left}px`
    };
    const results = {
        bgStyle: bgStyle,
        offsetElementHeight: h.centralizeElement.offsetElementHeight,
        elementStyle: elementStyle,
        offsetElementWidth: w.centralizeElement.offsetElementWidth,
    }  
    return results    
}

