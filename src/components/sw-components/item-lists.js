import react from "react";
import ItemList from '../item-list'
import withSwapi from "../hoc";

const PersonList = (props) =>{
    return (
        <ItemList {...props}>
            {(data)=>data.name}
        </ItemList>
    )
}

const divideFunction = (swapi) =>(
    {
      getData: swapi.getAllPeople
    }
  )

export default withSwapi(PersonList, divideFunction);


// const PersonList = withSwapi(
//   (props) => <ItemList {...props}> {(item)=>item.name} </ItemList>,
//   swapi => ({getData: swapi.getAllPeople})
// )

// export default PersonList; 