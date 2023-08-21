import React from 'react'
import "./Accordion.scss"
const Accordion = () => {
  return (
    <main>
        <section id="test-1">
            <a href='#test-1'>Test 1 <span className='a11y-hidden'>Open</span></a>
            <a href='#'>Test 1 <span className='a11y-hidden'>Close</span></a>
            <div className='content'>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste sed velit ipsa in? 
                    Provident enim inventore nam numquam id itaque cumque repellendus delectus dicta error. 
                    Doloremque repellendus inventore ad?
                </div>
            </div>
        </section>
        <section id="test-2">
            <a href='#test-2'>Test 1 <span className='open-accordion'></span></a>
            <a href='#'>Test 1 <span className='close-accordion'></span></a>
            <div className='content'>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste sed velit ipsa in? 
                    Provident enim inventore nam numquam id itaque cumque repellendus delectus dicta error. 
                    Doloremque repellendus inventore ad?
                </div>
            </div>
        </section>
    </main>
)
}

export default Accordion