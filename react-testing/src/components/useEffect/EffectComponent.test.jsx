import { act, render, screen, waitFor } from '@testing-library/react';
import EffectComponent from './EffectComponent';
import { describe, it, expect, jest, beforeEach } from '@jest/globals';

// Mock setTimeout to control timing in tests
jest.useFakeTimers();

describe('EffectComponent', () => {
    beforeEach(() => {
        jest.clearAllTimers();
    });

    it('should display empty text initially', () => {
        act(() => render(<EffectComponent />));
        
        expect(screen.getByRole('text')).toBeInTheDocument();
    });

    it('should display updated text after effect runs', async () => {

        act(() => render(<EffectComponent />));
        
        // Initially should show empty text
        expect(screen.getByRole('text')).toBeInTheDocument();
        
        act(() => {
            // Fast-forward timers to trigger the setTimeout
            jest.advanceTimersByTime(1000);
        })
        
        // Wait for the state update
        await waitFor(() => {
            expect(screen.getByText('Updated!')).toBeInTheDocument();
        });
    });

    it('should update text after 1 second', async () => {
        act(() => render(<EffectComponent />));
        
        // Should start with empty text
        expect(screen.getByRole('text')).toBeInTheDocument();
        
        // Advance time by 999ms - should still be empty
        jest.advanceTimersByTime(999);
        expect(screen.getByRole('text').textContent).toEqual('');
        
        // Advance time by 1ms more - should now show "Updated!"
        act(() => {
            jest.advanceTimersByTime(1);
        });
        
        await waitFor(() => {
            expect(screen.getByText('Updated!')).toBeInTheDocument();
        });
    });

    it('should only run effect once due to empty dependency array', async () => {
        // const { rerender } = render(<EffectComponent />);
        let rerender;
        act(() => {
            rerender = render(<EffectComponent />).rerender;
        })
        
        // Advance time to trigger the effect
        act(() => {
            jest.advanceTimersByTime(1000);
        })
        
        await waitFor(() => {
            expect(screen.getByText('Updated!')).toBeInTheDocument();
        });
        

        // Rerender the component
        act(() => {
            rerender(<EffectComponent />);
        });
        
        // Should still show "Updated!" (effect shouldn't run again)
        expect(screen.getByText('Updated!')).toBeInTheDocument();
    });
});
