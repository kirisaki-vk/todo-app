"use client"
import React, { useState } from 'react'
import {Layout} from "antd";
import CustomHeader from "@/app/components/CustomHeader";
import TaskGrid from "@/app/components/TaskGrid";

const {Sider, Content, Footer} = Layout;
const AppLayout = () => {
    const [task, setTask] = useState({
        name: "",
        description:""
    });

    const [tasks, setTasks] = useState([]);

    return (
        <Layout>
            <CustomHeader taskState={[task, setTask]} tasksState={[tasks, setTasks]}/>
            <Content style={{
                marginTop: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                height: "100%"
            }}>
                <TaskGrid tasksList={tasks} setTaskList={setTasks}/>
            </Content>
        </Layout>
    )
}
export default AppLayout