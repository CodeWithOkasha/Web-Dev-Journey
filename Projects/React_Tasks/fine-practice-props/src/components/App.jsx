import '../App.css'
import {CourseGoal} from './CourseGoal.jsx'
import {userData} from './Data.jsx';
function App()
{
  return(
    <div className='outer_div'>
      <div className='inner_div'>
        <h1 className='inner_div_h1'>TIME TO PRACTICE</h1>
        <p className='inner_div_p'>Components And Props</p>
        <div className='data'>
<CourseGoal title={userData[0].title} description={userData[0].description}></CourseGoal>
</div>
  <div className='data'>
 <CourseGoal {...userData[1]}></CourseGoal> /* Here use of Spread operator */
</div>
</div>
    </div>

  );
}

export default App






