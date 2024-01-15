
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Components/card/Card';
import "@testing-library/jest-dom/extend-expect";
import { getByTestId } from '@testing-library/react';
describe('this is testing of component card', () => { 

    test('should have read later text in the button', () => { 
        render(<Card/>)
        expect(screen.getByTestId('read-later')).toHaveTextContent("Read later..")
     })

     test('should have card-body class in card', () => { 
        render(<Card/>)
        expect(screen.getByTestId('card-body')).toHaveClass('card-body');
      })

      test('should have Read later.. text in the card', () => { 
        render(<Card/>)
        expect(screen.getByText('Read later..')).toBeInTheDocument
       })

    //    test('should call adddataHandeller callback', () => { 
    //     const adddataHandellertest = jest.fn()
    //     const { getByTestId }= 
    //     render(<Card adddataHandeller={adddataHandellertest}/>);
    //     fireEvent.click(getByTestId('read-later'))

    //     expect(adddataHandellertest).toHaveBeenCalled()
    //    })

   

   //   test('should render card url correctly', () => { 
   //    render(<Card author='www.google.com'/>)
   //    expect(screen.getByTestId('url').textContent).toBe('www.google.com')
   // })
 })




export default Card;