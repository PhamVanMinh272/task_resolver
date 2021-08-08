import React from 'react'
import './index.css'
import { MoreOutlined, ToolOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Tooltip, Dropdown, Menu, Input, Button, Popconfirm, message } from 'antd'


class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: {
                task_id: '',
                task_name: '',
                task_note: '',
                finish: false
            },
            displayEditTask: false
        }
        this.handleChangeTaskName = this.handleChangeTaskName.bind(this)
    }

    componentDidMount() {
        this.setState({
            task: {...this.props.task}
        })
    }

    handleShowingEditTaskFields() {
        this.setState({
            displayEditTask: !this.state.displayEditTask
        })
    }

    handleChangeTaskName(e) {
        let task = this.state.task
        task.task_name = e.target.value
        this.setState({
            task: task
        })
    }

    onChangeFinishStatus() {
        let task = this.state.task
        task.finish = !task.finish
        this.setState({
            task: task
        })
    }

    confirmDeleteTask(e) {
        message.success('The task is deleted');
    }


    render() {
        const helperMenu = (
            <Menu>
                <Menu.Item key="0">
                    Pomodoro
                </Menu.Item>
                <Menu.Item key="1">
                    5W1H
                </Menu.Item>
            </Menu>
        )
        const taskManageActions = (
            <Menu>
                <Menu.Item key="0" onClick={() => {this.handleShowingEditTaskFields(this.state.displayEditTask)}}>
                    Edit
                </Menu.Item>
                <Menu.Item key="1" danger>
                    <Popconfirm
                        title={"Are you sure to delete the task '" + this.props.task.task_name + "'?"}
                        onConfirm={this.confirmDeleteTask}
                        okText="Yes"
                        cancelText="No"
                    >
                        Delete
                    </Popconfirm>
                    
                </Menu.Item>
            </Menu>
        )
        return (
            <div key={this.props.task.task_id} className="task-container">
                <div style={{width: "100%", display: this.state.displayEditTask? "none" : "flex"}}>
                    <div className="task-name">{this.props.task.task_name}</div>
                    <div className="task-menu-container" onClick={(e) => e.stopPropagation()}>
                        <div className="pomodoro-track-container">10/20</div>
                        <Tooltip title="Pomodoro Track">
                            <ClockCircleOutlined style={{fontSize: '20px', color: 'red', marginRight: '10px'}}/>
                        </Tooltip>
                        <Dropdown overlay={helperMenu} placement="bottomLeft" arrow>
                            <ToolOutlined style={{fontSize: '20px', width: '50px'}}/>
                        </Dropdown>
                        <Tooltip title={this.state.task.finish? 'Finished' : 'In doing'}>
                            <CheckCircleOutlined 
                                style={{color: this.state.task.finish? 'green' : 'gray', fontSize: '20px', width: '50px'}}
                                onClick={() => this.onChangeFinishStatus()}
                            />
                        </Tooltip>
                        <Dropdown overlay={taskManageActions} placement="bottomLeft" arrow>
                            <MoreOutlined style={{fontSize: '20px', width: '50px'}}/>
                        </Dropdown>
                    </div>
                </div>
                <div 
                    className="add-task-container" 
                    style={{width: "100%", display: this.state.displayEditTask? "flex" : "none"}}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="task-name">
                        <Input
                            placeholder="Task name"
                            value={this.state.task.task_name}
                            onChange={this.handleChangeTaskName}
                        ></Input>
                    </div>
                    <div>
                        <Button onClick={() => {this.handleShowingEditTaskFields()}}>
                            Cancel
                        </Button>
                    </div>
                    <div><Button style={{marginLeft: '10px'}} type='primary'>Save</Button></div>
                </div>
            </div>
        )
    }
}

export default Task;
