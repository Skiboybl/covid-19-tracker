import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'

function InfoBox({title, cases, total}) {
    return (
        <Card>
            <CardContent className='infoBox'>
                {/* Title Coronavirus Cases */}
                <Typography className='infoBox__title' color='textSecondary'>
                    {title}
                </Typography>

                {/*1.2M Number of cases */}
                <h2 className='infoBox__cases'>{cases}</h2>

                {/* 1.2m total cases */}
                <Typography className='infoBox__total' color='textSecondary'>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
