import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, jest } from '@jest/globals';
import ThemeComponent from './ThemeComponent';

// import { useTheme } from './useTheme';
// jest.mock('./useTheme');

describe('ThemeComponent', () => {
    it('should render', () => {
        // useTheme.mockReturnValue({theme: 'dark', toggle: jest.fn()});
        // const { rerender } = render(<ThemeComponent />);
        render(<ThemeComponent />);
        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText('Tema actual aplicado: dark')).toBeInTheDocument();

        // useTheme.mockReturnValue({ theme: 'light', toggle: jest.fn()});
        // rerender(<ThemeComponent />)
        fireEvent.click(screen.getByRole('button'));

        expect(screen.getByText('Tema actual aplicado: light')).toBeInTheDocument();
    });
});