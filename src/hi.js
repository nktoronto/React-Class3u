import React from 'react'

const Hi = ({ name, batch }) =>
    (
  <div>
    Hello {name}, Batch #{batch} !!{" "}
  </div>
    );
/*
above code is equivalent to:
function Hi({ name, batch }) {
    return <div> Hello {name}, Batch {batch} !! </div>;
} */
/* const Hi = ({ name, age }) =>
 <div>Hello {name}, you are {age} !!  </div> */

 export default Hi;