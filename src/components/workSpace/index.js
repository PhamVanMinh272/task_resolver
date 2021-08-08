import { Statistic, Button, Layout, Menu } from 'antd'
import React from 'react'
import './index.css'
import { AuditOutlined } from '@ant-design/icons'

class WorkSpace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pomodoroRunning: false,
            workingPomodoro: true,
            collapsed: false
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    changeRunningPomodoro(status) {
        this.setState({
            pomodoroRunning: status
        })
    }

    onFinishPomodoro() {
        this.setState({
            workingPomodoro: !this.state.workingPomodoro
        })
    }

    onChangePomodoroTimer(e) {
        if (e%1000 === 0) {
            console.log('changed!');
            console.log(e)
        }
    }

    render() {
        const { Countdown } = Statistic;
        const deadline = Date.now();
        // return (
        //     <div className="work-space-container">
        //         <div className="pomodoro-container" style={{background: this.state.workingPomodoro? '#d90429' : '#219ebc' }}>
        //             <div className="pomodoro-time">
        //                 <Countdown
        //                     className="countdown-pomodoro"
        //                     title="Countdown Pomodoro"
        //                     value={deadline}
        //                     onFinish={() => this.onFinishPomodoro()}
        //                     onChange={(e) => this.onChangePomodoroTimer(e)}
        //                     format="mm:ss"
        //                 />
        //             </div>
        //             <Button 
        //                 style={{display: this.state.pomodoroRunning? 'none' : 'block'}}
        //                 onClick={() => this.changeRunningPomodoro(true)}
        //             >Start</Button>
        //             <Button 
        //                 style={{display: this.state.pomodoroRunning? 'block' : 'none'}}
        //                 onClick={() => this.changeRunningPomodoro(false)}
        //             >Stop</Button>
        //         </div>
        //     </div>
        // )
        const { Sider } = Layout;
        const { collapsed } = this.state;
        return (
            <Sider 
                theme='light'
                className="work-space-container"
                collapsible collapsed={collapsed}
                onCollapse={this.onCollapse}
                collapsedWidth='50'
                width='170'
            >
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<AuditOutlined />}>
                        Working Space
                    </Menu.Item>
                </Menu>
                <div className="pomodoro-container" 
                    style={{
                        background: this.state.workingPomodoro? '#d90429' : '#219ebc',
                        display: this.state.collapsed? 'none' : 'block' 
                        }}
                >
                    <div className="pomodoro-time">
                        <Countdown
                            className="countdown-pomodoro"
                            title="Pomodoro"
                            value={deadline}
                            onFinish={() => this.onFinishPomodoro()}
                            onChange={(e) => this.onChangePomodoroTimer(e)}
                            format="mm:ss"
                        />
                    </div>
                    <Button 
                        style={{display: this.state.pomodoroRunning? 'none' : 'block'}}
                        onClick={() => this.changeRunningPomodoro(true)}
                    >Start</Button>
                    <Button 
                        style={{display: this.state.pomodoroRunning? 'block' : 'none'}}
                        onClick={() => this.changeRunningPomodoro(false)}
                    >Stop</Button>
                </div>
            </Sider>
        )
    }
}

export default WorkSpace;
