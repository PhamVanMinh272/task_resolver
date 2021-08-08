import React from 'react'
import './index.css'
import Task from '../task'
import { Checkbox, Input, InputNumber, Button, Collapse } from 'antd'

class ListTasks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    task_id: 1,
                    task_name: "correspond",
                    task_note: "This is a task note",
                    finish: false,
                    subTask: [
                        {
                            task_id: 11,
                            task_name: "comprehensive",
                            task_note: "This is a task note",
                            finish: false
                        },
                        {
                            task_id: 12,
                            task_name: "procrastination",
                            task_note: "This is a task note",
                            finish: false,
                        },
                        {
                            task_id: 13,
                            task_name: "table",
                            task_note: "This is a task note",
                            finish: false,
                        }
                    ]
                },
                {
                    task_id: 2,
                    task_name: 'Research coverity in gitlab',
                    task_note: 'This is a task note for this task',
                    finish: false,
                    subTask: []
                },
                {
                    task_id: 3,
                    task_name: 'compatibility correlate',
                    task_note: 'Oh yeah, This is a task note for this task',
                    finish: false,
                    subTask: []
                }],
            showFinshedTask: false
        }
        
    }

    showAddTaskArea(placeholder) {
        return (
            <div className="add-task-container task-container">
                <div className="task-name"><Input placeholder={placeholder}></Input></div>
                <div className="task-estimate-pomodoro">Estimate Pomodoro: <InputNumber min={1} max={100} defaultValue={1} onChange={this.onChangeEstimatePomodoro} /></div>
                <div><Button type="primary">Create</Button></div>
            </div>
        )
    }

    showTask() {
        const { Panel } = Collapse
        const { TextArea } = Input;
        let tasks = []
        this.state.tasks.forEach(task => {
            tasks.push(
                <div key={task.task_id}>
                    <Collapse key={task.task_id}>
                        <Panel
                            showArrow={false}
                            header={<Task key={task.task_id} task={task}></Task>}
                            key={task.task_id}
                        >
                            <TextArea placeholder="Task note" rows={4} />
                            <div className="task-note-manage-btn-container">
                                <Button type="primary">Save</Button>
                                <Button>Cancel</Button>
                            </div>
                            {this.showAddTaskArea("Subtask name")}
                            {task.subTask.map(subTask =>
                                <Collapse key={subTask.task_id}>
                                    <Panel
                                        showArrow={false}
                                        header={<Task key={subTask.task_id} task={subTask}></Task>}
                                        key={subTask.task_id}
                                    >
                                        <TextArea placeholder="Task note" autoSize={{ minRows: 4, maxRows: 50 }}/>
                                        <div className="task-note-manage-btn-container">
                                            <Button type="primary">Save</Button>
                                            <Button>Cancel</Button>
                                        </div>
                                    </Panel>
                                </Collapse>
                            )}
                        </Panel>
                    </Collapse>
                </div>
                
            )
        })
        return tasks
    }

    handleShowFinishedTask(state) {
        this.setState({
            showFinshedTask: !state
        })
    }

    onChangeEstimatePomodoro(value) {
        console.log('changed', value);
    }

    render() {
        return (
            <div className="list-task-container">
                <div className="task-container task-filters-container">
                    <Checkbox
                        checked={this.state.showFinshedTask}
                        onChange={() => this.handleShowFinishedTask(this.state.showFinshedTask)}
                    >Show Finished Tasks</Checkbox>
                </div>
                {this.showAddTaskArea("Task name")}
                {this.showTask()}
            </div>
        )
    }
}

export default ListTasks;
