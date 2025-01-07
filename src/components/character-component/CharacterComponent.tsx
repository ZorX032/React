import {ICharacter} from "../../models/Character.ts";
import {ReactNode} from "react";


interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className="my-10 flex justify-center items-center h-128 bg-gray-200">
            <h3 className="text-2xl">{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    )
}