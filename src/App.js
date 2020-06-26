import React,{Fragment,Component} from 'react';
import './App.css';
import Table from './Table';

class App extends Component {

  state = {
    data:[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
    currentUser:0,
    winner:null
  }

  checkWin = () => {
    const data = this.state.data;
    for(let i=0;i<3;i++){
      if((data[i][0] !== -1) && (data[i][0] === data[i][1] && data[i][1]  === data[i][2])) return data[i][0];
      if(data[0][i] !== -1 && (data[0][i] === data[1][i] && data[1][i] === data[2][i])) return data[0][i];
    }

    if(data[0][0] !== -1 && (data[0][0] === data[1][1] && data[1][1] === data[2][2])) return data[0][0];
    if(data[0][2] !== -1 && (data[0][2] === data[1][1] && data[1][1] === data[2][0])) return data[0][0];

    return -1;
  }

  checkDraw = () => {
    let data = this.state.data;
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        if(data[i][j] === -1) return false;
      }
    }

    return true;
  }

  handleClick = async (index) => {
        const i = index[0];
        const j = index[1];
        const ar = [...this.state.data];
        ar[i][j] = this.state.currentUser;
        await this.setState({data:ar,currentUser: this.state.currentUser === 0 ? 1 : 0});
        if(this.checkDraw()) {
          this.setState({winner:-1});
        }

        let result = this.checkWin();

        console.log(result);
        if( result !== -1){
            let data = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
            this.setState({data,winner:result,currentUser:0});
        }
        console.log(this.state.data)
  }

  playAgain = () => {
    let data = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
    this.setState({data,currentUser:0,winner:null});
  }

  render(){
      return (
      <Fragment>
        <div className='container'>
          <Table data = {this.state.data} onClick={this.handleClick} currentUser={this.state.currentUser} winner={this.state.winner}/>
          <button onClick={this.playAgain} className='btn btn-primary'>playAgain</button>
        </div>
      </Fragment>
    );
  }
}

export default App;
