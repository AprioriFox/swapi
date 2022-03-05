import react from "react";
import withSwapi from "../hoc";
import { ItemDetails, Record } from "../item-details";

const PersonDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record label = 'Gender' fieldName='gender'/>
            <Record label = 'Eye Color' fieldName='eyeColor' />
            <Record label = 'Birth Year' fieldName='birthYear' />
        </ItemDetails>
    )
}

const divideFunc = (swapi) =>({
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage
})

export default withSwapi(PersonDetails, divideFunc)