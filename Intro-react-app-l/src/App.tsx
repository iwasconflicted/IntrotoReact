import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import MyuseStateExample from "./components/MyuseStateExample";
import { BsCalendar2HeartFill } from "react-icons/bs";


function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let students = [
    "Mr.Garby",
    "Jacqueline",
    "Blake",
    "Denise",
    "Aaron",
    "Principal Oshaughnessy",
    "Timothy",
  ];

  let cars = [
    "Honda",
    "Ferrari",
    "McLaren",
    "Mercedes",
    "Subaru",
    "Toyota",
    "Nissan",
    "Mazda",
    "Audi",
    "BMW",
    "Acura",
    "Jeep",
  ];

  const handleSelectItem = (item:string) => {
    console.log(item)
  }

const handleClick = () => {
  console.log("Clicked from our helper function")
}

  return (
    <>
      <div>

      <BsCalendar2HeartFill color="red" size="80" />

        <div>
          <Alert>
         "This is a message"
        </Alert>
        </div>
     

        <Button color="primary" onClickFunction={handleClick}>One Button</Button>
        <Button color="secondary" onClickFunction={handleClick}>Cool Button</Button>
        <Button color="warning" onClickFunction={handleClick}>Not Cool Button</Button>

        <ListGroup onSelectedItem={handleSelectItem} items={items} heading="Cities" />
        <ListGroup onSelectedItem={handleSelectItem} items={students} heading="Students" />
        <ListGroup onSelectedItem={handleSelectItem} items={cars} heading="Cars" />
      </div>

      <div>
        <MyuseStateExample />
      </div>
    </>
  );
}

export default App;
