import { CloseOutlined, TurnedIn } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, useMediaQuery } from "@mui/material"

export const SideBar = ({ drawerWidth, onCloseSideBar, isOpen }) => {

    const isDestok = useMediaQuery('(min-width:760px)')
    
    return (
        <Box 
            component="nav"
            sx={{
                width: isDestok && drawerWidth ,
                flexShrink:{ sm: 0 }
            }}
            >
            <Drawer
                anchor={ isDestok ? 'left' : 'right'}
                variant={ isDestok ? 'permanent': 'temporary'}
                open={ isOpen }

                sx={{
                    display: { xs: 'block'},
                    "& .MuiDrawer-paper": { boxSizing: 'border-box', width: drawerWidth },
                    backgroundColor: 'primary'
                }}
            >
                <Toolbar>
                    <Typography
                        width="100%" 
                        textAlign="center">Angel Lopez</Typography>
                    <IconButton
                        sx={{
                            display: isDestok && 'none'
                        }}
                        onClick={ onCloseSideBar }
                    >
                        <CloseOutlined />
                    </IconButton>
                </Toolbar>
                <Divider />
                
                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo'].map((day, index) => (
                            <ListItem
                                disablePadding
                                key={index}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedIn />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={day}></ListItemText>
                                        <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. blanditiis ab.'}></ListItemText>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
