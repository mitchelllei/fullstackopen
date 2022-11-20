import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

describe('<Togglable />', () => {
  let blog = {
    title: 'test',
    author: 'test test',
    url: 'test test test',
    likes:10

  }

  let mockBlog  = blog

  test('display author and title but not url and likes by default',() => {
    const component = render(
      <Blog blog = {mockBlog} />
    )
    expect(component.container).toHaveTextContent(
      'test - test test'
    )
  })

  test('renders url and likes after clicking', () => {
    const component = render(
      <Blog blog = {mockBlog} />
    )
    const button = component.getByText('show')
    fireEvent.click(button)
    expect (component.container).toHaveTextContent('test test test')
    expect (component.container).toHaveTextContent('10')

  })
  

})

// beforeEach(() => {
//   container = render(
//     <Togglable buttonLabel="show...">
//       <div className="testDiv" >
//             togglable content
//       </div>
//     </Togglable>
//   ).container
// })
