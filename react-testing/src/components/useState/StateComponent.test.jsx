import { fireEvent, render, screen } from '@testing-library/react';
import State from './StateComponent';
import { describe, it, expect } from '@jest/globals';

describe('StateComponent', () => {
    it('should render', () => {
        render(<State />)

        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    })

    it('should increment counter', () => {
        render(<State />)

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    })
})