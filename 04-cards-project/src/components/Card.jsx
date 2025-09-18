import { Bookmark } from 'lucide-react'
const Card = (props) => {

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.brandLogo} alt="nachioooooo" />
                    <button>Save <Bookmark size={10} /> </button>
                </div>
                <div className="center">
                    <h3>{props.company} <span>{props.datePosted}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card