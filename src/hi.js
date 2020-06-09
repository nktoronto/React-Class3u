import React from 'react'

/* const Hi = ({ name, age }) => <div>Hello {name}, you are {age} !!  </div> */

const Hi = ({ name, batch }) => (
  <div>
    Hello {name}, Batch #{batch} !!{" "}
  </div>
);
/*
function Hi({ name, batch }) {
    return <div> Hello {name}, Batch {batch} !! </div>;
} */

 export default Hi;