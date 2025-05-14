import Logo from "../assets/image.png"

export const Header = () => {
  return (
   <header>
    <div className="logo">
         <img src={Logo} alt="Tickup" />
   <span>Tickup</span>


    </div>
    <div className="themeSelector">
        <span className="light"></span>
        <span className="dark"></span>
        <span className="medium activeTheme"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
    </div>
   
   </header>
  )
}
