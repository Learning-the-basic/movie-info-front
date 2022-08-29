import { React, useState } from "react";

function MoreButton() {
    const [closedPlot, setClosedPlot] = useState(false);
    const handleMorePlot = () => {
      setClosedPlot(closedPlot => !closedPlot);
    }
    return (
        <div>
            <button className={closedPlot ? "moreButtonOff" : "moreButtonOn"}
                onClick={handleMorePlot}>
                {"더보기"}
            </button>
            <button className={closedPlot ? "moreButtonOn" : "moreButtonOff"}
                onClick={handleMorePlot}>
                {"닫기"}
            </button>
        </div>
    )

}

export default MoreButton;