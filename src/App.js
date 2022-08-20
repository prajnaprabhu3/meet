import './app.scss';
import Title from './components/Title';
import Input from './components/markdownInput';

function App() {
  return (
    <div className="app-container">
      <Title title="Markdown Editor" />
      <div className="editor-space">
        <Input />
      </div>
    </div>
  );
}

export default App;
