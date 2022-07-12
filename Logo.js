import React from 'react';
import Tilt from 'react-tilt';
import './Main.css';


function Logo()
{
	return(
<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner"> 👽 </div>
</Tilt>




		);

}

export default Logo;