import Divider from '../Divider'

export default function(props){
    return (
        <div className="components-block-wrapper">
            <h2>File Trees</h2>
            <Divider bottomSpacing="1.5em"/>
            {Object.entries(props.componentsBlock).map((entry) => {
                const [key, value] = entry;
                return (
                    <div className="component-tree-card">
                        <h3>{key}</h3>
                        <Divider faded/>
                        <img src={value}/>
                    </div>
                )
            })}
        </div>
    )
}