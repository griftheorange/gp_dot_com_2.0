export default function(props){
    return (
        <div className="card-container">
            <div className="card-sizer-centerer">
                {props.label ? (
                    <div className="card-label">
                        <h3>{props.label}</h3>
                    </div>
                ) : null}
                <div className="card">
                    {props.children}
                </div>
            </div>
        </div>
    )
}