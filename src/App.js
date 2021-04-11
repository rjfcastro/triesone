import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Tries One
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
