import { userData } from './userData.jsx';
import './App.css'

function User() {
  return(
    <div>
    <div className='inner_div'>
      <div>
      <h1>TIME TO PRACTICE</h1>
      <p className='first_para'>Welcome on board! You have got this</p>
      </div>
      <div className='bottom_div'>
        <div>
          <span>{userData.firstName} </span>
        <span>{userData.lastName}</span>
        </div>
        <h2>{userData.title}</h2>
      </div>
    </div>
    
    </div>
  );
}

export default User
