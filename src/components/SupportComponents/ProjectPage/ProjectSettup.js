import Divider from '../../SupportComponents/Divider'

export default function(props){
    return (
        <div className="settup">
            <h3>Settup</h3>
            <Divider topSpacing="1em" bottomSpacing="1em" faded/>
            {Object.entries(props.settupBlock).map((arr) => {
                let [key, value] = arr;
                console.log(value)
                return (
                    <>
                    <h4>{key}:</h4>
                    <ol>
                        {value.steps.map((item) => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ol>
                    </>
                )
            })}
        </div>
    )
}