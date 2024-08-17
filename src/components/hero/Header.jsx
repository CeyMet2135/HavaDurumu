import FormInput from '../Form/FormInput'
import "./header.css"



const Header = ({ location, setLoction, searchSehir }) => {

    return (
        <div className="header">
            <FormInput location={location} setLoction={setLoction} searchSehir={searchSehir} />
        </div>
    )
}

export default Header