import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./api"


function App() {
  searchImages('cars')
  return (
    <>
      <h1>Pictures App</h1>
      <SearchBar />
      <ImageList />
    </>
  )
}

export default App