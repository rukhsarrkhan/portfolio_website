import React, { useState, useContext } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    padding: 0
};

function ProjectCard({ cardImg, images, cardTitle, cardDesc, projDesc, link }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleOpenSite = () => {
        window.open(link, '_blank');
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const arrowStyle = {
        cursor: 'pointer',
        fontSize: '2rem',
        position: 'absolute',
        top: '67% ',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: 'none',
        borderRadius: '5px',
    };

    return (
        <Grid item xs={4}>
            <Card
                sx={{
                    minWidth: 290,
                    minHeight: 290,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {!isHovered && <CardMedia
                    component="img"
                    image={cardImg}
                    alt={`Image ${cardTitle}`}
                    sx={{
                        height: 290,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />}
                {isHovered && (
                    <>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {cardTitle}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {cardDesc}
                            </Typography>
                        </CardContent>
                        < CardActions
                        >
                            <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                onClick={handleOpen}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </>
                )}
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button onClick={handlePrev} style={{ ...arrowStyle, left: 0 }} disabled={currentIndex === 0}>
                        &#9664;
                    </Button>
                    <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} style={{ width: 800, height: 400 }} />
                    <Button onClick={handleNext} style={{ ...arrowStyle, right: 0 }} disabled={currentIndex === images.length - 1}>
                        &#9654;
                    </Button>
                    <Typography id="modal-modal-title" variant="h6" component="h2"
                        sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', paddingLeft: 2 }}>
                        {cardTitle}
                    </Typography>
                    <Typography id="modal-modal-description"
                        sx={{ mt: 2, fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', textAlign: 'left', paddingLeft: 2, marginTop: 0 }}
                    >
                        {projDesc}
                    </Typography>

                    < CardActions
                        sx={{ paddingLeft: 2, paddingBottom: 2 }}
                    >
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            startIcon={<OpenInNewIcon />}
                            onClick={handleOpenSite}
                        >
                            Visit Site
                        </Button>
                    </CardActions>

                </Box>
            </Modal>
        </Grid >
    );
}

export default ProjectCard;;