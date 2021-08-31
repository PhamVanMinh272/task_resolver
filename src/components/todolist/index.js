import React from 'react'
import './index.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="todolist-container">
                <div className="todolist-card">
                    <div class="card-title">Today Todo List</div>
                    <div class="card-task">
                        <div><input type="checkbox" /></div>
                        {/* <div class="task-input">Push non-compile code</div> */}
                        <input class="task-input" />
                    </div>
                    <div class="card-task">
                        <div><input type="checkbox" /></div>
                        {/* <div class="task-input">Test 2609</div> */}
                        <input class="task-input" />
                    </div>
                    <div class="card-task">
                        <div><input type="checkbox" /></div>
                        <input class="task-input" />
                    </div>
                    <div class="card-task">
                        <div><input type="checkbox" /></div>
                        <input class="task-input" />
                    </div>
                    <div class="card-task">
                        <div><input type="checkbox" /></div>
                        <input class="task-input" />
                    </div>
                    <div class="card-task">
                        <div><input type="checkbox" /></div>
                        <input class="task-input" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;
