import { useState } from "react";
import styles from './ListGroup.module.css'

// Typescript has a feature called interface
// using an interface we can define the shape of our objects
// {items: [], heading :string}

interface ListProps {
  items: string []
  heading : string
  onSelectedItem: (item:string) => void
}




const ListGroup = ({items, heading, onSelectedItem}:ListProps) => {
  
  const [selectedIndex, setSelectedIndex] = useState(1);

  const[name, setName] = useState("David");

  // const updateIndex = () => {
  //   setSelectedIndex()
  // }


  // let selectedIndex = 0;


  // const arr = useState(0);

  // console.log(arr);

// console.log(useState(-1));

  // Event handler which is a function to handle and event

  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target.innerText);
  // };

  // items = [];

// const updateIndex = (index:any) => {
//   setSelectedIndex(index);
//   console.log(selectedIndex);
//   console.log(index, "This is just the index")
// }

  // const message = items.length == 0 ? <p>No Items Found</p> : null

  const getMessage = () => {
    return items.length == 0 ? <p>No Items Found</p> : null;
  };

  // using an if statement
  //   if(items.length == 0)
  //     {
  //       return (
  // <>
  // <h1>List</h1>
  // <p>No Items found</p>

  // </>
  //       )
  //     }

  return (
    // JSX we must have on parent element. Example div, Fragment or <></>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {/* {items.length == 0 ? <p>No Items Found</p> : null} */}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          // <li className="list-group-item" key={index} onClick={() => console.log(`${item} "was clicked at the index of" ${index}` )}>
          <li
            className={
              selectedIndex == index
                ? styles['listGroupItem']
                : styles['listGroupItem']
            }
            key={index}
            onClick={() => {setSelectedIndex(index)
                onSelectedItem(item);
              }}
            // key={index}
            // onClick={handleClick}
          >
            {item}
          </li>
          
        ))}
      </ul>
      <p>{name}</p>
      <button className="btn btn-primary" onClick={()=> setName("Neo")}>Update to New Name</button>
    </>
  );
};

export default ListGroup;
