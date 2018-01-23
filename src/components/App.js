import React, { Component}  from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStat from './AgeStat';

class App extends Component{
    constructor(){
        super();
        this.state = {
            newDate: '',
            birthday: '1992-11-11',
            showStats: false
        }
    }
   changeBirthDay(){
       console.log(this.state);
       this.setState({ 
           birthday:this.state.newDate,
           showStats: true
        })
   }
    render(){
        return(
            <div className="container">
                <h1 className="page-header">Welcome to the age-telling Oracle!</h1>
                <h3>Get started by telling the Oracle your Birth Date!</h3>
               <span id="space" />
                <Form inline onChange={ event => this.setState({ newDate: event.target.value})}>
                        <FormControl type="date"></FormControl> 
                        <Button  onClick={() => this.changeBirthDay() }> Submit</Button>
                        {
                            this.state.showStats ?
                              <div className="fade age-stat red">
                                   <AgeStat date={this.state.birthday} />
                              </div>
                             
                            :
                              <div></div>
                        }
                        
                </Form>
            </div>
        )
    }
}


export default App;