import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Paper, Button } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Carousel from 'react-material-ui-carousel'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

const pages = ['Home', 'About', 'Shop', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    var items = [
        {
            pic1: "assets/pic/pic_ (43).jpg"
        },
        {
            pic1: "assets/pic/groom (12).jpg"
        },
        {
            pic1: "assets/pic/pic_ (11).jpg"
        },
        {
            pic1: "assets/pic/pic_ (35).jpg"
        },
        {
            pic1: "assets/pic/pic_ (3).jpg"
        },
        {
            pic1: "assets/pic/pic_ (4).jpg"
        },
        {
            pic1: "assets/pic/pic_ (5).jpg"
        },
        {
            pic1: "assets/pic/pic_ (10).jpg"
        },
        {
            pic1: "assets/pic/pic_ (9).jpg"
        },
        {
            pic1: "assets/pic/pic_ (8).jpg"
        }

    ]

    function Item(props) {
        return (
            <Paper>
                <img src={props.item.pic1} alt="" className='w-100' height="420px" />
            </Paper>
        )
    }

    return (
        <>

            <AppBar position="static" className='background mb-1'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={require("../../pic/me.jpg")} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
            <h5 className='background p-2 text-light text-center'>Latest Product Items..</h5>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (40).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (25).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (23).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (34).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (43).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (7).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (10).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >
                    <Grid xl={2} lg={3} md={4} sm={6} xs={12} className="mb-1" >
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/assets/pic/pic_ (9).jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Product item:1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price:&#8377;<del>2100</del><sub>1200</sub>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" className='background btn btn-sm w-100'>
                                    Add To Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid >

                </Grid>
            </Box >
            <div className="d-flex bg-dark text-light justify-content-between  px-4 ">
                <div>
                    <img src={require("../../pic/facebook.png")} height="30px" alt="" />
                    <img src={require("../../pic/youtube.png")} height="40px" alt="" />
                    <img src={require("../../pic/instagram.png")} height="27px" alt="" />
                </div>
                <p className='xyz'>myshop@gmail.com</p>
            </div>

        </>
    )
}
