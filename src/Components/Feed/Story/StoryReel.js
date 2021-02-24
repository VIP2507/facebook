import React from 'react';
import './StoryReel.css'
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="image/b.jpg"
                   profileSrc="image/aa.jpeg"
                   title="Spidy action"/>
            <Story image="image/spidy.jpg"
                    profileSrc="image/bb.jpeg"
                    title="Spidy look"/>
            <Story image="image/a.jpg"
                    profileSrc="image/cc.jpeg"
                    title="groot"/>
            <Story image="image/c.jpg"
                    profileSrc="image/dd.jpeg"
                    title="Black Spidy"/>
            <Story image="image/d.jpg"
                    profileSrc="image/ee.jpeg   "
                    title="flying Spidy"/>
            
        </div>
    )
}

export default StoryReel;
