import React from 'react'
import { Card } from './Card'
export default function ProfileBody(props){
	const { socialStats, profileImg, card, infoParagraphs } = props
	return (
	<div className="body">
		<ProfilePic src={ profileImg }/>
	    <AddButton />

	    { socialStats.map( stat => <BodyStat key={ stat.name } type={ stat.name } value={ stat.value }/>)}
	    
	    <div className="u-clearfix"></div>
	    <BodyInfo paragraphs={infoParagraphs}/>
	    <MoreButton />
	    <Card card={ card }/>
	  </div>
		)
}


export const ProfilePic = ({src})=>(
    <img src={src} alt="Hugh Jackman" className="body-image" />
 )

export const AddButton = (props)=>(
	<div className="body-action-button u-flex-center">
      <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </div>
)

export const BodyStat = (props)=>{
	const { type, value } = props
	return <span className="body-stats">{ type } <span>{ value }</span></span>
}

export const BodyInfo = (props)=>{
	const { paragraphs } = props
	return (
		<div className="body-info">
      { paragraphs.map(p=><p key={p}> { p } </p>) }
    </div>
    )
}

export const MoreButton = (props)=>{
	return (
	<div className="body-more">
      <span></span>
      <span></span>
      <span></span>
    </div>)
}