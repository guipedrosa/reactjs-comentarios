import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Comments from './Comments'


// mount is necessary to test mouse click
// mount is necessary to test component life cycle

describe('<Comments />', () => {

    const postNewCommentMock = jest.fn()
    it('renders without crashing', () => {
        const comments = {
            1: {
                comment: 'test 1'
            },
            2: {
                comment: 'test 2'
            }
        }
        const comment = {
            comment: 'test'
        }
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.find('Comment').length).toBe(2)
    })

})