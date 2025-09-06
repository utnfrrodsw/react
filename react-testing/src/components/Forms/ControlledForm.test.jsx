import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './ControlledForm';
import { describe, it, expect, jest } from '@jest/globals';

describe('Controlledform', () => {
    it('submits email correctly', () => {
      const mockSubmit = jest.fn();
      render(<LoginForm onSubmit={mockSubmit} />);
    
      const input = screen.getByPlaceholderText('Email');
      fireEvent.change(input, { target: { value: 'test@example.com' } });
    
      fireEvent.click(screen.getByText('Login'));
      expect(mockSubmit).toHaveBeenCalledWith('test@example.com');
    });

});

