import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const AboutPage = ({ data }, location) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout title={siteTitle}>
			<SEO title="About" keywords={[ `blog`, `gatsby`, `javascript`, `react` ]} />

			<article className="post-content page-template no-image">
				<div className="post-content-body">
					<h1 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
						Quem Somos
					</h1>

					<figure className="kg-card kg-image-card kg-width-wide">
						<Img fluid={data.benchAccounting.childImageSharp.fluid} className="kg-image" />
						<figcaption>A TOPEL Energias Renováveis faz parte do grupo TPL Engenharia</figcaption>
					</figure>

					<h3 id="dynamic-styles">
						A TOPEL Energias Renováveis faz parte do grupo TPL Engenharia. Grupo esse com mais de 40 anos de
						experiência no setor elétrico.
					</h3>
					<p>
						A partir da preocupação socioambiental, aliado aos avanços tecnológicos e as novas tendências do
						setor, fundamos a TOPEL Energias Renováveis com o objetivo de trazer soluções que busque uma
						redução de custos de energia elétrica de nossos clientes através de fontes renováveis.
					</p>
					<p>
						Portanto temos o diferencial de possuir um quadro de técnicos e engenheiros altamente
						capacitados para atuar em todas as etapas do processo, desde o desenvolvimento do projeto até a
						sua operação e manutenção.
					</p>
					{/*
					<h3 id="dynamic-styles">Tabalhe Conosco</h3>
					<p>
						Conheça as nossas oportunidades de trabalho e candidate-se às nossas vagas aqui. Venha fazer
						parte da equipe.  <a href="/faleConosco">Fale conosco</a>.
					</p>
					
					<figure className="kg-card kg-image-card kg-width-wide">
						<Img fluid={data.benchAccounting.childImageSharp.fluid} className="kg-image" />
						<figcaption>Large imagery is at the heart of this theme</figcaption>
						</figure>
						*/}
				</div>
			</article>
		</Layout>
	);
};

const indexQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		benchAccounting: file(relativePath: { eq: "Solar-panels-wind-turbines-electricity-pylon-tn.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1360) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default (props) => (
	<StaticQuery query={indexQuery} render={(data) => <AboutPage location={props.location} data={data} {...props} />} />
);
