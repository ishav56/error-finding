// named import 
// import {Restraurantcard} from './restrauntcred'

const Shimmer = () => {
    return (
        <div className="card">
            {Array(20).fill(" ").map((e,index) => <div key={index}className="shimmer"></div>)}
        </div>
    )
}
export default Shimmer