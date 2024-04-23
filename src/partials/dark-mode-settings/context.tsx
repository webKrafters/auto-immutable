import React, { Children, createContext, useState } from 'react';

export interface Props { children?: React.ReactNode };

export const UpdateCtx = createContext<React.Dispatch<React.SetStateAction<boolean>>>(()=>{});
export const ValueCtx = createContext<boolean|undefined>( undefined );

const Provider : React.FC<Props> = ({ children }) => {
    const [ darkModeFlag, setDarkModeFlag ] = useState( true );
    return (
        <UpdateCtx.Provider value={ setDarkModeFlag }>
            <ValueCtx.Provider value={ darkModeFlag }>
                { Children.map( children, c => c ) }
            </ValueCtx.Provider>
        </UpdateCtx.Provider>
    );
};

export default Provider;