import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const Homepage = () => {

  const theme = createMuiTheme({
    Typography: {
      fontFamily: 'Oswald, sans-serif'
    }
  })

  return (
    <React.Fragment>
      <div>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}>
          <Typography variant="h1" color="inherit">
            ASPIRE.
          </Typography>
          <div>
            <ThemeProvider theme={theme}>
              <p>Will you follow your dreams?</p>
            </ThemeProvider>
            <IconButton style={{ position: 'relative', left: '125px' }}><Link to={'/signup'}><KeyboardArrowRight size="large" /></Link></IconButton>
          </div>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Homepage
