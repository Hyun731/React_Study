import './App.css'
import Card from './components/Card.jsx'

function App() {
  // bssm.js

const bssm = [
      {
        id: '1-1',
        teacher: '박수진 T',
        student: ['강준영', '김가은', '김민건', '김민서', '김은호']
      }, 

      {
        id: '1-2',
        teacher: '박지혜 T',
        student: ['강준석', '강태은', '권기범', '김강', '김선예']
      }, 

    {
        id: '1-3',
        teacher: '허혜진 T',
        student: ['김건', '김주연', '김지아', '김지운', '김지은']
      },

      {
        id: '1-4',
        teacher: '박진향 T',
        student: ['곽영빈', '권길현', '김원우', '김태훈', '노현승']
      },
    ];
  return (
    <>
      {bssm.map((cls) => (
        <div key={cls.id}>
          <h1>{cls.id}</h1>
          <h1>{cls.teacher}</h1>
          {cls.student.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </div>
      ))}
    </>
  )
}

export default App
