import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'
import { describe, it, expect, beforeEach } from 'vitest'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns initial value when storage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    expect(result.current[0]).toBe('initial')
  })

  it('saves value to localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    act(() => {
      result.current[1]('updated')
    })
    
    expect(result.current[0]).toBe('updated')
    expect(JSON.parse(localStorage.getItem('test-key')!)).toBe('updated')
  })

  it('loads value from localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('stored'))
    
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))
    
    expect(result.current[0]).toBe('stored')
  })

  it('handles complex objects', () => {
    const obj = { name: 'Test', value: 123 }
    const { result } = renderHook(() => useLocalStorage('test-key', obj))
    
    act(() => {
      result.current[1]({ name: 'Updated', value: 456 })
    })
    
    expect(result.current[0]).toEqual({ name: 'Updated', value: 456 })
  })

  it('handles arrays', () => {
    const arr = [1, 2, 3]
    const { result } = renderHook(() => useLocalStorage('test-key', arr))
    
    act(() => {
      result.current[1]([4, 5, 6])
    })
    
    expect(result.current[0]).toEqual([4, 5, 6])
  })
})
