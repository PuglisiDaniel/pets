import { Button } from "@mui/material";

import { ListStyled, 
    ItemList, 
    Photo, 
    Info, 
    Name, 
    Description 
} from "./List.style";

import {Pet} from '../../../data/@types/pets';

import{textService} from '../../../data/services/textServer';

interface ListProps{
    pets: Pet[];
    onSelect: (pet: Pet)=>void;

}

export default function List(props: ListProps){

    const maxText = 100;
    return(
        <ListStyled>
            {props.pets.map(pet =>(
                <ItemList key={pet.id}>
                    <Photo src={pet.photo} />
                    <Info>
                        <Name>{pet.name}</Name>
                        <Description>

                            {textService.limitarTexto(pet.story, maxText)}
                        </Description>
                        <Button 
                        variant={'contained'} 
                        fullWidth
                        onClick={()=> props.onSelect(pet)}
                        >
                            Adotar {pet.name}
                        </Button>
                    </Info>   
                </ItemList>

            ))}
         
        </ListStyled>
    )
}