import {Icon} from 'semantic-ui-react'

export default function(props){
    return (
        <div className="card-container">
            <div className="card-sizer-centerer">
                {props.label ? (
                    <div className="card-label" onClick={props.history ? () => {props.history.push('/')} : null}> 
                        <h3>{props.label.toLowerCase() == "home" ? (<Icon name="home"/>) : props.label}</h3>
                    </div>
                ) : null}
                <div className="card">
                    {props.children}
                </div>
            </div>
        </div>
    )
}