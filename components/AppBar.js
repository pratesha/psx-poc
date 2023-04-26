import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image'
import Link from 'next/link';
import style from '@/styles/AppBar.module.css'

export default function PSXAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className={style.appBar}>
                <Toolbar className={style.toolbar}>
                    <section className={style.iconSection}>
                        <IconButton
                            size="small"
                            edge="start"
                            color="success"
                            aria-label="menu"
                        >
                            <Image src="/psx.png" width={30} height={30} alt='this is banner image' />
                        </IconButton>
                        <Typography variant="subtitle2" component="div" color={"white"} className={style.brandName}>
                            Adobe Photoshop Express
                        </Typography>
                    </section>
                    <section className={style.section}>
                        <Link href={"/all"} >
                            Home
                        </Link>
                        <Link href={"/all"} >
                            Discover
                        </Link>
                        <Link href={"/all"}>
                            Pricing
                        </Link>
                    </section>
                    <Button color="warning" variant='outlined' className={style.signin}>Sign in</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
