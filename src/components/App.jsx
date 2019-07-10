import React from 'react';
import Nav from './Nav';
import Info from './Info';
import Friends from './Friends'
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import YourStatusList from "./YourStatusList";
import NewStatusControl from './NewStatusControl'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 
    grid-gap: 1.5rem;
    margin-top: 9rem;
    justify-items: center;
`

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            masterYourStatusList: []
        };
        this.handleAddingNewStatusToList = this.handleAddingNewStatusToList.bind(this);
    }
    handleAddingNewStatusToList(newStatus){
     
        const newMasterYourStatusList = this.state.masterYourStatusList.slice();
        newStatus.formattedWaitTime = (newStatus.time).fromNow(true);
        newMasterYourStatusList.push(newStatus);
        this.setState({masterYourStatusList: newMasterYourStatusList})
        
    }
    componentDidMount() {
        this.waitTimeUpdateTimer = setInterval(() =>
          this.updateStatusElapsedWaitTime(),
          5000
        );
      }
      updateStatusElapsedWaitTime() {
        let newMasterStatusList = this.state.masterYourStatusList.slice();
        newMasterStatusList.forEach((status) =>
          status.formattedWaitTime = (status.time).fromNow(true)
        );
        this.setState({masterYourStatusList: newMasterStatusList})
      }
      componentWillUnmount(){
        clearInterval(this.waitTimeUpdateTimer);
      }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Grid>
                    <Info/>
                    <Switch>
                        
                        <Route exact path='/' render={() =><YourStatusList yourStatusList={this.state.masterYourStatusList}/>} />
                        <Route path='/newstatus' render={()=><NewStatusControl onNewStatusCreation={this.handleAddingNewStatusToList}/>} />
                    </Switch>
                    <Friends/>
             </Grid>
                </div>
            </BrowserRouter>
        );
    }
    
    

}


export default App;





// export default (App) => {
//     return(
//         <div>
//              <Nav/>
//              <Grid>
//                 <Info/>
//                 <BrowserRouter>
//                 <Switch>
//                 {/* <Route path='/' render={() =><Stat/>}/> */}
//                 <Route path='/newstatus' render={() =><Stat/>}/>
//                 </Switch>
//                 </BrowserRouter>
//                 <Friends/>
//              </Grid>
//         </div>
       
//     )
// }

