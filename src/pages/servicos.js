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
						Serviços
					</h1>
					{/* 
						<figure className="kg-card kg-image-card kg-width-wide">
						<Img fluid={data.benchAccounting.childImageSharp.fluid} className="kg-image" />
                        <figcaption>Large imagery is at the heart of this theme</figcaption>
                        </figure>
                        */}

					<h2 id="dynamic-styles" style={{ textAlign: 'left' }}>
						A Topel tem o compromisso de buscar soluções que reduzam suas despesas com energia eletrica
						atraves da geraçao distribuida adivinda da geraçao de fontes de energias renovaveis
					</h2>
					<p>
						<h3 id="unordered">
							<strong>
								<strong>Desenvolvimento de areas</strong>
							</strong>
						</h3>
						<ul>
							<li>
								A TOPEL tem o Know-How para a identificação de áreas para projeto com excelente
								potencial de energia solar. Além disso temos o conhecimento local que nos possibilita
								uma relação mutua e confiavel com proprietarios de terras.
							</li>
						</ul>
					</p>
					<p>
						<h3 id="unordered">
							<strong>
								<strong>Desenvolvimento de projetos</strong>
							</strong>
						</h3>
						<ul>
							<li>Realizamos projetos específicos as suas necessidades.</li>
						</ul>
					</p>
					<p>
						<h3 id="unordered">
							<strong>
								<strong>EPC Turn Key</strong>
							</strong>
						</h3>
						<ul>
							<li>
								Engineering, procurement and construction - EPC. Nossa responsabilidade é integrar
								soluções completas para a construção de usinas fotovoltaicos. Projeto Executivo,
								Suprimento de equipamentos e materiais, instalações civis e Eletromecânica e
								Comissionamento.
							</li>
						</ul>
					</p>
					<p>
						<h3 id="unordered">
							<strong>
								<strong>Operação e Manutenção</strong>
							</strong>
						</h3>
						<ul>
							<li>
								Somos responsáveis por todas as atividades de operação e manutenção, gestão de
								faturamento e relacionamento com a concessionaria. Por fazermos parte do Grupo TPL
								Engenharia, nos credencia a prestarmos este serviço com excelência.
							</li>
						</ul>
					</p>
					<p>
						<h3 id="unordered">
							<strong>
								<strong>Financiamento</strong>
							</strong>
						</h3>
						<ul>
							<li>
								Todo o investimento financeiro para o desenvolvimento do projeto da usina fotovoltaico é
								de responsabilidade da Topel.
							</li>
						</ul>
					</p>
					<br />
					<p>
						Solicite seu orçamento. <a href="/faleConosco">Fale conosco</a>.
					</p>
					{/*
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
		benchAccounting: file(relativePath: { eq: "istockphoto-498769592-1024x1024.jpg" }) {
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
