import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "./Loader"
import { convertDate, convertViews } from "../utils/convertStuff"
import { DisLikeIcon, Like_svg, ReplyIcon } from "../icons"
import Des from '../components/Des'
import VideoDescription from "../components/Des"
import SafeImage from "./SafeImage"

function Comments({ vId }) {

	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)
	const [initLoading, setInitLoading] = useState("init")
	const [nextPageToken, setNextPageToken] = useState("")

	const fetchComments = (async () => {
		if (loading) return
		setLoading(true)
		if (initLoading === "init") setInitLoading(true)
		try {
			const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/home/com?pageToken=${nextPageToken || ""}`, { vId })
			setComments(prev => [...prev, ...res.data.data.comments])
			console.log("comm --->", res.data);
			setNextPageToken(res.data.data.nextPageToken)

		} catch (error) {
			console.error('Failed to fetch suggestion:', error.message)
		}
		finally {
			setLoading(false)
			setInitLoading(false)
		}
	})

	useEffect(() => {
		setNextPageToken("")
		setComments([])
		fetchComments()
	}, [vId])

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && nextPageToken && !loading) {
				fetchComments()
			}
		})
		const sentinel = document.getElementById("infiScroll")

		if (sentinel) observer.observe(sentinel)

		return () => observer.disconnect()
	}, [nextPageToken, loading])

	return initLoading ? <Loader /> : (
		<>
			<div className='pt-9'>
				<h2>Comments </h2>
			</div>
			<div>
				<div className='py-2'>
					{comments.map((comment) => (
						<div key={comment.id} className='py-5' >
							<div className='flex'>
								{comment?.snippet.topLevelComment?.snippet.authorProfileImageUrl
									? <div className='min-h-12 max-h-12 min-w-12 max-w-12 rounded-full overflow-hidden'>
										<SafeImage
											src={comment?.snippet.topLevelComment?.snippet.authorProfileImageUrl}
											alt="product"
											className="border border-[var(--highlight)] rounded-full"
											place={"user"}
										/>
									</div>
									: <div className='min-h-12 max-h-12 min-w-12 max-w-12 bgGray rounded-full' />
								}
								<div className='pl-2 max-w-[dvw-.3rem] spC overflow-x-auto'>
									<div className='flex gap-2 items-center pb-2.5'>
										<div className='smallT '>
											{comment?.snippet.topLevelComment?.snippet.authorDisplayName}
										</div>
										<span className='ssmallT gText'>{convertDate(comment?.snippet.topLevelComment?.snippet.publishedAt)}</span>
									</div>
									<VideoDescription text={comment?.snippet.topLevelComment?.snippet.textOriginal} />
								</div>
							</div>
							{/* <div className='flex gap-4 pl-14 py-1  smallT'>
								<div className='flex items-center'>
									<button
										className='h-8 flex items-center gap-2 px-4 rounded-l-full bgGray'
									>
										<Like_svg stroke='var(--svgHi)' />
									</button>
									<div className='bgGray h-full py-1 '><div className='vert h-full'></div></div>
									<button
										className='h-8 flex items-center gap-2 px-4 rounded-r-full bgGray'
									>
										<DisLikeIcon stroke='var(--svgHi)' />
									</button>
								</div>
								<div className='flex items-center '>
									{comment?.snippet?.totalReplyCount ?
										<>
											<button className={`flex items-center gap-2 px-4 py-1 bgGray ${comment?.snippet?.canReply ? "rounded-l-full" : "rounded-full"}`}>
												<ReplyIcon fill='var(--svgHi)' />
												{`${convertViews(comment?.snippet?.totalReplyCount) || ""}`}
											</button>
										</> : ""
									}
									{comment?.snippet?.totalReplyCount && comment?.snippet?.canReply ? <div className='bgGray h-full py-1 '><div className='vert h-full'></div></div> : ""}
									{comment?.snippet?.canReply ?
										<>
											<button className={`h-8 flex items-center gap-2 px-4 py-1.5 ${comment?.snippet?.canReply ? "rounded-full" : "rounded-r-full"} bgGray `}>
												Reply
											</button>
										</> : ""
									}
								</div>
							</div> */}
						</div>
					))}
					{comments.length ? <div id='infiScroll' className='h-px mb-2 '></div> : ""}
				</div>
			</div>
		</>
	)
}

export default Comments
