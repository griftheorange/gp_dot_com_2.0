export default function(props){
    return (
        <div className="card-container">
          <div className="card">
              {props.label ? (
                  <div className="card-label">
                      <h3>{props.label}</h3>
                  </div>
              ) : null}
              {props.children}
          </div>
        </div>
    )
}