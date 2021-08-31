import ListTasks from './components/listTasks';
import SideBar from './components/sideBar';
import TodoList from './components/todolist';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Layout } from 'antd';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header className="App-header">
            Task Resolver
          </Header>
          <Layout>
            <SideBar />
            <Content>
              <div className="content">
                <Switch>
                  <Route path="/todolist">
                    <TodoList />
                  </Route>
                  <Route path="/">
                    <ListTasks />
                  </Route>
                </Switch>
              </div>
            </Content>
          </Layout>
          <Footer></Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
