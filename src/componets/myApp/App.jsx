import './App.css'
import NameBox, {NameBox2, NameBox3} from "../nameBox/NameBox.jsx";

function App() {

    return (
        <>
            <div className={'main'}>
                <div className={'name-box'}>
                    <NameBox/>
                    <NameBox2/>
                    <NameBox3/>
                </div>
            </div>

        </>
    )
}

export default App
