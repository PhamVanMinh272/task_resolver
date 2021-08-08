import ListTasks from './components/listTasks';
import SideBar from './components/sideBar';
import WorkSpace from './components/workSpace';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">
          Task Resolver
        </Header>
        <Layout>
          <SideBar />
          <Content>
            <div className="content">
              <ListTasks />
            </div>
          </Content>
          <WorkSpace></WorkSpace>
        </Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
