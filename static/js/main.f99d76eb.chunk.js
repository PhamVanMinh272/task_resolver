(this.webpackJsonptask_resolver=this.webpackJsonptask_resolver||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(21),o=a.n(i),c=(a(106),a(35)),r=a(36),l=a(40),d=a(39),h=(a(107),a(100)),j=a(60),k=(a(108),a(150)),b=a(151),m=a(101),u=a(152),O=a(96),x=a(146),p=a(149),f=a(73),v=a(148),g=a(144),y=a(33),T=a(6),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={task:{task_id:"",task_name:"",task_note:"",finish:!1},displayEditTask:!1},s.handleChangeTaskName=s.handleChangeTaskName.bind(Object(j.a)(s)),s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({task:Object(h.a)({},this.props.task)})}},{key:"handleShowingEditTaskFields",value:function(){this.setState({displayEditTask:!this.state.displayEditTask})}},{key:"handleChangeTaskName",value:function(e){var t=this.state.task;t.task_name=e.target.value,this.setState({task:t})}},{key:"onChangeFinishStatus",value:function(){var e=this.state.task;e.finish=!e.finish,this.setState({task:e})}},{key:"confirmDeleteTask",value:function(e){O.b.success("The task is deleted")}},{key:"render",value:function(){var e=this,t=Object(T.jsxs)(x.a,{children:[Object(T.jsx)(x.a.Item,{children:"Pomodoro"},"0"),Object(T.jsx)(x.a.Item,{children:"5W1H"},"1")]}),a=Object(T.jsxs)(x.a,{children:[Object(T.jsx)(x.a.Item,{onClick:function(){e.handleShowingEditTaskFields(e.state.displayEditTask)},children:"Edit"},"0"),Object(T.jsx)(x.a.Item,{danger:!0,children:Object(T.jsx)(p.a,{title:"Are you sure to delete the task '"+this.props.task.task_name+"'?",onConfirm:this.confirmDeleteTask,okText:"Yes",cancelText:"No",children:"Delete"})},"1")]});return Object(T.jsxs)("div",{className:"task-container",children:[Object(T.jsxs)("div",{style:{width:"100%",display:this.state.displayEditTask?"none":"flex"},children:[Object(T.jsx)("div",{className:"task-name",children:this.props.task.task_name}),Object(T.jsxs)("div",{className:"task-menu-container",onClick:function(e){return e.stopPropagation()},children:[Object(T.jsx)("div",{className:"pomodoro-track-container",children:"10/20"}),Object(T.jsx)(f.a,{title:"Pomodoro Track",children:Object(T.jsx)(k.a,{style:{fontSize:"20px",color:"red",marginRight:"10px"}})}),Object(T.jsx)(v.a,{overlay:t,placement:"bottomLeft",arrow:!0,children:Object(T.jsx)(b.a,{style:{fontSize:"20px",width:"50px"}})}),Object(T.jsx)(f.a,{title:this.state.task.finish?"Finished":"In doing",children:Object(T.jsx)(m.a,{style:{color:this.state.task.finish?"green":"gray",fontSize:"20px",width:"50px"},onClick:function(){return e.onChangeFinishStatus()}})}),Object(T.jsx)(v.a,{overlay:a,placement:"bottomLeft",arrow:!0,children:Object(T.jsx)(u.a,{style:{fontSize:"20px",width:"50px"}})})]})]}),Object(T.jsxs)("div",{className:"add-task-container",style:{width:"100%",display:this.state.displayEditTask?"flex":"none"},onClick:function(e){return e.stopPropagation()},children:[Object(T.jsx)("div",{className:"task-name",children:Object(T.jsx)(g.a,{placeholder:"Task name",value:this.state.task.task_name,onChange:this.handleChangeTaskName})}),Object(T.jsx)("div",{children:Object(T.jsx)(y.a,{onClick:function(){e.handleShowingEditTaskFields()},children:"Cancel"})}),Object(T.jsx)("div",{children:Object(T.jsx)(y.a,{style:{marginLeft:"10px"},type:"primary",children:"Save"})})]})]},this.props.task.task_id)}}]),a}(n.a.Component),C=a(142),_=a(145),S=a(147),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={tasks:[{task_id:1,task_name:"correspond",task_note:"This is a task note",finish:!1,subTask:[{task_id:11,task_name:"comprehensive",task_note:"This is a task note",finish:!1},{task_id:12,task_name:"procrastination",task_note:"This is a task note",finish:!1},{task_id:13,task_name:"table",task_note:"This is a task note",finish:!1}]},{task_id:2,task_name:"Research coverity in gitlab",task_note:"This is a task note for this task",finish:!1,subTask:[]},{task_id:3,task_name:"compatibility correlate",task_note:"Oh yeah, This is a task note for this task",finish:!1,subTask:[]}],showFinshedTask:!1},s}return Object(r.a)(a,[{key:"showAddTaskArea",value:function(e){return Object(T.jsxs)("div",{className:"add-task-container task-container",children:[Object(T.jsx)("div",{className:"task-name",children:Object(T.jsx)(g.a,{placeholder:e})}),Object(T.jsxs)("div",{className:"task-estimate-pomodoro",children:["Estimate Pomodoro: ",Object(T.jsx)(C.a,{min:1,max:100,defaultValue:1,onChange:this.onChangeEstimatePomodoro})]}),Object(T.jsx)("div",{children:Object(T.jsx)(y.a,{type:"primary",children:"Create"})})]})}},{key:"showTask",value:function(){var e=this,t=_.a.Panel,a=g.a.TextArea,s=[];return this.state.tasks.forEach((function(n){s.push(Object(T.jsx)("div",{children:Object(T.jsx)(_.a,{children:Object(T.jsxs)(t,{showArrow:!1,header:Object(T.jsx)(w,{task:n},n.task_id),children:[Object(T.jsx)(a,{placeholder:"Task note",rows:4}),Object(T.jsxs)("div",{className:"task-note-manage-btn-container",children:[Object(T.jsx)(y.a,{type:"primary",children:"Save"}),Object(T.jsx)(y.a,{children:"Cancel"})]}),e.showAddTaskArea("Subtask name"),n.subTask.map((function(e){return Object(T.jsx)(_.a,{children:Object(T.jsxs)(t,{showArrow:!1,header:Object(T.jsx)(w,{task:e},e.task_id),children:[Object(T.jsx)(a,{placeholder:"Task note",autoSize:{minRows:4,maxRows:50}}),Object(T.jsxs)("div",{className:"task-note-manage-btn-container",children:[Object(T.jsx)(y.a,{type:"primary",children:"Save"}),Object(T.jsx)(y.a,{children:"Cancel"})]})]},e.task_id)},e.task_id)}))]},n.task_id)},n.task_id)},n.task_id))})),s}},{key:"handleShowFinishedTask",value:function(e){this.setState({showFinshedTask:!e})}},{key:"onChangeEstimatePomodoro",value:function(e){console.log("changed",e)}},{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{className:"list-task-container",children:[Object(T.jsx)("div",{className:"task-container task-filters-container",children:Object(T.jsx)(S.a,{checked:this.state.showFinshedTask,onChange:function(){return e.handleShowFinishedTask(e.state.showFinshedTask)},children:"Show Finished Tasks"})}),this.showAddTaskArea("Task name"),this.showTask()]})}}]),a}(n.a.Component),P=(a(113),a(153)),F=a(154),E=a(155),A=a(141),R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onCollapse=function(e){s.setState({collapsed:e})},s.state={collapsed:!1},s}return Object(r.a)(a,[{key:"render",value:function(){var e=A.a.Sider,t=this.state.collapsed;return Object(T.jsx)(e,{theme:"light",className:"side-bar",collapsible:!0,collapsed:t,onCollapse:this.onCollapse,collapsedWidth:"50",width:"170",children:Object(T.jsxs)(x.a,{theme:"light",defaultSelectedKeys:["1"],mode:"inline",children:[Object(T.jsx)(x.a.Item,{icon:Object(T.jsx)(P.a,{}),children:"Home"},"1"),Object(T.jsx)(x.a.Item,{icon:Object(T.jsx)(F.a,{}),children:"Eisenhower Matrix"},"2"),Object(T.jsx)(x.a.Item,{icon:Object(T.jsx)(E.a,{}),children:"Pickle Jar Theory"},"9")]})})}}]),a}(n.a.Component),I=a(143),z=(a(114),a(156)),D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onCollapse=function(e){s.setState({collapsed:e})},s.state={pomodoroRunning:!1,workingPomodoro:!0,collapsed:!1},s}return Object(r.a)(a,[{key:"changeRunningPomodoro",value:function(e){this.setState({pomodoroRunning:e})}},{key:"onFinishPomodoro",value:function(){this.setState({workingPomodoro:!this.state.workingPomodoro})}},{key:"onChangePomodoroTimer",value:function(e){e%1e3===0&&(console.log("changed!"),console.log(e))}},{key:"render",value:function(){var e=this,t=I.a.Countdown,a=Date.now(),s=A.a.Sider,n=this.state.collapsed;return Object(T.jsxs)(s,{theme:"light",className:"work-space-container",collapsible:!0,collapsed:n,onCollapse:this.onCollapse,collapsedWidth:"50",width:"170",children:[Object(T.jsx)(x.a,{theme:"light",defaultSelectedKeys:["1"],mode:"inline",children:Object(T.jsx)(x.a.Item,{icon:Object(T.jsx)(z.a,{}),children:"Working Space"},"1")}),Object(T.jsxs)("div",{className:"pomodoro-container",style:{background:this.state.workingPomodoro?"#d90429":"#219ebc",display:this.state.collapsed?"none":"block"},children:[Object(T.jsx)("div",{className:"pomodoro-time",children:Object(T.jsx)(t,{className:"countdown-pomodoro",title:"Pomodoro",value:a,onFinish:function(){return e.onFinishPomodoro()},onChange:function(t){return e.onChangePomodoroTimer(t)},format:"mm:ss"})}),Object(T.jsx)(y.a,{style:{display:this.state.pomodoroRunning?"none":"block"},onClick:function(){return e.changeRunningPomodoro(!0)},children:"Start"}),Object(T.jsx)(y.a,{style:{display:this.state.pomodoroRunning?"block":"none"},onClick:function(){return e.changeRunningPomodoro(!1)},children:"Stop"})]})]})}}]),a}(n.a.Component);a(137),a(138);var W=function(){var e=A.a.Header,t=A.a.Content,a=A.a.Footer;return Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(A.a,{children:[Object(T.jsx)(e,{className:"App-header",children:"Task Resolver"}),Object(T.jsxs)(A.a,{children:[Object(T.jsx)(R,{}),Object(T.jsx)(t,{children:Object(T.jsx)("div",{className:"content",children:Object(T.jsx)(N,{})})}),Object(T.jsx)(D,{})]}),Object(T.jsx)(a,{})]})})};o.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(W,{})}),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.f99d76eb.chunk.js.map