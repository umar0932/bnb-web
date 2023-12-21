import { type PropsWithChildren } from "react";
import Header from "../Header/Header";
import Copyright from "../Copyright/Copyright";


const AccountSettingsLayout = ({children}:PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
            <Copyright />
        </>
    )
}

export default AccountSettingsLayout