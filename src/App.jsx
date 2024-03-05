
import { Navbar } from './components/navbar'
import {Card} from './components/Card'

export const App = () => {
    

    return(
        <section>
            <Navbar/>
            <article className="container">
                <div className="contenedor-personajes">
                        <Card />
                </div>
            </article>
        </section>
    )
}