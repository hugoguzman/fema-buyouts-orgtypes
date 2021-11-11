import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function MyButtonGroup(props) {
    const OnClick = () => props.map.flyTo(props.position, props.zoom); 
	return (
		<ButtonGroup
			variant='contained'
			size='small'
			color='secondary'
			aria-label='small button group'
		>
			<Button
				onClick={OnClick}
			>
				Reset View
			</Button>
		</ButtonGroup>
	);
}
