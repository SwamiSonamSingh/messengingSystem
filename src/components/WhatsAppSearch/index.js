import React, { useEffect, useState } from 'react'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import './whatsApp.style.scss'

const data = [
    {
        id: 1,
        name: "Pratyay Vats",
        readStatus: true,
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/425185457_316488617713252_574570448468214675_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDUDupES3fvIfIW23vHJuoOJSEJOfgpVnpuCZWLKV94V&oe=66AA7575&_nc_sid=e6ed6c&_nc_cat=109',
        recentMessage: 'Hello how are you ?',
        chats: [
            {
                type: 'received',
                message:'Khana kya banwa rhe hain ?'
            },
            {
                type: 'sent',
                message:'Rajma roti'
            },
            {
                type: 'received',
                message:'Mere liye 2 roti banwa ligiega'
            },
            {
                type: 'sent',
                message:'Thik hai'
            },
            {
                type: 'sent',
                message:'Aur kuchh banwana hai ?'
            },
            {
                type: 'sent',
                message:'Kuchh special chij'
            },
            {
                type: 'received',
                message:'Nhi g aur to kuchh nhi'
            },
            {
                type: 'sent',
                message:'Ok sir kaha pahuce'
            },
            {
                type: 'received',
                message:'Bs aadha ghnata me aa rhe hain'
            },
            {
                type: 'sent',
                message:'Thik hai aaiye'
            },
            {
                type: 'sent',
                message:'Gym chaliyega n'
            },
            {
                type: 'received',
                message:'Ha abhi tk to plan hai hi'
            },
            {
                type: 'sent',
                message:'Thik hai aaiye chala jaaega'
            }
        ]
    },
    {
        id: 11,
        name: 'Ritesh HRT',
        readStatus: false,
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/328160206_820145619788908_4468126140864240619_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIFWDh4U_SCJ86P5rxIg5s2ueHzuuzfc10N4NT5e0O6r6&oe=66AB27BC&_nc_sid=e6ed6c&_nc_cat=101',
        recentMessage: 'Bhai aaj megha se milne ja rhe hain',
        chats:[]
    },
    {
        id: 14,
        name: 'Saanu Bro',
        readStatus: true,
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/328738662_1272787190366142_1022837915991806120_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIGImYZWQlYABEHB90MbhQ-mB-NppjrT0ZCnrOuMtFi51&oe=66AB07F7&_nc_sid=e6ed6c&_nc_cat=101',
        recentMessage: 'Bro ye namaste react ka kya scene hai',
        chats:[]
    },
    {
        id: 2,
        name: "Aman Gupta",
        readStatus: false,
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/437178980_1519241698669135_6125121018202549083_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDeRUoFaIEjuWubogqYEqt9kMK18mcM2rr5S-hikPcGP&oe=66A9F6F1&_nc_sid=e6ed6c&_nc_cat=104',
        recentMessage: 'Office chalna hai kya',
        chats:[]
    },
    {
        id: 3,
        name: "Satya Prakash",
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/441393380_1648558435983518_468748817043603423_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDOYiOzC5qwzvjm3r34yfwRsbd-I9FRU6vSnjHfgwQ2a&oe=66AA88A8&_nc_sid=e6ed6c&_nc_cat=111',
        readStatus: true,
        recentMessage: 'Kya haal hai baba',
        chats:[]
    },
    {
        id: 4,
        name: "Shivendra Avizva",
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/436979937_1145384880009671_1092649585512975281_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIFg8XIWkM-kLEHvGpYqshI2QeqCF7QTWwxCPmVSDIFYe&oe=66A38D0A&_nc_sid=e6ed6c&_nc_cat=107',
        readStatus: true,
        recentMessage: 'Chicken khila rahe hain g',
        chats:[]
    },
    {
        id: 5,
        name: "Kush Avizva",
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/429285833_7286034118142900_7421023989718263967_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIDl9DHNrsBL8ENrAte4VloRMOpHzbMSbbIdwf49LXMOk&oe=66AA961A&_nc_sid=e6ed6c&_nc_cat=102',
        readStatus: false,
        recentMessage: 'Bhai integrate kar le yaar',
        chats:[]
    },
    {
        id: 53,
        name: "Avinash G",
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/327531567_1637041830097090_3095491549246791683_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIPzW2-vyC7MQKAkZ8noQJLyX0e1UkrmZB8Sd7CJibyoy&oe=66AB09E6&_nc_sid=e6ed6c&_nc_cat=109',
        readStatus: false,
        recentMessage: 'Abhi iska cost 35000 pad rha hai',
        chats:[]
    },
    {
        id: 6,
        name: "Madhur Bhai",
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/363003303_208193045203991_3937588108718371574_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICHkgCQqWWCJCFIiupNmLLqH1F3slwnSJlLTdtRwCPim&oe=66AA6E3B&_nc_sid=e6ed6c&_nc_cat=107',
        readStatus: false,
        recentMessage: 'Bhai tickets ho gyi ?',
        chats:[]
    },
    {
        id: 7,
        name: "Mayank Gulia",
        readStatus: false,
        avatar: '',
        recentMessage: 'Aaaj to mai ghar aaya hua swami',
        chats:[]
    },
    {
        id: 70,
        name: "Saket GZSCCET",
        readStatus: true,
        avatar: 'https://media-del2-1.cdn.whatsapp.net/v/t61.24694-24/165118224_379741684180961_5259621829122856617_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIJIM9wqedeWv9ngrZnFraKB6QliBU21SVdUEZUbwN4ry&oe=66AB2106&_nc_sid=e6ed6c&_nc_cat=104',
        recentMessage: 'Arey location bhejo chota',
        chats:[]
    }
]

const primaryAction = [
    {
        name: 'ai',
        image:'https://static.whatsapp.net/rsrc.php/v3/ye/r/W2MDyeo0zkf.png'
    },
    {
        name: 'addChats',
        svg:<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg>
    },
    {
        name: 'dropdown',
        svg:<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
    }
]

const filterAction = [
    {
        name: 'all',
        title: 'All'
    },
    {
        name: 'unread',
        title: 'Unread'
    },
    {
        name: 'read',
        title: 'Read'
    }
]

const NoData = () => {
    return (
        <div className='whats-app-search__noData'>
            <div className='whats-app-search__noData__avatar'><svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212"><title>default-user</title><path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path><g><path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path><path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path></g></svg></div>
            <div className='whats-app-search__noData__title'>No Contact Found</div>
        </div>
    )
}

const WhatsAppSearch = (props) => {
    const {setProfile}=props
    const [focus, setFocus] = useState(false)
    const [serachedData, setSearchedData] = useState(data)
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [searchKey, setSearchKey] = useState('')
    const handleInputChange = (value) => {
        setSearchKey(value)
        const _filteredData = data.filter((data) => {
            if (data.name.toLocaleLowerCase().includes(value.toLowerCase())) {
                return data
            }
        })
        setSearchedData(_filteredData)
    }
    const handleFilter = (action) => {
        if (action === 'all') {
            setSearchedData(data)
            setSelectedFilter(action)
        } else if (action === 'unread') {
            const filterUneadData = data.filter((data) => {
                return !data.readStatus
            })
            setSelectedFilter(action)
            setSearchedData(filterUneadData)
        } else {
            const filterUneadData = data.filter((data) => {
                return data.readStatus
            })
            setSelectedFilter(action)
            setSearchedData(filterUneadData)
        }
    }
    const handleClearClick = () => {
        setSearchedData(data)
        setSearchKey('')
    }
    return (
        <div className='whats-app-search'>
            <div className='whats-app-search__heading'>
                <div className='whats-app-search__heading__title'>Chats</div>
                <div className='whats-app-search__heading__actions'>
                    {primaryAction.map((_primaryAction, index) => {
                        return (
                            <div className='whats-app-search__heading__actions__wrapper' key={index}>
                                {_primaryAction.image ? <img src={_primaryAction.image} /> : _primaryAction.svg}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='whats-app-search__input'>
                <div className='whats-app-search__input__icon'>
                    {!focus ? <SearchRoundedIcon fontSize='small' /> : <ArrowBackRoundedIcon fontSize='small' color='success' />}
                </div>
                <input
                    className='whats-app-search__input__field'
                    value={searchKey}
                    placeholder='Search By Name'
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                {searchKey.length !== 0 ? <div className='whats-app-search__input__clear' onClick={() => handleClearClick()}>x</div> : ''}
            </div>
            <div className='whats-app-search__action'>
                {filterAction.map((_action, index) => {
                    const className = _action.name === selectedFilter ? `whats-app-search__action--${_action.name}__selected` : `whats-app-search__action--${_action.name}`
                    return (
                        <div
                            className={className}
                            key={index}
                            onClick={() => handleFilter(_action.name)}
                        >
                            {_action.title}
                        </div>
                    )
                })}
            </div>
            {serachedData.length === 0 ? <NoData /> : <div className='whats-app-search__outerWrapper'>
                {serachedData.map((chat, index) => {
                    return (
                        <div key={index} className='whats-app-search__outerWrapper__chatSection'
                            onClick={()=>setProfile(chat)}
                        >
                            <div className='whats-app-search__outerWrapper__chatSection__left'>
                                <div className='whats-app-search__outerWrapper__chatSection__left__avatar'>
                                    {chat.avatar ? <img src={chat.avatar} className='whats-app-search__outerWrapper__chatSection__left__avatar__image' /> :
                                        <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212"><title>default-user</title><path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path><g><path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path><path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path></g></svg>}
                                </div>
                            </div>
                            <div className='whats-app-search__outerWrapper__chatSection__right'>
                                <div className='whats-app-search__outerWrapper__chatSection__right__name'>{chat.name}</div>
                                <div className='whats-app-search__outerWrapper__chatSection__right__message'>
                                    <DoneAllRoundedIcon fontSize='small' style={{ fill: chat.readStatus ? 'rgb(0, 127, 255)' : '#dbdbdb' }} />
                                    <div className='whats-app-search__outerWrapper__chatSection__right__message__text'>{chat.recentMessage}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default WhatsAppSearch
