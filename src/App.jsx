import bgDesktop from "/images/bg-main-desktop.png"
import bgMobile from "/images/bg-main-mobile.png"
import cardFront from "/images/bg-card-front.png"
import cardBack from "/images/bg-card-back.png"
import iconCard from "/images/card-logo.svg"
import Successpage from "./components/Successpage"
import { useState } from "react"

export default function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleClick = (e) => {
    e.preventDefault()
    setIsSuccess(!isSuccess)
  }
  const [cardName, setCardName] = useState("jane appleseed")
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000")
  const [cardMonth, setCardMonth] = useState("00")
  const [cardYear, setCardYear] = useState("00")
  const [cardCvc, setCardCvc] = useState("000")

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    if (name === "nameCard") {
        setCardName(value);
    }
    else if (name === "numCard") {
        setCardNum(value);
    }
    else if (name === "month") {
        if (value >= 1 && value <= 12) {
            setCardMonth(value)
        }
    }
    else if (name === "year") {
        if (value >= 1 && value <= 2024) {
            setCardYear(value)
        }
    }
    else if (name === "cvc") {
        setCardCvc(value)
    }
}

  return (
    <main className="md:grid grid-cols-2">
      <section className="relative">
        <div className="">
          <img src={bgDesktop} alt="" className="hidden md:block" />
          <img src={bgMobile} alt="" className="w-full md:hidden" />
        </div>
        <div className="flex flex-col-reverse md:grid absolute top-0 md:top-20 left-14 md:left-56 gap-4">
          <div style={
            {
              backgroundImage: `url(${cardFront})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }
          } className="p-4 w-72 rounded-lg text-white -mt-16 md:mt-auto">
            <img src={iconCard} alt="" className="w-20 mb-4" />
            <span className="font-bold">{cardNum}</span>
            <div className="flex justify-between">
              <h1 className="font-bold uppercase">{cardName}</h1>
              <span>{cardMonth}/{cardYear}</span>
            </div>
          </div>
          <div
            style={
              {
                backgroundImage: `url(${cardBack})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }
            } className="py-14 w-72 rounded-lg text-white ml-10">
            <span className="float-end p-4">{cardCvc}</span>
          </div>


        </div>

      </section>
      {!isSuccess ?
        <div className="flex flex-col p-8 mt-32 md:max-w-md">
          <label htmlFor="">CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g Jane Appleseed"
            name="nameCard"
            onChange={handleChange}
            value={cardName} />
          <label htmlFor="">CARD NUMBER</label>
          <input type="number" placeholder="e.g 1234 5678 9123 0000"
            name="numCard"
            onChange={handleChange}
            value={cardNum} />
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <label htmlFor="">EXP .DATE (MM/YY)
              </label>
              <div className="flex flex-row md:w-60 gap-2" >
                <input type="number" placeholder="MM" className="w-1/2"
                  min={1}
                  max={12}
                  name="month"
                  onChange={handleChange}
                  value={cardMonth} />
                <input type="number" placeholder="YY" className="w-1/2"
                  min={1}
                  max={2024}
                  name="year"
                  onChange={handleChange}
                  value={cardYear} />
              </div>

            </div>
            <div className="flex flex-col">
              <label htmlFor="">CVC</label>
              <input type="number" placeholder="e.g 123"
                min={0}
                max={999}
                name="cvc"
                onChange={handleChange}
                value={cardCvc} />
            </div>
          </div>
          <button className="mt-4 text-white bg-violet-950 cursor-pointer p-2 rounded-lg hover:bg-violet-400"
            onClick={(e) => handleClick(e)}>Confirm</button>
        </div> :
        <Successpage handleClick={handleClick} />
      }


    </main>
  )
}