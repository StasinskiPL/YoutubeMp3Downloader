import React from 'react'
import { useAppContext } from '../../context/AppContext'
import Footer from '../Footer/Footer'
import Loading from '../Loader/Loading'
import Search from '../Search/Search'
import SimilarVideos from '../SimilarVideos/SimilarVideos'
import VideoInfo from '../VideoInfo/VideoInfo'

const Home:React.FC = () => {
    const {loading} = useAppContext()
    return (
        <>
        <main>
            <Search/>
            {loading && <Loading/>}
            <VideoInfo/>
            <SimilarVideos/>
        </main>
            <Footer/>
            </>
    )
}

export default Home
