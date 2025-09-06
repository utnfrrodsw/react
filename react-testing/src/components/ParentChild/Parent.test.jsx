import { render, screen } from '@testing-library/react';
import Parent from './Parent';
import { describe, it, expect } from '@jest/globals';

describe('ParentChild', () => {
    it('passes props from parent to child', () => {
      render(<Parent />);
      expect(screen.getByText('Hello from Parent')).toBeInTheDocument();
    });
    
})
