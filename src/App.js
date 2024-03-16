import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
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
      </TableBody>
    </Table>
    );
}

export default App;
