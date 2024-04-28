import "./App.css";
import { PostProvider } from "./contexts/PostContext";
import NewPostForm from "./components/NewPostForm";
import PostList from "./components/PostList";
import EditModal from "./components/EditModal";

function App() {
  return (
    <PostProvider>
      <div className="App">
        <div className="Header">
          <h1>C R U D</h1>
          <h2>(Create, Read, Update, dan Delet)</h2>
          <h1>ASSIGNMENT HARISENIN</h1>
        </div>
        <NewPostForm />
        <PostList />
        <EditModal />
      </div>
    </PostProvider>
  );
}

export default App;
