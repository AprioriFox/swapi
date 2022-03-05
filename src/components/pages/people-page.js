import React, {useState} from 'react';
import { PersonList, PersonDetails } from '../sw-components'; 
import {ItemDetails, Record} from '../item-details';
import Row from '../row';
import { Consumer } from '../swapi-context';


const PeoplePage = () => {
  const [selectedItemId, setSelectedItemId] = useState(1)


  const leftElement = (<PersonList setSelectedItemId ={setSelectedItemId}/>)


  const rightElement = (<PersonDetails selectedItemId = {selectedItemId}/>)

  return (
    <Row left = {leftElement} right={rightElement} />
  )
}


export default PeoplePage;
