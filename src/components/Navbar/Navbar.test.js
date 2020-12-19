import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import Navbar from './Navbar'

test("Navigation render", ()=>{
    render(
        <Navbar />
    )
    expect(screen.getByText(/Watch Trailer/i)).toBeInTheDocument()
    
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Cast/i), leftClick)
    expect(screen.getByText(/Walter White/i)).toBeInTheDocument()
})
