import React from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core"
import * as muiLab from "@material-ui/lab"

const useStyles = makeStyles({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: "center",
  },
})

const Pagination = ({ pageContext }) => {
  const classes = useStyles()
  const { numberOfPages, humanPageNumber } = pageContext

  const handleChange = (_event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/page/${value}`)
  }
  return (
    <div className={classes.root}>
      <muiLab.Pagination
        variant="outlined"
        defaultPage={humanPageNumber}
        count={numberOfPages}
        onChange={handleChange}
        // size="small"
        color="primary"
        shape="rounded"
      />
    </div>
  )
}
export default Pagination