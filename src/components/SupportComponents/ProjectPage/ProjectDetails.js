import Divider from '../Divider'

export default function(props){
    const detailsBlock = props.detailsBlock;
    return (
        <div className="description">
            <h2 className="title">{detailsBlock.title}</h2>
            <h3 className="subtitle">{detailsBlock.description}</h3>
            {detailsBlock.frontendLink ? <h4>Frontend - <a href={detailsBlock.frontendLink}>Github</a></h4> : null}
            {detailsBlock.backendLink ? <h4>Backend - <a href={detailsBlock.backendLink}>Github</a></h4> : null}
            {detailsBlock.videoDemo ? <h4><a href={detailsBlock.videoDemo}>Demo</a></h4> : null}
            {detailsBlock.blogArticle ? <h4><a href={detailsBlock.blogArticle}>Blog Article</a></h4> : null}
            <Divider topSpacing='1em'/>
            <div className='devtools-wrapper'>
                <h3>Dev Tools</h3>
                {Object.entries(detailsBlock.devTools).map((arr) => {
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