import React, {useEffect, useState} from 'react'
import {Row, Col, Card, Modal, Typography, Input} from "antd";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
import style from "@/app/components/task.card.css"

const { Title } = Typography;
const TaskGrid = ({tasksList, setTaskList}) => {
    const [toEdit, setToEdit] = useState(0);
    const [toEditTitle, setToEditTitle] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [tempTask, setTempTask] = useState({
        name: "",
        description: ""
    });

    useEffect(() => {
            if (tasksList.length !== 0){
                setToEditTitle(tasksList[toEdit].name)
            }
        }
        ,[]
    )

    return (
        <Row
            gutter={[20, 16]}

            style={{
                width: "100%",
            }}
        >
            {
                tasksList.map(
                    (task, index) => <Col span={8} md={8} sm={12} key={index}>
                        <Card title={task.name} actions={[
                            <EditFilled key={"edit"} onClick={() => {
                                setToEdit(index);
                                setToEditTitle(task.name)
                                setOpenModal(!openModal);
                                setTempTask({
                                    name: task.name,
                                    description: task.description
                                })
                            }}/>,
                            <DeleteFilled key={"delete"} type={"warning"}
                                          onClick={() => {
                                              setTaskList(prevTask =>
                                                  prevTask.filter(
                                                      (v, i) => i!==index
                                                  )
                                              )
                                          }}
                            />
                        ]}>
                            <div style={{
                                wordWrap:"break-word",
                                height: 100,
                                overflow: "scroll"
                            }}>
                                <p>{task.description}</p>
                            </div>
                        </Card>
                    </Col>
                )
            }
            <Modal title={ `Edit` }
                   open={openModal}
                   width={"1000px"}
                   onOk={() =>{
                        setTaskList( prevList => [tempTask ,...prevList.filter(
                            (v, i) => i !== toEdit
                        )])
                        setOpenModal(!openModal)
                   }}

                   onCancel={() => {
                       setOpenModal(!openModal)
                   }}
                   style={{
                       display: "flex",
                       justifyContent: "center",
                       alignItems:"center"
                   }}
            >
                <Title>{tempTask.name}</Title>
                <p>Name</p>
                <Input type={"text"}
                       placeholder={"Enter new task name"}
                       value={tempTask.name}
                       onChange={v => {
                           setTempTask(prev => (
                               {
                                   ...prev,
                                   name: v.target.value
                               }
                           ))
                       }}
                />
                <p style={{
                    marginTop: "10px"
                }}>
                    Description
                </p>
                <Input type={"text"}
                       placeholder={"Enter new Description"}
                       value={tempTask.description}
                       onChange={v => {
                           setTempTask(prev => ({
                               ...prev,
                               description: v.target.value
                           }))
                       }}
                />
            </Modal>
        </Row>
    )
}
export default TaskGrid
