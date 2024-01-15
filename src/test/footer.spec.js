import { render, screen} from '@testing-library/react';
import Footer from '../Components/footer/Footer';
import {render as renderer, unmountComponentAtNode } from 'react-dom'
import "@testing-library/jest-dom/extend-expect";

describe("testing the footer component", ()=>
{
    let element;
    beforeEach(()=>{
        element=document.createElement("div")
        document.body.appendChild(element)
    })

    afterEach(()=>{
        unmountComponentAtNode(element)
        element.remove()
        element=null
    })


    test('should have text StackNews in footer ', () => { 

        render(<Footer/>)
        expect(screen.findByText("StackNews")).toBeInTheDocument
    })

    test('should have year 2022 in footer', () => { 
        render(<Footer/>)
        expect(screen.findByText("2022")).toBeInTheDocument
     })

     test('should have h6 in footer', () => { 
        renderer(<Footer/>,element)
        const head_count = element.getElementsByTagName("h6").length
        expect(head_count).toBe(1)
      })

      
     test('should have 5 social anchor in footer', () => { 
        renderer(<Footer/>,element)
        const head_count = element.getElementsByTagName("a").length
        expect(head_count).toBe(5)
      })

      test('should have 5 social anchor in footer', () => { 
        renderer(<Footer/>,element)
        const links = element.getElementsByTagName("i")
        for (let index=0; index < links.length; index++)
        {
            expect(links[index]).toHaveClass('fa')
        }
      })
})
export default Footer;