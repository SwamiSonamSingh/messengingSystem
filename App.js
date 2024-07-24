import React, { useState } from 'react'
import WhatsAppSearch from './src/components/WhatsAppSearch'
import ChatSection from './src/components/ChatSection'

const App = () => {
    const [profile, setProfile] = useState({})
    console.log(profile);
    return (
        <div style={{ display: 'flex' }}>
            <WhatsAppSearch
                setProfile={setProfile}
            />
            <ChatSection
                profile={profile}
            />
        </div>
    )
}

export default App
