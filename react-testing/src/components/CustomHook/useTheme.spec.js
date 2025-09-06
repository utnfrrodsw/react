import { renderHook, act } from '@testing-library/react';
import { useTheme } from './useTheme';
import { describe, it, expect} from '@jest/globals';

describe('useTheme', () => {
  it('should use default theme "light"', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('should use initial theme if provided', () => {
    const { result } = renderHook(() => useTheme('dark'));
    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme between light and dark', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggle(); // toggle to dark
    });
    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.toggle(); // toggle to light
    });
    expect(result.current.theme).toBe('light');
  });
});