import React from 'react'
import Slider from '@mui/material/Slider';

const Slide = ({valuetext,defaultValue,step,min,max,handlevalue}) => {
    return (
        <>
            <label>{valuetext}</label>
            <Slider
                aria-label={valuetext ? String(valuetext) : 'Default Label'}
                defaultValue={defaultValue}
                valueLabelDisplay="auto"
                step={step}
                min={min}
                max={max}
                onChange={(e, value) => handlevalue(value)}
            />
        </>
    )
}

export default Slide
