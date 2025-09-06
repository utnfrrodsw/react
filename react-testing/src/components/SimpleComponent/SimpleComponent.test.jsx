import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import SimpleComponent from './SimpleComponent';

describe('SimpleComponent', () => {
    it('should render', () => {
        render(<SimpleComponent name="John Connor" />);

        expect(screen.getByText('Hello, John Connor!')).toBeInTheDocument();
    });
})