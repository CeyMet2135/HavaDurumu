import React from 'react'
import "./city_card.css"
const CityCard = ({ cities }) => {

    // console.log(cities);

    return (
        <div className="card_content">

            {
                cities.length > 0 ?

                    cities.map((city, index) => {
                        return (
                            <div key={index} className="card">
                                <p>{city?.name}</p>
                                <p>{city?.main?.temp} C</p>
                            </div>
                        )
                    })
                    :

                    <div className="uyari">
                        <p>
                            Please enter the city name .....
                        </p>
                    </div>
            }

        </div>
    )
}

export default CityCard

