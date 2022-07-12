import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';
import Face from './Face';
import Clarifai from 'clarifai';
import Rank from './Rank';

const app = new Clarifai.App({
 apiKey: '56e593f7f89b463d929f822db2564a35'
});




class App extends React.Component 
{
	constructor()
	{
		super();
		this.state=
		{
			input:'',url:'',
		}
	}

    onInputChange=(event)=>
    {
    		this.setState({input:event.target.value})
    }

    onButtonSubmit=()=>
    {
    	this.setState({url:this.state.input});
    	app.models.predict(Clarifai.FACE_DETECTION_MODEL,'https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/08/a98ff7169feb42c2ca6ee33c7484f235_original.jpg')

    	.then(response=>{console.log(response)})
    	

    }

    
	render()
	{
		return(
<div>
			
			<Nav/>
			<Logo/>
			<Rank/>
			<Search link={this.onInputChange} click={this.onButtonSubmit}/>
			<Face url={this.state.url}/>





</div>






			);
	}
}


export default App;