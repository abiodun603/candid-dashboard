import React from 'react'
import Chart from "react-apexcharts"
import { Link } from 'react-router-dom'
import statusCards from "../../assets/JsonData/status-card-data.js"
import Badge from '../../components/badge/Badge.jsx'
import Status from "../../components/status-card/StatusCard"
import Table from '../../components/table/Table.jsx'
import {Card, Card2, CardBody, CardFooter, CardHeader, PageHeader} from "./dash_element"

const chartOptions = {
    series: [
        {
            name: "Total Clients",
            data: [50,30,60,20,43,28,45,70,99,33,21,58]
        },
        {
            name: "Total Guards",
            data: [100,76,90,55,69,60,88,120,55,44,60,70]
        }
    ],
    options: {
        color: ["#09185E", "#09185E"],
        chart: {
            background: "transparent"
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth"
        },
        xaxis: {
            categories: ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]
        },
        legend: {
            position: "top"
        },
        grid: {
            show: false
        }
    }
}

const customers = {
    head: [
        "name",
        "guards",
        "amount paid"
    ],

    body: [
        {
            "name" : "s&s hotel",
            "number": "4",
            "amount": "140,000.00"
        },
        {
            "name" : "ore close",
            "number": "2",
            "amount": "50,000.00"
        },
        {
            "name" : "esosa aluyi res",
            "number": "2",
            "amount": "60,000.00"
        },
        {
            "name" : "tiyani lodge",
            "number": "2",
            "amount": "60,000.00"
        },
        {
            "name" : "ft mortages, opebe",
            "number": "4",
            "amount": "120,000.00"
        },
        {
            "name" : "afolabi resi",
            "number": "2",
            "amount": "60,000.00"
        },
        {
            "name" : "jf house",
            "number": "2",
            "amount": "70,000.00"
        }
    ]
}

const guards = {
    head: [
        "name",
        "location",
        "status"
    ],
    body: [
        {
            "name": "opt. tayo",
            "location": "s&s hotel",
            "status" : "pending"
        },
        {
            "name": "opt. opeoluma",
            "location": "victor house",
            "status" : "pending"
        },
        {
            "name": "opt. sulema",
            "location": "saka tinubu",
            "status" : "pending"
        },
        {
            "name": "opt. omoshewa",
            "location": "agodo house",
            "status" : "pending"
        },
        {
            "name": "opt. abuduleee",
            "location": "oba palace",
            "status" : "pending"
        },
        {
            "name": "opt. temideola",
            "location": "banana island",
            "status" : "pending"
        },
        {
            "name": "opt. amaka",
            "location": "imusuka street",
            "status" : "pending"
        }
    ]    
}

const vettStatus = {
    "vetted": "primary",
    "pending": "warning"
}

const renderCustomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCustomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.number}</td>
        <td>{item.amount}</td>
    </tr>   
)

const renderGuardsBody = (item, index) => (
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.location}</td>
        <td>
            <span>
                <Badge 
                    type={vettStatus[item.status]} 
                    content={item.status}
                />
            </span>
        </td>
    </tr>   
)
function Dashboard() {
    return (
        <>
            <PageHeader>Dashboard</PageHeader>

            <div className = "row">
                <div className="col-6">
                    <div className = "row">
                        {
                            statusCards.map((item, index) => {
                                return (
                                    <div className="col-6">
                                        <Status
                                            icon= {item.icon}
                                            title={item.title}
                                            count={item.count}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> 
                <div className="col-6">
                    <Card className="full-height">
                        <Chart
                            options = {chartOptions.options}
                            series = {chartOptions.series}
                            type = "line"
                            height = "100%"
                        />
                    </Card>
                </div>
                <div className= "col-6">
                    <Card2>
                        <CardHeader>
                            <h3>Our Customers</h3>
                        </CardHeader>
                        <CardBody>
                            {/* table */}
                            <Table
                                headData={customers.head}
                                renderHead = {(item, index) => renderCustomerHead(item, index)}
                                bodyData={customers.body}
                                renderBody= {(item, index) => renderCustomerBody(item, index)}
                            />
                        </CardBody>
                        <CardFooter>
                            <Link to = "/">view all</Link>
                        </CardFooter>
                    </Card2>
                </div>
                <div className= "col-6">
                    <Card2>
                        <CardHeader>
                            <h3>Pending Vetted Guards</h3>
                        </CardHeader>
                        <CardBody>
                            {/* table */}
                            <Table
                                headData={guards.head}
                                renderHead = {(item, index) => renderCustomerHead(item, index)}
                                bodyData={guards.body}
                                renderBody= {(item, index) => renderGuardsBody(item, index)}
                            />
                        </CardBody>
                        <CardFooter>
                            <Link to = "/">view all</Link>
                        </CardFooter>
                    </Card2>
                </div>
            </div> 
        </>
    )
}
export default Dashboard