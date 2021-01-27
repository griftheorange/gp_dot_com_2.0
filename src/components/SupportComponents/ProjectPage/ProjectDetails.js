import Divider from '../Divider'

export default function(props){
    return (
        <div className="description">
            <h2 className="title">{props.detailsBlock.title}</h2>
            <h3 className="subtitle">{props.detailsBlock.description}</h3>
            {props.detailsBlock.frontendLink ? <h4>Frontend - <a href={props.detailsBlock.frontendLink} target="_blank">Github</a></h4> : null}
            {props.detailsBlock.backendLink ? <h4>Backend - <a href={props.detailsBlock.backendLink} target="_blank">Github</a></h4> : null}
            {props.detailsBlock.repo ? <h4>Repo - <a href={props.detailsBlock.repo} target="_blank">Github</a></h4> : null}
            {props.detailsBlock.videoDemo ? <h4><a href={props.detailsBlock.videoDemo} target="_blank">Demo Video</a></h4> : null}
            {props.detailsBlock.blogArticle ? <h4><a href={props.detailsBlock.blogArticle} target="_blank">Blog Article</a></h4> : null}
            <Divider topSpacing='1em'/>
            <div className='devtools-wrapper'>
                <h3>Dev Tools</h3>
                {Object.entries(props.detailsBlock.devTools).map((arr) => {
                    let [key, value] = arr;
                    return (
                        <>
                        <h4>{key}</h4>
                        <Divider faded/>
                        <div className="list">
                            {value.map((item) => {
                                return (
                                    <div className='item'>&bull;{item}</div>
                                )
                            })}
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}