import React, { Component } from 'react'
import SOCIAL_PROFILES from './data/socialProfiles'


class SocialProfile extends Component {
    render() {

        const { link, image } = this.props.socialProfiles;

        return (
            <div style={{display:'inline-block', margin:10}}>
                <a href={link}><img src={image} style={{width:50 ,height:50}} alt='profiles'/></a>
            </div>
        )
    }
}

class SocialProfiles extends Component {

    render() {
        return (
            <div>
                {SOCIAL_PROFILES.map(PROFILE => {
                    return (
                        <SocialProfile key={PROFILE.id} socialProfiles={PROFILE}/>
                    )
                })}
            </div>
        )
    }

}


export default SocialProfiles

