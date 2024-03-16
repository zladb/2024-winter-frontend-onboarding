import React from "react";

const RenderDays = () => {
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    // for each나 map사용하기
    for (let i=0; i<7; i++){
        days.push(
            <div className="week-day" key={i}>
                {date[i]}
            </div>
        );
    }

    return <div className="weeks">{days}</div>
};

export default RenderDays;