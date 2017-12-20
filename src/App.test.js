import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from './App'


// mount is necessary to test mouse click
// mount is necessary to test component life cycle

describe('<App />', () => {
    const base = {
        syncState: jest.fn()
    }

    it('renders without crashing', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.length).toBe(1)
    })

    it('should have .container class', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.is('.container')).toBe(true)
    })

    it('shows comments', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.find('Comments').length).toBe(1)
    })

    it('shows new comment', () => {
        const wrapper = shallow(<App base={base} />)
        expect(wrapper.find('NewComment').length).toBe(1)
    })

    it('adds a comment with postNewComment', () => {
        const wrapper = mount(<App base={base} />)
        wrapper.instance().postNewComment({ comment: 'test' })
        // wrapper.instance().postNewComment({ comment: 'test' })
        // wrapper.instance().postNewComment({ comment: 'test' })

        const comments = Object.keys(wrapper.instance().state.comments)
        console.log(comments.length)
        expect(comments.length).toBe(1)
    })

    //Exemplos 
    /*it('outputs the <App />', () => {
        const wrapperShallow = shallow(<App />)
        const wrapperMount = shallow(<App />)
        const wrapperRender = shallow(<App />)
        console.log(wrapperRender.html())
    })*/
})
