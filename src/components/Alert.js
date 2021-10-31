import React from 'react'

function Alert(props) {
    const capatialise = (word) => {
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
    return (
       props.alert &&  <div classNam={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
          <strong>{capatialise(props.alert.type)}</strong> : {props.alert.message}
  <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>

</div>
    )
}

export default Alert
