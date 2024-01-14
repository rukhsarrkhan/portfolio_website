import React, { useState } from "react";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
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

const Project = ({ cardImg, images, cardTitle, cardDesc, projDesc, link }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        <>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-full mx-auto  mt-[2rem] bg-white' src={cardImg} alt="/" />
                <h2 className='text-2xl font-bold text-center py-4'>{cardTitle}</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>{cardDesc}</p>
                </div>
                <button className='bg-[#c78eac] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={handleOpen}>Learn More</button>
            </div>
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
                    <img src={images[currentIndex]} alt={`${currentIndex + 1}`} style={{ width: 800, height: 400 }} />
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
        </>
    );
};

export default Project;