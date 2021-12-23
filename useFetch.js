// import React from 'react'

import { useEffect, useRef, useState } from "react"

// ========================================
const useFetch = (url) => {

	// const dataObj = [
	// 	{ autor: "yo 1", quote: "algo bonito" },
	// 	{ autor: "yo 2", quote: "algo feo" },
	// 	{ autor: "yo 3", quote: "algo bonito" },
	// 	{ autor: "yo 4", quote: "algo bonito" },
	// ]

	const [state, setstate] = useState({ data: null, loading: true, error: null })
	const isMounted = useRef(true)

	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])

	useEffect(() => {
		setstate({ data: null, loading: true, error: null })
		// --------
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				// setTimeout(() => {
				if (isMounted.current) {
					setstate({
						loading: false,
						error: null,
						data
					})
				} else {
					console.log("setstate no llamado");
				}
				// }, 4000);
			})
			.catch(err => { setstate({ data: null, loading: false, error: "No se pudo bro. :(" }) })
		// setstate({
		// 	loading: false,
		// 	error: null,
		// 	data: [dataObj[url]]
		// })
		// console.log(dataObj[url]);

	}, [url])
	// ----------------------
	return state
}
// ========================================
export default useFetch