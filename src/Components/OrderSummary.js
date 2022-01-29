import React, { Component } from 'react';
import styled from 'styled-components';
import MusicIcon from '../images/icon-music.svg';
import banner from '../images/illustration-hero.svg';
import pattern from '../images/pattern-background-desktop.svg';

const Body = styled.div`
	background: hsl(225, 100%, 94%);
	min-height: 100vh;
	position: relative;
`;

const UpperPattern = styled.div`
	background-image: url(${pattern});
	background-repeat: no-repeat;
	background-size: cover;
	height: 500px;
	min-width: 100vw;
`;

const Container = styled.div`
	position: absolute;
	width: 400px;
	height: 600px;
	max-height: 100vh;
	background-color: white;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	border-radius: 25px;
	display: grid;
	grid-template-rows: 200px auto;
	overflow: hidden;
`;

const Banner = styled.div`
	background-image: url(${banner});
	background-repeat: no-repeat;
	background-size: cover;
`;
const Content = styled.div`
	text-align: center;
	padding: 15px 40px;
	display: grid;
	grid-template-rows: 50px 90px 90px auto;
`;
const Heading = styled.h2`
	color: hsl(223, 47%, 23%);
	font-weight: 900; //dark-blue
	/* font-size: 20px; */
	margin: 0;
	align-self: end;
`;
const Description = styled.p`
	font-size: 16px;
	color: hsl(224, 23%, 55%);
	padding: 0 10px; //Desaturated blue
	line-height: 1.2;
`;
const Plan = styled.div`
	display: grid;
	grid-template-columns: 70px 1fr 1fr;
	background: hsl(225, 100%, 98%);
	height: 80px;
	border-radius: 10px;

	/* div {
		align-self: center;
	} */
`;
const PlanIcon = styled.div`
	background-image: url(${MusicIcon});
	background-repeat: no-repeat;
	background-size: 40px;
	background-position: right;
	/* margin-right: 10px; */
	/* display: block;
	margin: auto; */
`;

const PlanDesc = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
`;

const PlanContent = styled.div`
	color: ${(props) =>
		props.second ? 'hsl(224, 23%, 55%)' : 'hsl(223, 47%, 23%)'};
	font-size: 16px;
	align-self: ${(props) => (props.second ? 'start' : 'end')};
	font-weight: ${(props) => (props.second ? '500' : '700')};
	margin: ${(props) => (props.second ? '5px 0 0 0' : '0')};
`;
// const PlanDesc2 = styled(PlanDesc1)`
// 	align-self: start;
// 	font-weight: 500;
// `;
const PlanLink = styled.div`
	align-self: center;
	a {
		color: hsl(245, 75%, 52%);
		font-weight: 700;

		&:hover {
			text-decoration: none;
			opacity: 80%;
		}
	}

	/* &:hover {
		background: white;
		opacity: 80%;
	} */
`;
const Payment = styled.div`
	padding: 15px 0;
`;

const Button = styled.button`
	width: 100%;
	height: 40px;
	color: ${(props) => (props.cancel ? 'hsl(224, 23%, 55%)' : 'white')};
	font-weight: 700;
	border-radius: 10px;
	background: ${(props) => (props.cancel ? 'white' : 'hsl(245, 75%, 52%)')};
	border: none;
	margin: 10px 0;
	box-shadow: ${(props) =>
		props.cancel ? '' : '0 15px 10px hsl(225, 100%, 94%)'};
	/* -webkit-box-shadow: 0 15px 10px hsl(225, 100%, 94%); */
	cursor: pointer;

	a {
		text-decoration: none;
	}

	&:hover {
		background: ${(props) => (props.cancel ? 'white' : 'hsl(245, 75%, 52%)')};
		opacity: ${(props) => (props.cancel ? '80%' : '80%')};
		color: ${(props) => (props.cancel ? 'black' : 'white')};
	}
`;

class OrderSummary extends Component {
	render() {
		return (
			<div>
				<Body>
					<UpperPattern />
					<Container>
						<Banner />
						<Content>
							<Heading>Order Summary</Heading>
							<Description>
								You can now listen to millions of songs, audiobooks, and
								podcasts on any device anywhere you like!
							</Description>
							<Plan>
								<PlanIcon />
								<PlanDesc>
									<PlanContent>Annual Plan</PlanContent>
									<PlanContent second>$59.99/year</PlanContent>
								</PlanDesc>
								<PlanLink>
									<a href='#'>Change</a>
								</PlanLink>
							</Plan>
							<Payment>
								<a href='#'>
									<Button>Proceed to Payment</Button>
								</a>
								<a href='#'>
									<Button cancel>Cancel Order</Button>
								</a>
							</Payment>
						</Content>
					</Container>
				</Body>
			</div>
		);
	}
}

export default OrderSummary;
