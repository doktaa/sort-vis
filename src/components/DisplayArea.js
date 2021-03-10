import '../App.css';
import BarContainer from './BarContainer.js'

const DisplayArea = (props) => {

    let totalBars = props.total

    return (
        <div className="graphContainer">
            {props.array.map(num => {
                return <BarContainer num={num.value} total={totalBars} color={num.color}/>
            })}

        </div>



    )

}

export default DisplayArea