import { render, fireEvent } from "@testing-library/react"
import Modal from 'react-modal';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }));

const setState = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState];

test('modal shows the children and a close button', () => {
    // Arrange
    const handleClose = jest.fn()
  
    // Act
    const {getByText} = render(
      <Modal isOpen={setState(true)} onRequestClose={handleClose}>
        <div>test</div>
      </Modal>,
    )
    // Assert
    expect(getByText('test')).toBeTruthy()
  
    // Act
    fireEvent.click(getByText(/close/i))
  
    // Assert
    expect(handleClose).toHaveBeenCalledTimes(1)
  })