import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

function App() {

  const customers = [{
    'id' : 1,
    'img' : 'https://picsum.photos/64/64',
    'name' : '홍길동',
    'birthday' : '020315',
    'gender' : '남자',
    'job' : '대학생'
},{
  'id' : 2,
  'img' : 'https://picsum.photos/64/64',
  'name' : '김영준',
  'birthday' : '021107',
  'gender' : '남자',
  'job' : '프로그레머'
},{
  'id' : 3,
  'img' : 'https://picsum.photos/64/64',
  'name' : '유기태',
  'birthday' : '020330',
  'gender' : '남자',
  'job' : '의사'
}]


  return (
    <div>

      {
        customers.map(c =>{
          return(
            <Customer
              key = {c.id}
              id = {c.id}
              image = {c.img}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job ={c.job}
            />
          )
        })
      }

    </div>
    );
}

export default App;
