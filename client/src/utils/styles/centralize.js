import { GetHeight, GetWidth } from "./dimensions";

export function Centralize(height, top, width, left) {
    const { viewHeight } = GetHeight(height, top);
    const { viewWidth } = GetWidth(width, left);
    const topHeight = (viewHeight > (height + 2*top)) ? (viewHeight - height)/2 : top;
    const offsetElementHeight = height + 2*topHeight;
    const leftWidth = (viewWidth > (width + 2*left)) ? (viewWidth - width)/2 : left
    const offsetElementWidth = width + 2*leftWidth 
    //centralizing an element
    const bgStyle = {   
        position: "fixed",
        height: `${viewHeight}px`,
        width: `${viewWidth}px`,
        overflow: "auto"
    };
    const elementStyle = {
        position:"absolute",
        top:`${topHeight}px`,
        left: `${leftWidth}px`
    };
    const offsetElementStyle = {
        height:`${offsetElementHeight}px`, 
        width: `${offsetElementWidth}px`   
    }
    return {
        bgStyle: bgStyle,
        elementStyle: elementStyle,    
        offsetElementStyle: offsetElementStyle,
    }   
}