
import "./form.css"
import { toast } from 'react-toastify';

const FormInput = ({ location, setLoction, searchSehir }) => {




    const search = () => {

        if (location === "") {
            return toast.error("burasi bos olaaz ....");
        }
        if (location.length <= 2) {

            return toast.error("location 3 harften kucuk olamaz");
        } else {
            searchSehir()
        }
    }


    return (
        <div className="form">

            <input
                className="input"
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLoction(e.target.value)}
            />
            <button
                onClick={() => search()}
                className=''>Search</button>
        </div>
    )
}

export default FormInput