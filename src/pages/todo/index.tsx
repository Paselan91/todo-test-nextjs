// import styled from 'styled-components'
import { css } from "@emotion/react"
import Link from 'next/link'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Todo() {
  const Center = css({
    color: 'red',
  })
  return (
    <Container maxWidth="sm">
      <h1 css={Center}>This is TODO Test Page</h1>
      <Link href="/">
        <a>Back To Top</a>
      </Link>
      <Card sx={{ minWidth: 275, mt: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  )
}
