import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";

export const Layout = ({children}) => {
  return (
    <> 
        <Nav/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}
