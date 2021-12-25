import styled from 'styled-components'
import Link from 'next/link'

export default function StyleTest() {
  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `

  // Use Title and Wrapper like any other React component – except they're styled!
  return (
    <Wrapper>
      <Title>This is Css Test Page</Title>
      <Link href="/">
        <a>Back To Top</a>
      </Link>
    </Wrapper>
  )
}
