import React from 'react'
// Components

// Styles
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './home.scss'
export default function home() {
  return (
    <div className='home'>
        <section className='home__awards'>
            <h5 className='home__awards__title'>Awards & Recognitions</h5>
        </section>
        <section className='home__name'>
            <h1 className='home__name__text'>
                <span>Isaac</span>
                <br />
                <span>Gonzalez</span>
            </h1>
        </section>
        <section className='home__projects'>
            <Accordion className='home__projects__accordion'>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='home__projects__accordion__summary'
                >
                    <Typography className='home__projects__accordion__summary-text'>01 - OSS</Typography>
                </AccordionSummary>
                <AccordionDetails className='home__projects__accordion__details'>
                    <Typography className="home__projects__accordion__details-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='home__projects__accordion'>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='home__projects__accordion__summary'
                >
                    <Typography className='home__projects__accordion__summary-text'>02 - LOVE</Typography>
                </AccordionSummary>
                <AccordionDetails className='home__projects__accordion__details'>
                    <Typography className="home__projects__accordion__details-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='home__projects__accordion'>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='home__projects__accordion__summary'
                >
                    <Typography className='home__projects__accordion__summary-text'>03 - World of Devcraft</Typography>
                </AccordionSummary>
                <AccordionDetails className='home__projects__accordion__details'>
                    <Typography className="home__projects__accordion__details-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </section>
    </div>
  )
}
