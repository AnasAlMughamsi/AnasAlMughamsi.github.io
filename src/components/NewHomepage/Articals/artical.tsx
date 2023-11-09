import { articals } from "../data"
import "./artical.scss"



const Artical = () => {
  
    return (
    <section className="artical_section">
        {articals.map((artical) => (
            <div key={artical.id} className="artical_card">
                <div>{artical.image}</div>
                <div>
                    <h2>0{artical.id}</h2>
                    <h4>{artical.title}</h4>
                    <p>{artical.description}</p>
                </div>
            </div>
        ))}

    </section>
  )
}

export default Artical