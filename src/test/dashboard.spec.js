import { render, screen } from '@testing-library/react';
import Dashboard from '../Components/dashboard/Dashboard';
import "@testing-library/jest-dom/extend-expect";

describe('this is to test the functionality of Dashboard component', () => { 

    test('should have class container', () => { 
        render(<Dashboard/>)
        expect(screen.getByTestId('container')).toHaveClass('container');
     })
 })

export default Dashboard;