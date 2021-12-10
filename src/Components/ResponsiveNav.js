import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'





export const ResponsiveNav = () => {
    return (
     <Drawer>
         <List>
             <ListItem divider button>
                 <ListItemIcon>
                    <ListItemText>Home</ListItemText>
                 </ListItemIcon>
             </ListItem>
             <ListItem divider button>
                 <ListItemIcon>
                    <ListItemText>Map</ListItemText>
                 </ListItemIcon>
             </ListItem>
             <ListItem divider button>
                 <ListItemIcon>
                    <ListItemText>Counties</ListItemText>
                 </ListItemIcon>
             </ListItem>
         </List>
     </Drawer>
    )
}
