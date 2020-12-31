import React from "react"
import { FluidObject } from "gatsby-image"
import Img from "gatsby-image"
import styled from "styled-components"
import { BOLD_FONT_WEIGHT } from "../constants/fonts"
import { M1, M2, M3, M4, M5, M6 } from "../constants/measurements"

const EntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const EntryText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`

const EntryTitle = styled.p`
  font-weight: ${BOLD_FONT_WEIGHT};
  font-size: ${M3};
  margin: 0;
`

const EntrySubtitle = styled.p`
  color: #807878;
  font-size: 1rem;
  margin: 0;
`

const EntryContent = styled.p<{}>`
  li {
    margin-bottom: 0rem;
    overflow-wrap: normal;
  }
`

interface EntryProps {
  title: string
  image: FluidObject
  subtitle: string
  content: string
}

const Entry = ({ title, image, subtitle, content }: EntryProps) => {
  const IMG_SIZE = "5rem"
  return (
    <EntryContainer>
      <div>
        <Img fluid={image} style={{ width: IMG_SIZE, height: "auto" }} />
      </div>
      <EntryText>
        <EntryTitle>{title}</EntryTitle>
        <EntrySubtitle>{subtitle}</EntrySubtitle>
        <EntryContent dangerouslySetInnerHTML={{ __html: content }} />
      </EntryText>
    </EntryContainer>
  )
}

export default Entry