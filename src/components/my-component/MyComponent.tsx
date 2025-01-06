import {FC, ReactNode} from "react";
import './MyComponent.css'


type MyComponentPropType = {
    title: string;
    children?: ReactNode;
};

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div className="text-3xl font-bold underline">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>

    );
};
export default MyComponent;