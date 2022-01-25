import {RiDashboardLine} from "react-icons/ri"
import {GiPoliceOfficerHead} from "react-icons/gi"
import {FaRegUserCircle} from "react-icons/fa"
import {FiSettings} from "react-icons/fi"
import {SiSimpleanalytics} from "react-icons/si"
import {FiUsers} from "react-icons/fi"


export default [
    {
        "display_name": "Dashboard",
        "route": "/",
        "icon":<RiDashboardLine/>
    },
    {
        "display_name": "Customers",
        "route": "/customers",
        "icon": <FaRegUserCircle/>
    },
    {
        "display_name": "guards",
        "route": "/guards",
        "icon": <GiPoliceOfficerHead/>
    },
    {
        "display_name": "Analytics",
        "route": "/analytics",
        "icon": <SiSimpleanalytics/>
    },
    {
        "display_name": "staff",
        "route": "/staff",
        "icon": <FiUsers/>
    },
    {
        "display_name": "settings",
        "route": "/settings",
        "icon": <FiSettings/>
    }
]