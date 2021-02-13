import React from 'react'
import { useAppContext } from '../../context/AppContext'
import Loading from '../Loader/Loading'
import Search from '../Search/Search'
import VideoInfo from '../VideoInfo/VideoInfo'

const Home:React.FC = () => {
    const {loading} = useAppContext()
    return (
        <section>
            <Search/>
            {loading && <Loading/>}
            <VideoInfo/>
        </section>
    )
}

export default Home
