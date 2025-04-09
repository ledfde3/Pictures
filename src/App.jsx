import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./assets/components/Api"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pictures Apps</h1>
      <SearchBar/>
      <ImageList/>
    </>
  )
}

export default App
