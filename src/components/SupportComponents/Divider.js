function getStyle(props){
    let style = {}
    if(props.bottomSpacing){
        style["marginBottom"] = props.bottomSpacing
    }
    if(props.topSpacing){
        style["marginTop"] = props.topSpacing
    }
    return style
}

export default function(props){
    return (
        <div className={props.faded ? "divider light" : "divider"} style={getStyle(props)}></div>
    )
}