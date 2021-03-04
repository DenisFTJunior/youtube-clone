import Head from 'next/head'
import Header from '../components/geral/header'
import Menu from "../components/geral/menu"
import VideoList from "../components/index/videoList"
import style from "../styles/Home.module.css"
import {GetStaticProps, InferGetStaticPropsType} from "next"
import { VideoModel } from "../shared/interfaces/videoInterface"

export default function index({videos}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <Head>
        <title>YouTube</title>
      </Head>

      <Header/>
      <Menu/>
      <main className={style.main}>

        <div className ={style.containerVideos}>
          <VideoList videos = {videos}/>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async (context) =>{
  const res = await fetch("http://localhost:3000/api/sendVideo")
  const videos:VideoModel[] = await res.json()
  if (!videos) {
    return {
      notFound: true,
    }
  }
  return {
    props: {videos}
  }
}
