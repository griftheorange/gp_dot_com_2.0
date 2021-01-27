import Divider from '../Divider'

export default function(props){
    return (
        <div className='features-wrapper'>
            <h2>Features</h2>
            <Divider faded/>
            {Object.entries(props.featuresBlock).map((entry) => {
                const [key, value] = entry;
                return (
                    <div className="feature-card">
                        <div className='feature-details'>
                            <h3>{key}</h3>
                            <Divider topSpacing="1em" bottomSpacing="1em" faded/>
                            {value.details.map((detail) => {
                                return (
                                    <p>-{detail}</p>
                                )
                            })}
                        </div>
                        <div className='feature-animation'>
                            {value.animation ? <img src={value.animation}/> : null}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}