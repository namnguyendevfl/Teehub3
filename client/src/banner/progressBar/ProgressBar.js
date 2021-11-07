import React from "react"
import { Blue, Red, Background } from "../../utils/color/color"
import { timer } from "../../utils/data/timer"

// export default function ProgressBar({progress, isTimerRunning}) {
export default function ProgressBar({session, isTimerRunning}) {
    let background
    session && timer.getSetTimer()
      ? isTimerRunning
        ? background = Blue()
        : background = Red()
      // : background = Background()
      : background = "white"
    const progress = session?.timeElapsedPercent
    return  <>
      <div>
        <div className="progress px-3" style={{ height: "13px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            style= {{width: "100%" }}
            aria-valuenow= {progress} // Increase aria-valuenow as elapsed time increases
            style={{ width: `${progress}%`, borderRadius:"5px", background:`${background}` }} // Increase width % as elapsed time increases 
          > </div> 
        </div>
      </div>
      </>
  }