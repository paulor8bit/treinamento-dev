import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import TechList from '~/components/TechList'

discribe('TechList component', () => {
    it('new tech', () => {
        const {getByText, getByTestId} = render(<TechList />);

        fireEvent.click(getByText('Adcionar'))

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    })
})