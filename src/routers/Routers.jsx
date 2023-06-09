import{
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom"
import Profile from "../pages/Profile"
import App from "../App"

const Routes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/profile" element={<Profile/>} />

                
        </Routes>
        </BrowserRouter>
    )
}