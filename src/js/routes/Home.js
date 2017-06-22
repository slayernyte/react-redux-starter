import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/base/utils.scss';
import '../../scss/objects/o-main-content.scss';
import '../../scss/objects/o-content-txt.scss';

const Home = (props) => {

	return (
		<div className="o-main-content u-depth-1">
			<p className="o-content-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem
				facilis porro recusandae rem, ut. Accusamus aperiam beatae consequuntur impedit iure libero, magnam nobis nulla
				omnis quas sed temporibus ullam.</p>
			<p className="o-content-txt">A architecto autem doloribus dolorum ducimus eligendi est eum eveniet explicabo
				impedit inventore ipsum neque nobis nostrum numquam odio pariatur perferendis quam quas quia quod ratione sequi
				suscipit tempora, voluptas!</p>
			<p className="o-content-txt">Aliquid consectetur ducimus earum, et fuga fugit, nam, nesciunt numquam odio pariatur
				praesentium qui quo suscipit? A autem dolore dolorum id in iste, laborum non recusandae repudiandae soluta.
				Magnam, minus?</p>
		</div>

	);
};

export default Home;
