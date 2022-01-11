import { gql, useQuery } from '@apollo/client';
import { Card, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';

const columns = [
	{ field: 'subgrantee_clean', headerName: 'County', width: 125 },
	{ field: 'state', headerName: 'State', width: 125 },
	{ field: 'grantclass', headerName: 'Grant Class', width: 125 },
	{
		field: 'numberOfFinalProperties',
		headerName: 'Property Count',
		width: 125,
	},
	{ field: 'projectAmount', headerName: 'Dollar Amount', width: 125 },
	{ field: 'programFy', headerName: 'Year', width: 125 },
	{ field: 'costSharePercentage', headerName: 'FEMA Cost Share %', width: 125 },
	{ field: 'benefitCostRatio', headerName: 'Benefit Cost Ratio', width: 125 },
	{ field: 'id', headerName: 'ID', width: 90 },
];

const COUNTY_GRANTS = gql`
	query countyGrants {
		listCountygrants(limit: 1000) {
			items {
				county
				uuid
				id
				subgrantee_clean
				state
				grantclass
				numberOfFinalProperties
				projectAmount
				programFy
				benefitCostRatio
				costSharePercentage
			}
		}
	}
`;

const COUNTY_BUYOUT_GRANTS = gql`
	query countyBuyoutGrants {
		listCountybuyoutgrants(limit: 1000) {
			items {
				county
				uuid
				subgrantee_clean
				state
				grantcount
				propertycount
				dollaramount
			}
		}
	}
`;

export default function CountyOverview() {
	const params = useParams();
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});

	const { loading, error, data } = useQuery(COUNTY_BUYOUT_GRANTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const subgrantee = data.listCountybuyoutgrants.items.map(
		(subgrantee) => subgrantee.subgrantee_clean
	);
	const subgranteeMapper = subgrantee.find((item) => item === params.countyId);
	console.log(subgranteeMapper);

	function getCounty() {
		return data.listCountybuyoutgrants.items.find(
			(item) => item.subgrantee_clean === subgranteeMapper
		);
	}

	let item = getCounty(parseInt(params.invoiceId, 10));

	return (
		<>
			<Card elevation={0}>
				<h2>
					County: {item.county} ({item.state})
				</h2>
				<p>
					<strong>Number of Grants:</strong> {item.grantcount} <br />
					<strong>Total Dollar Amount:</strong>{' '}
					{formatter.format(item.dollaramount)} <br />
					<strong>Number of Properties:</strong> {item.propertycount}
				</p>
			</Card>
			<CountyTables />
		</>
	);
}

function CountyTables() {
	const params = useParams();
	const { loading, error, data } = useQuery(COUNTY_GRANTS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const subgrantee = data.listCountygrants.items.map(
		(subgrantee) => subgrantee.subgrantee_clean
	);
	const subgranteeMapper = subgrantee.find((item) => item === params.countyId);

	return (
		<Container sx={{ height: '950px', width: '100%' }}>
			<DataGrid
				rowHeight={150}
				sx={{ m: 2 }}
				rows={data.listCountygrants.items.filter(
					(subgrantee) => subgrantee.subgrantee_clean === subgranteeMapper
				)}
				columns={columns}
			/>
		</Container>
	);
}
