import { describe, it, expect, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm2 from './ControlledForm2';
import { getUser } from './api';

jest.mock('./api', () => ({
  getUser: jest.fn((data) => Promise.resolve({ email: data}))
}));

describe('Controlledform2', () => {
    it('submits email correctly', () => {
      render(<LoginForm2 />);
    
      const input = screen.getByPlaceholderText('Email');
      fireEvent.change(input, { target: { value: 'test@example.com' } });

      fireEvent.click(screen.getByText('Login'));
      expect(getUser).toHaveBeenCalledWith('test@example.com');
    });

});

