import React, {FC, ReactNode} from 'react';
import {PrivateRoute} from "@/app/screens/AdminDashboard/components";
import {Header} from "@/app/screens/AdminDashboard/layouts/AdminDashboardLayouts/Header";
import {Footer} from "@/app/screens/AdminDashboard/layouts/AdminDashboardLayouts/Footer/Footer";
import {Main} from "@/app/screens/AdminDashboard/layouts/AdminDashboardLayouts/Main";
import {SiteBar} from "@/app/screens/AdminDashboard/layouts/AdminDashboardLayouts/SiteBar/SiteBar";
import {Wrapper} from "@/app/screens/AdminDashboard/layouts/AdminDashboardLayouts/Wrapper";
import classes from "./AdminDashboardLayouts.module.scss"

interface IAdminDashboardLayouts {
    children: ReactNode
}

export const AdminDashboardLayouts:FC<IAdminDashboardLayouts> = ({children}) => {
    return (
        <PrivateRoute>
            <Wrapper>
                <Header/>
                <Main>
                    <SiteBar/>
                    <div className={classes.containerAdmin}>
                        {children}
                    </div>
                </Main>
                <Footer/>
            </Wrapper>
        </PrivateRoute>
    );
};
