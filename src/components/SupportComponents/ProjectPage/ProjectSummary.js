import Divider from '../../SupportComponents/Divider'

export default function(props){
    return (
        <div className="summary">
            <h3>Summary</h3>
            <Divider topSpacing="1em" bottomSpacing="1em"/>
            {props.summaryBlock.split("\n").map((paragraph) => {
                return (
                    <p>{paragraph}</p>
                )
            })}
        </div>
    )
}