import React from 'react'
import { Container, Content } from './styled'


import { Link } from "react-router-dom";
import {
    FaTimes,
    FaHome,
    FaEnvelope,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,
    FaRegFileAlt,
    FaRegCalendarAlt,
    FaChartBar
} from 'react-icons/fa'

import styles from './styles.module.css'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (

        <div className={styles.container} style={{ right: active ? '0' : '-100%' }}>
            <FaTimes onClick={closeSidebar} />
            <div className={styles.content}>
                <ul>
                    <li>

                        <Link to="/">MegaSena</Link>
                    </li>
                    <li>
                        <Link to="/quina">Quina</Link>
                    </li>
                    <li>
                        <Link to="/duplasena">Duplasena</Link>
                    </li>
                    <li>
                        <Link to="/lotofacil">LotoFácil</Link>
                    </li>
                    <li>
                        <Link to="/diadesorte">DiaDeSorte</Link>
                    </li>
                </ul>
                {/* <Sidebar>
                    <Link to="/">MegaSena</Link>
                </Sidebar> */}
                {/* <SidebarItem Icon={FaHome} Text={<Link to="/">MegaSena</Link>} />
                <SidebarItem Icon={FaChartBar} Text={<Link to="/quina">Quina</Link>} />
                <SidebarItem Icon={FaUserAlt} Text="Users" />
                <SidebarItem Icon={FaEnvelope} Text="Mail" />
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
                <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
                <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
                <SidebarItem Icon={FaRegSun} Text="Settings" /> */}

            </div>
        </div>

        // <Container sidebar={active}>
        //     <FaTimes onClick={closeSidebar} />
        //     <Content>
        //         <SidebarItem Icon={FaHome} Text="Home" />
        //         <SidebarItem Icon={FaChartBar} Text="Statistics" />
        //         <SidebarItem Icon={FaUserAlt} Text="Users" />
        //         <SidebarItem Icon={FaEnvelope} Text="Mail" />
        //         <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        //         <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        //         <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        //         <SidebarItem Icon={FaRegSun} Text="Settings" />
        //     </Content>
        // </Container>
    )
}

export default Sidebar