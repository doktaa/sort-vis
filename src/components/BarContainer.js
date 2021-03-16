const BarContainer = (props) => {

    const barContainerStyle = {
        width: `${100/props.total}%`
        // width: `10%`
    }

    const barStyle = {
        height: `${props.num}%`,
        backgroundColor: props.color
    }
    
    return (
        <div className="barContainer" style={barContainerStyle}>
            <div className="bar" style={barStyle}></div> {/*bar*/}

            {/* <h2 className="barLabel">{props.num}</h2> */}
        </div>
    )
}

export default BarContainer